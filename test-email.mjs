// 測試郵件發送功能
const testEmail = async () => {
  console.log("開始測試 jimmy.chen@therlect.com 的郵件收發功能...\n");
  
  try {
    // 調用正確的 tRPC 端點
    const response = await fetch("http://localhost:3000/api/trpc/contact.submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        json: {
          name: "測試用戶",
          email: "test@example.com",
          phone: "+886-1234-5678",
          company: "測試公司",
          subject: "郵件收發功能測試",
          message: "這是一封測試郵件，用於驗證 jimmy.chen@therlect.com 是否能正常接收郵件。",
        },
      }),
    });

    const result = await response.json();
    console.log("郵件發送結果:", JSON.stringify(result, null, 2));
    
    if (result.result?.data?.json?.success) {
      console.log("\n✅ 郵件發送成功！");
      console.log("訊息已發送到 jimmy.chen@therlect.com 和 cmcjc8888@gmail.com");
      console.log("請檢查這兩個郵箱是否收到測試郵件。");
    } else {
      console.log("\n❌ 郵件發送失敗");
      console.log("錯誤信息:", result.error);
    }
  } catch (error) {
    console.error("測試過程中出錯:", error.message);
  }
};

testEmail();
