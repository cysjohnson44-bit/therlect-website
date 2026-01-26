import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type PublicContext = TrpcContext & { user: null };

function createPublicContext(): PublicContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("booking.create", () => {
  it("should create a booking with valid input", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.booking.create({
      name: "Test User",
      email: "test@example.com",
      phone: "+886-2-1234-5678",
      date: "2026-02-01",
      message: "Test booking",
    });

    expect(result).toBeDefined();
    expect(result.name).toBe("Test User");
    expect(result.email).toBe("test@example.com");
    expect(result.status).toBe("pending");
  });

  it("should reject invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.booking.create({
        name: "Test User",
        email: "invalid-email",
        phone: "+886-2-1234-5678",
        date: "2026-02-01",
      });
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

describe("booking.list", () => {
  it("should list bookings", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.booking.list({
      limit: 10,
      offset: 0,
    });

    expect(Array.isArray(result)).toBe(true);
  });
});

describe("chat.history", () => {
  it("should retrieve chat history", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const sessionId = "test-session-" + Date.now();
    
    // Get history
    const history = await caller.chat.history({
      sessionId,
    });

    expect(Array.isArray(history)).toBe(true);
  });
});
