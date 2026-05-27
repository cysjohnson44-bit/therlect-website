import { sendEmail } from "./server/_core/email.ts";

// 驗證郵件模板
function generateVerificationEmailTemplate() {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #00d4ff 0%, #0099ff 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; }
    .content { background: #f5f5f5; padding: 20px; margin-top: 20px; border-radius: 8px; }
    .verification-code { background: white; padding: 15px; border-radius: 4px; text-align: center; font-size: 24px; font-weight: bold; color: #0099ff; letter-spacing: 2px; margin: 20px 0; }
    .footer { margin-top: 20px; font-size: 12px; color: #999; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>郵箱驗證</h2>
      <p>Therlect 汎海科技官方網站</p>
    </div>
    
    <div class="content">
      <p>親愛的使用者，</p>
      
      <p>感謝您設置 jimmy.chen@therlect.com 作為 Therlect 汎海科技的聯絡郵箱。</p>
      
      <p>請使用以下驗證碼來確認您的郵箱地址：</p>
      
      <div class="verification-code">VERIFY-2026-THERLECT</div>
      
      <p>如果您沒有進行此操作，請忽略此郵件。</p>
      
      <p style="margin-top: 20px; color: #666;">
        此驗證郵件由 Therlect 汎海科技官方網站自動發送。
      </p>
    </div>
    
    <div class="footer">
      <p>© 2026 Therlect 汎海科技。保留所有權利。</p>
    </div>
  </div>
</body>
</html>
  `;
}

async function sendVerificationEmail() {
  try {
    console.log("發送驗證郵件到 jimmy.chen@therlect.com...");
    
    const result = await sendEmail({
      to: "jimmy.chen@therlect.com",
      subject: "Therlect 汎海科技 - 郵箱驗證",
      htmlContent: generateVerificationEmailTemplate(),
    });
    
    if (result) {
      console.log("✅ 驗證郵件發送成功！");
      console.log("請檢查 jimmy.chen@therlect.com 的收件箱。");
    } else {
      console.log("❌ 驗證郵件發送失敗");
    }
  } catch (error) {
    console.error("❌ 發送驗證郵件時出錯：", error);
  }
}

sendVerificationEmail();
