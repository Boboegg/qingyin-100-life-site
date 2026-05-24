# Claude Handoff: 青銀共創百歲人生網站

更新時間：2026-05-24 11:46 CST

## 目前任務

Bobo 要幫老師做研究室/計畫網站，名稱為「青銀共創百歲人生」。目前方向已拍板：

- 先用 GitHub 免費方案，不買主機、不買網域。
- 技術用 Astro + GitHub Pages。
- 網站要雙語：中文主站、英文 `/en/`。
- 視覺主體用「手繪塗鴉」，但要轉成正式、溫暖的「手繪田野筆記風」，不要做成兒童風。
- 素材以照片、影片、新聞、活動紀錄為主，正式文件很少。
- 影片不放 GitHub，之後用 YouTube、學校平台或雲端影音嵌入。
- 不捏造任何研究成果、新聞、數字、合作單位；目前只做設計佔位。

## 專案位置

```text
/Users/boboegg/bobohome-agent-claude/100_Todo/projects/qingyin-100-life-site
```

目前這個資料夾在 `bobohome-agent-claude` repo 裡，但 Bobo 原意是「直接在 GitHub 開一個專案」。建議 Claude 接手時把這個資料夾當成一個獨立 GitHub repo 推上去，不要直接混進 agent 主 repo，除非 Bobo 另行拍板。

## 已完成程式碼

主要檔案：

- `package.json`：Astro 6.3.7，scripts 已關閉 Astro telemetry，避免本機 sandbox 寫入 `~/Library/Preferences/astro`。
- `astro.config.mjs`：設定 GitHub Pages URL 與 base path `/qingyin-100-life-site`，中文預設、英文 `/en/`。
- `.github/workflows/deploy.yml`：GitHub Pages Actions workflow。
- `src/data/site.ts`：中英文網站名稱、導覽、首頁文案、各頁骨架文案。
- `src/components/BaseLayout.astro`：共用版型、導覽、語言切換、footer、scroll reveal。
- `src/components/HomePage.astro`：首頁，手繪拼貼、照片/影片佔位、主題卡、計畫卡、影像牆、成果剪報區。
- `src/components/PageShell.astro`：內頁共用骨架。
- `src/styles/global.css`：手繪田野筆記風 CSS，含紙張格線背景、手繪卡片、便利貼、膠帶照片框、CTA、RWD。
- `src/pages/`：中文頁面。
- `src/pages/en/`：英文頁面。
- `public/favicon.svg`：簡易手繪風 favicon。
- `README.md`：基本本機預覽、建置、內容維護、GitHub Pages 說明。

已建立頁面：

```text
/                 中文首頁
/about/           關於我們
/projects/        計畫與實踐
/media/           影像紀錄
/outcomes/        成果與報導
/people/          團隊成員
/contact/         聯絡合作
/en/              English Home
/en/about/
/en/projects/
/en/media/
/en/outcomes/
/en/people/
/en/contact/
```

## 設計方案

風格名稱：

```text
Hand-Drawn Field Notebook
手繪田野筆記風
```

視覺語彙：

- 米色紙張背景、淡淡格線。
- 手繪箭頭、圈圈、波浪線、底線。
- 計畫卡像便利貼。
- 照片與影片縮圖像被紙膠帶貼上去。
- 成果與新聞用剪報簿感。
- 正式字體仍用 Noto Sans TC / Inter 類似的乾淨 sans-serif，不整站 Comic Sans。

目前 CSS tokens：

```text
paper        #fbf6ee
paper deep   #f2e7d8
ink          #2d2a26
teal         #2a6b6e
coral        #fb7185
yellow       #f7c84b
green        #4fb585
blue         #4a86e0
```

首頁敘事：

1. Hero：研究手札 / Field Notebook、主標「青銀共創百歲人生」、副標「把世代相遇的現場，寫成一份共同生活的研究手札。」
2. 核心關懷：青銀共學、百歲人生、地方實踐。
3. 計畫與實踐：三張代表計畫卡，先放佔位。
4. 影像紀錄：照片牆與影片嵌入佔位。
5. 成果與報導：剪報簿區塊佔位。
6. 合作邀請：學校、社區、公共部門與在地組織。

## 驗證結果

已跑：

```bash
npm i --ignore-scripts
npm run build
npm audit --omit=dev
```

結果：

- `npm run build` 成功。
- Astro 產出 14 個靜態頁面。
- `npm audit --omit=dev` 回報 `found 0 vulnerabilities`。

注意：第一次 build 曾因 Astro telemetry 嘗試寫入 `~/Library/Preferences/astro` 被 sandbox 擋下，已透過 scripts 加上 `ASTRO_TELEMETRY_DISABLED=1` 修正。

## GitHub 狀態

尚未建立遠端 GitHub repo，原因：

```text
gh auth status
X Failed to log in to github.com account Boboegg
The token in default is invalid.
```

Claude 接手要先做：

```bash
gh auth login -h github.com
```

Bobo 拍板後再建立 repo。建議 repo 名稱維持：

```text
qingyin-100-life-site
```

因為 `astro.config.mjs` 的 base 已設定為：

```js
base: '/qingyin-100-life-site'
```

如果 GitHub repo 名稱改掉，必須同步改 `astro.config.mjs` 的 `base`，不然 GitHub Pages 的 CSS/JS 路徑會錯。

## Claude 下一步建議

1. 先開本機預覽：

```bash
cd /Users/boboegg/bobohome-agent-claude/100_Todo/projects/qingyin-100-life-site
npm run dev
```

預期網址：

```text
http://localhost:4321/qingyin-100-life-site/
```

2. 用瀏覽器/Playwright 檢查：

- 桌機首頁第一屏是否漂亮。
- 手機寬度是否不爆版。
- 中文導覽與英文 `/en/` 導覽是否可用。
- 語言切換是否正確。

3. 若 Bobo 滿意第一版視覺，再做獨立 GitHub repo：

```bash
cd /Users/boboegg/bobohome-agent-claude/100_Todo/projects/qingyin-100-life-site
git init
git add .
git commit -m "Initial Astro site for Qingyin 100 Life"
gh repo create Boboegg/qingyin-100-life-site --public --source=. --remote=origin --push
```

注意：commit / push 仍需 Bobo 明確拍板。

4. GitHub repo 建好後，到 repo Settings -> Pages，source 選 GitHub Actions。

5. 後續內容資料化建議：

```text
src/content/projects/zh-tw/
src/content/projects/en/
src/content/news/zh-tw/
src/content/news/en/
src/data/media.ts
src/data/people.ts
```

## Known Issues

- 🔴 GitHub 遠端 repo 尚未建立，因 `gh` token 失效。下次先處理 auth，再建立 repo。
- 🟡 目前只有設計展示與骨架頁，沒有真實照片、影片、新聞、團隊資料。
- 🟡 尚未跑 Playwright screenshot 視覺檢查，因 Bobo 改要求先交接給 Claude。
- 🟡 `node_modules/` 與 `dist/` 已產生但 `.gitignore` 會忽略；Claude 建獨立 repo 時確認不要把它們加進 git。
- 🟡 npm scripts 用 `ASTRO_TELEMETRY_DISABLED=1`，適合 macOS/Linux/GitHub Actions；若未來 Windows 直接開發，要改成 cross-env 或用 shell 相容方式。

## 給 Claude 的開場提示

請從這裡接：

> 讀 `/Users/boboegg/bobohome-agent-claude/100_Todo/projects/qingyin-100-life-site/CLAUDE_HANDOFF.md`，接續「青銀共創百歲人生」Astro + GitHub Pages 雙語網站。先本機預覽手繪田野筆記風首頁，檢查 RWD 與語言切換；GitHub repo 尚未建立，因 gh token 失效，建立 repo / commit / push 前要等 Bobo 拍板。
