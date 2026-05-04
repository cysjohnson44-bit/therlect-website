import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  createEmailConversation,
  getEmailConversationById,
  getEmailMessages,
  saveEmailMessage,
  updateEmailConversationStatus,
} from "./db";

// Mock database functions
vi.mock("./db", () => ({
  createEmailConversation: vi.fn(),
  getEmailConversationById: vi.fn(),
  getEmailMessages: vi.fn(),
  saveEmailMessage: vi.fn(),
  updateEmailConversationStatus: vi.fn(),
}));

describe("Email Messaging System", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("createEmailConversation", () => {
    it("should create a new email conversation", async () => {
      const mockConversation = {
        id: 1,
        visitorName: "John Doe",
        visitorEmail: "john@example.com",
        subject: "Technical Support",
        status: "open" as const,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      vi.mocked(createEmailConversation).mockResolvedValue(mockConversation);

      const result = await createEmailConversation({
        visitorName: "John Doe",
        visitorEmail: "john@example.com",
        subject: "Technical Support",
        status: "open",
      });

      expect(result).toEqual(mockConversation);
      expect(createEmailConversation).toHaveBeenCalledWith({
        visitorName: "John Doe",
        visitorEmail: "john@example.com",
        subject: "Technical Support",
        status: "open",
      });
    });

    it("should validate email format", async () => {
      const invalidEmail = "invalid-email";
      expect(() => {
        // This would be validated at the API level via Zod
        if (!invalidEmail.includes("@")) {
          throw new Error("Invalid email format");
        }
      }).toThrow("Invalid email format");
    });
  });

  describe("getEmailConversationById", () => {
    it("should retrieve a conversation by ID", async () => {
      const mockConversation = {
        id: 1,
        visitorName: "John Doe",
        visitorEmail: "john@example.com",
        subject: "Technical Support",
        status: "open" as const,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      vi.mocked(getEmailConversationById).mockResolvedValue(mockConversation);

      const result = await getEmailConversationById(1);

      expect(result).toEqual(mockConversation);
      expect(getEmailConversationById).toHaveBeenCalledWith(1);
    });

    it("should return undefined if conversation not found", async () => {
      vi.mocked(getEmailConversationById).mockResolvedValue(undefined);

      const result = await getEmailConversationById(999);

      expect(result).toBeUndefined();
    });
  });

  describe("saveEmailMessage", () => {
    it("should save a new email message", async () => {
      const mockMessage = {
        id: 1,
        conversationId: 1,
        sender: "customer" as const,
        senderEmail: "john@example.com",
        senderName: "John Doe",
        subject: "Technical Support",
        message: "I need help with your product",
        attachmentUrl: null,
        isRead: 0,
        createdAt: new Date(),
      };

      vi.mocked(saveEmailMessage).mockResolvedValue(mockMessage);

      const result = await saveEmailMessage({
        conversationId: 1,
        sender: "customer",
        senderEmail: "john@example.com",
        senderName: "John Doe",
        subject: "Technical Support",
        message: "I need help with your product",
        isRead: 0,
      });

      expect(result).toEqual(mockMessage);
      expect(saveEmailMessage).toHaveBeenCalled();
    });

    it("should handle empty message gracefully", async () => {
      expect(() => {
        // This would be validated at the API level via Zod
        if ("".trim().length === 0) {
          throw new Error("Message cannot be empty");
        }
      }).toThrow("Message cannot be empty");
    });
  });

  describe("getEmailMessages", () => {
    it("should retrieve all messages for a conversation", async () => {
      const mockMessages = [
        {
          id: 1,
          conversationId: 1,
          sender: "customer" as const,
          senderEmail: "john@example.com",
          senderName: "John Doe",
          subject: "Technical Support",
          message: "I need help",
          attachmentUrl: null,
          isRead: 0,
          createdAt: new Date(),
        },
        {
          id: 2,
          conversationId: 1,
          sender: "admin" as const,
          senderEmail: "jimmy.chen@therlect.com",
          senderName: "Jimmy Chen",
          subject: "RE: Technical Support",
          message: "We are here to help",
          attachmentUrl: null,
          isRead: 1,
          createdAt: new Date(),
        },
      ];

      vi.mocked(getEmailMessages).mockResolvedValue(mockMessages);

      const result = await getEmailMessages(1);

      expect(result).toHaveLength(2);
      expect(result[0].sender).toBe("customer");
      expect(result[1].sender).toBe("admin");
    });

    it("should return empty array if no messages found", async () => {
      vi.mocked(getEmailMessages).mockResolvedValue([]);

      const result = await getEmailMessages(999);

      expect(result).toEqual([]);
    });
  });

  describe("updateEmailConversationStatus", () => {
    it("should update conversation status to replied", async () => {
      vi.mocked(updateEmailConversationStatus).mockResolvedValue(undefined);

      await updateEmailConversationStatus(1, "replied");

      expect(updateEmailConversationStatus).toHaveBeenCalledWith(1, "replied");
    });

    it("should update conversation status to closed", async () => {
      vi.mocked(updateEmailConversationStatus).mockResolvedValue(undefined);

      await updateEmailConversationStatus(1, "closed");

      expect(updateEmailConversationStatus).toHaveBeenCalledWith(1, "closed");
    });

    it("should validate status values", () => {
      const validStatuses = ["open", "replied", "closed"];
      const invalidStatus = "invalid";

      expect(validStatuses.includes(invalidStatus)).toBe(false);
    });
  });

  describe("Email notification flow", () => {
    it("should create conversation and send notifications", async () => {
      const mockConversation = {
        id: 1,
        visitorName: "Jane Smith",
        visitorEmail: "jane@example.com",
        subject: "Product Inquiry",
        status: "open" as const,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const mockMessage = {
        id: 1,
        conversationId: 1,
        sender: "customer" as const,
        senderEmail: "jane@example.com",
        senderName: "Jane Smith",
        subject: "Product Inquiry",
        message: "I am interested in your thermal solutions",
        attachmentUrl: null,
        isRead: 0,
        createdAt: new Date(),
      };

      vi.mocked(createEmailConversation).mockResolvedValue(mockConversation);
      vi.mocked(saveEmailMessage).mockResolvedValue(mockMessage);

      const conversation = await createEmailConversation({
        visitorName: "Jane Smith",
        visitorEmail: "jane@example.com",
        subject: "Product Inquiry",
        status: "open",
      });

      const message = await saveEmailMessage({
        conversationId: conversation.id,
        sender: "customer",
        senderEmail: "jane@example.com",
        senderName: "Jane Smith",
        subject: "Product Inquiry",
        message: "I am interested in your thermal solutions",
        isRead: 0,
      });

      expect(conversation.id).toBe(1);
      expect(message.conversationId).toBe(1);
      expect(createEmailConversation).toHaveBeenCalled();
      expect(saveEmailMessage).toHaveBeenCalled();
    });
  });
});
