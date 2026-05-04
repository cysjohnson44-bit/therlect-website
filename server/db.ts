import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, bookings, InsertBooking, Booking, chatMessages, InsertChatMessage, emailConversations, InsertEmailConversation, EmailConversation, emailMessages, InsertEmailMessage, EmailMessage } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Booking queries
export async function createBooking(booking: InsertBooking): Promise<Booking> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.insert(bookings).values(booking);
  const id = result[0].insertId as number;
  const created = await db.select().from(bookings).where(eq(bookings.id, id)).limit(1);
  return created[0]!;
}

export async function getBookings(limit = 50, offset = 0) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  return db.select().from(bookings).limit(limit).offset(offset);
}

// Chat message queries
export async function saveChatMessage(message: InsertChatMessage) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  return db.insert(chatMessages).values(message);
}

export async function getChatHistory(sessionId: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  return db.select().from(chatMessages).where(eq(chatMessages.sessionId, sessionId)).orderBy(chatMessages.createdAt);
}

// Email conversation queries
export async function createEmailConversation(conversation: InsertEmailConversation): Promise<EmailConversation> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.insert(emailConversations).values(conversation);
  const id = result[0].insertId as number;
  const created = await db.select().from(emailConversations).where(eq(emailConversations.id, id)).limit(1);
  return created[0]!;
}

export async function getEmailConversations(limit = 50, offset = 0) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  return db.select().from(emailConversations).orderBy(desc(emailConversations.updatedAt)).limit(limit).offset(offset);
}

export async function getEmailConversationById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.select().from(emailConversations).where(eq(emailConversations.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateEmailConversationStatus(id: number, status: "open" | "replied" | "closed") {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  return db.update(emailConversations).set({ status, updatedAt: new Date() }).where(eq(emailConversations.id, id));
}

// Email message queries
export async function saveEmailMessage(message: InsertEmailMessage): Promise<EmailMessage> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.insert(emailMessages).values(message);
  const id = result[0].insertId as number;
  const created = await db.select().from(emailMessages).where(eq(emailMessages.id, id)).limit(1);
  return created[0]!;
}

export async function getEmailMessages(conversationId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  return db.select().from(emailMessages).where(eq(emailMessages.conversationId, conversationId)).orderBy(emailMessages.createdAt);
}

export async function markEmailMessageAsRead(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  return db.update(emailMessages).set({ isRead: 1 }).where(eq(emailMessages.id, id));
}

// TODO: add feature queries here as your schema grows.
