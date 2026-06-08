# Therlect 網站 - Render 部署指南

## 概述

本指南將幫助您將 Therlect 網站從 Manus 平台遷移到 Render + GitHub，使用您自己的域名 therlect.com。

---

## 第 1 步：準備工作

✅ **已完成：**
- GitHub 倉庫已創建：https://github.com/cysjohnson44-bit/therlect-website
- 所有代碼已推送到 GitHub
- 中英文國際化已實現
- 項目已優化並準備部署

---

## 第 2 步：在 Render 上部署

### 2.1 創建 Render 賬戶

1. 訪問 https://render.com
2. 點擊「Sign Up」
3. 使用 GitHub 賬戶登錄（推薦）或創建新賬戶

### 2.2 創建新的 Web Service

1. 登錄 Render 後，點擊「New +」
2. 選擇「Web Service」
3. 選擇「Connect a repository」
4. 搜索並選擇 `therlect-website` 倉庫
5. 點擊「Connect」

### 2.3 配置部署設置

在 Web Service 配置頁面中，填寫以下信息：

| 項目 | 值 |
|------|-----|
| **Name** | therlect-website |
| **Environment** | Node |
| **Region** | Singapore（新加坡） |
| **Branch** | main |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Plan** | Free（免費方案） |

### 2.4 設置環境變數

在「Environment」部分，添加以下環境變數：

```
NODE_ENV=production
DATABASE_URL=<將在下一步配置>
JWT_SECRET=<自動生成>
VITE_APP_ID=<從 Manus 複製>
OAUTH_SERVER_URL=<從 Manus 複製>
VITE_OAUTH_PORTAL_URL=<從 Manus 複製>
```

**注意：** 如果您不需要 OAuth 功能，可以跳過最後三個變數。

### 2.5 創建數據庫（可選）

如果需要數據庫支持：

1. 在 Render 儀表板中，點擊「New +」
2. 選擇「PostgreSQL」
3. 填寫數據庫名稱：`therlect-db`
4. 複製連接字符串到 `DATABASE_URL` 環境變數

### 2.6 部署

1. 點擊「Create Web Service」
2. Render 會自動開始構建和部署
3. 等待部署完成（通常需要 5-10 分鐘）
4. 部署完成後，您會獲得一個臨時 URL，例如：`https://therlect-website.onrender.com`

---

## 第 3 步：配置自定義域名

### 3.1 在 Render 中添加自定義域名

1. 在 Web Service 設置中，找到「Custom Domain」部分
2. 點擊「Add Custom Domain」
3. 輸入您的域名：`therlect.com`
4. 點擊「Add Domain」
5. Render 會為您生成 DNS 記錄信息

### 3.2 在 GoDaddy 中配置 DNS

1. 登錄 GoDaddy（https://www.godaddy.com）
2. 進入「我的產品」→ 選擇 `therlect.com`
3. 點擊「管理 DNS」
4. 找到 DNS 記錄部分
5. 添加或修改以下記錄：

| 類型 | 名稱 | 值 |
|------|------|-----|
| CNAME | www | `therlect-website.onrender.com` |
| A | @ | `<Render 提供的 IP 地址>` |

**或者（推薦）：**

| 類型 | 名稱 | 值 |
|------|------|-----|
| CNAME | @ | `therlect-website.onrender.com` |
| CNAME | www | `therlect-website.onrender.com` |

6. 點擊「保存」
7. 等待 DNS 生效（通常需要 15-30 分鐘）

### 3.3 驗證域名

1. 訪問 https://therlect.com
2. 確認網站正常加載
3. 檢查 HTTPS 是否正常工作（Render 會自動配置 SSL 證書）

---

## 第 4 步：測試和驗證

### 4.1 功能測試

- [ ] 訪問首頁並驗證所有內容正確顯示
- [ ] 測試中文/英文語言切換
- [ ] 測試所有導航菜單和頁面
- [ ] 測試所有表單和按鈕功能
- [ ] 驗證圖片正確加載
- [ ] 測試聯絡表單提交

### 4.2 性能測試

- [ ] 檢查頁面加載速度
- [ ] 驗證移動設備響應式設計
- [ ] 檢查瀏覽器控制台是否有錯誤
- [ ] 測試不同瀏覽器的兼容性

### 4.3 SEO 和元數據

- [ ] 驗證頁面標題正確
- [ ] 檢查 meta 描述
- [ ] 驗證 Open Graph 標籤
- [ ] 檢查 robots.txt

---

## 第 5 步：持續集成和自動部署

### 5.1 自動部署配置

Render 已自動配置 GitHub 集成。每當您推送代碼到 `main` 分支時：

1. Render 會自動檢測更改
2. 觸發新的構建
3. 自動部署到生產環境

### 5.2 推送新代碼

```bash
cd /home/ubuntu/therlect-website
git add .
git commit -m "feat: 您的更改描述"
git push origin main
```

---

## 常見問題

### Q1: 如何查看部署日誌？

在 Render 儀表板中，選擇您的 Web Service，然後點擊「Logs」標籤查看實時日誌。

### Q2: 如何回滾到之前的版本？

1. 在 Render 儀表板中，點擊「Deployments」
2. 選擇之前的部署版本
3. 點擊「Redeploy」

### Q3: 如何更新環境變數？

1. 在 Web Service 設置中，找到「Environment」部分
2. 編輯需要更新的環境變數
3. 點擊「Save」
4. Render 會自動重新部署

### Q4: 免費方案有什麼限制？

- 每月 750 小時的運行時間（足以 24/7 運行）
- 0.5GB RAM
- 無法自定義域名（需要升級到付費方案）

**注意：** 如果需要自定義域名，請升級到「Starter」方案（$7/月）。

### Q5: 如何設置自動備份？

Render 免費方案不包括自動備份。建議定期手動備份數據庫或升級到付費方案。

---

## 下一步

1. ✅ 完成上述所有步驟
2. ✅ 驗證網站在 therlect.com 正常運行
3. ✅ 測試所有功能和雙語支持
4. ✅ 監控性能和錯誤日誌
5. ✅ 根據需要進行優化和更新

---

## 支持

如有任何問題，請聯絡：
- **郵件：** jimmy.chen@therlect.com
- **電話：** 請查看網站聯絡頁面

---

**部署日期：** 2026 年 6 月 8 日
**最後更新：** 2026 年 6 月 8 日
