import { describe, it, expect, beforeAll } from "vitest";
import { appRouter } from "./routers";

describe("Admin Login", () => {
  let caller: any;

  beforeAll(() => {
    caller = appRouter.createCaller({
      user: null,
      req: {
        cookies: {},
        headers: { "x-forwarded-proto": "https" },
      } as any,
      res: {
        cookie: () => {},
        clearCookie: () => {},
      } as any,
    });
  });

  it("should reject invalid password", async () => {
    const result = await caller.admin.login({ password: "wrongpassword" });
    expect(result.success).toBe(false);
    expect(result.message).toBe("密碼錯誤");
  });

  it("should accept correct password 12345678", async () => {
    const result = await caller.admin.login({ password: "12345678" });
    expect(result.success).toBe(true);
    expect(result.message).toBe("登入成功");
  });


});
