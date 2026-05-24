# 青銀共創百歲人生｜網站維護手冊

> 對象：Bobo + 未來接手的 AI / 助理 / 計畫人員
> 適用版本：Astro 6.3.7 + GitHub Pages（2026-05-24 起）
> 線上網址：https://boboegg.github.io/qingyin-100-life-site/
> GitHub repo：https://github.com/Boboegg/qingyin-100-life-site

---

## 0. 開工三步驟（每次改網站前都要做）

```bash
# 1. 進到專案資料夾
cd /Users/boboegg/bobohome-agent-claude/100_Todo/projects/qingyin-100-life-site

# 2. 拉最新版（防止本機跟 GitHub 不同步）
git pull

# 3. 啟動本機預覽（會在 http://localhost:4321/qingyin-100-life-site/）
npm run dev
```

改完內容後流程：

```bash
npm run build          # 確認沒打破 production build
git add -A
git status             # 看清楚要 commit 什麼
git commit -m "說明改了什麼"
git push               # 自動觸發 GitHub Actions → 約 30 秒後線上更新
```

---

## 1. 網站檔案地圖（先建立心智模型）

```
qingyin-100-life-site/
├── src/
│   ├── data/site.ts          ← 🔴 90% 的文字改這裡（中英文導覽、首頁、各頁 intro）
│   ├── pages/                ← 各頁面 (.astro)
│   │   ├── index.astro       中文首頁
│   │   ├── about.astro       關於我們
│   │   ├── projects.astro    計畫與實踐
│   │   ├── media.astro       影像紀錄
│   │   ├── outcomes.astro    成果與報導
│   │   ├── people.astro      團隊成員
│   │   ├── contact.astro     聯絡合作
│   │   └── en/               英文版（同上 7 頁）
│   ├── components/
│   │   ├── BaseLayout.astro  共用版型（導覽、語言切換、footer）
│   │   ├── HomePage.astro    首頁版面（hero、主題卡、計畫卡等區塊）
│   │   └── PageShell.astro   內頁共用骨架
│   └── styles/
│       └── global.css        所有視覺樣式
├── public/                   ← 🔴 圖片、PDF、影片放這裡（會被原樣 deploy）
│   └── favicon.svg
├── CONTENT_SOURCE_OF_TRUTH.md ← 寫網站文字前必讀（內容單一來源）
└── .github/workflows/deploy.yml  ← 自動部署設定（不要動）
```

**口訣**：
- 改**文字**找 `src/data/site.ts`
- 改**版面排列**找 `src/components/HomePage.astro` 或 `src/pages/*.astro`
- 改**配色字體**找 `src/styles/global.css`
- 放**圖片/檔案**進 `public/`

---

## 2. 改文字（最常見任務，難度⭐）

### 範例：把首頁副標換掉

開 `src/data/site.ts`，找這段：

```ts
'zh-tw': {
  eyebrow: '研究手札 / Field Notebook',
  title: '青銀共創百歲人生',
  subtitle: '把世代相遇的現場，寫成一份共同生活的研究手札。',  ← 改這裡
  ...
}
```

中英文要**同步改**（en: 那段也要動），否則語言切換會不一致。

### 範例：改導覽列項目

同檔 `navItems` 陣列。記得：
- 改了路徑要在 `src/pages/` 同步建對應檔案，否則點下去 404
- 中英文兩邊都要同步

---

## 3. 上傳照片（含主持人新照、活動照片）難度⭐⭐

### 步驟 A：放檔案

把照片放進 `public/images/` 資料夾（沒有的話自己建）。建議分類：

```
public/
└── images/
    ├── people/
    │   ├── chen-yuching.jpg        主持人陳老師
    │   └── bobo.jpg                聯絡人
    ├── projects/
    │   ├── 2022-suibao.jpg         2022 水保局駐村
    │   └── 2026-lantern.jpg        2026 祈福燈會
    └── media/
        └── 2025-xxx.jpg
```

**檔名規則**：
- 全小寫、用 `-` 分隔、不要中文、不要空格
- 加上年份或主題前綴，方便將來找
- 副檔名 `.jpg` / `.png` / `.webp` 都可（webp 最省流量）

**檔案大小**：
- 單張**不要超過 500 KB**（用 https://squoosh.app 線上壓縮）
- 寬度 1600px 已經夠用（不要直接放手機原檔 4000px）

### 步驟 B：在頁面引用

例如改主持人照片，編 `src/pages/people.astro`（或之後我們建的 People 子組件）：

```astro
<img
  src="/qingyin-100-life-site/images/people/chen-yuching.jpg"
  alt="陳毓璟教授肖像照"
  width="400"
  height="500"
/>
```

⚠️ **重要**：路徑開頭要有 `/qingyin-100-life-site/`，因為 GitHub Pages 用子路徑部署。**不要寫 `./images/...` 或 `/images/...`**（會 404）。

### 步驟 C：alt 文字必填

`alt=""` 不能空，要寫一句描述照片內容的話。視障使用者靠這個讀照片，SEO 也會用到。

### 步驟 D：肖像授權底線 🔴

**任何含真實人臉的照片，上網前必須先有當事人書面或口頭同意**。包括：
- 主持人、學生、社區長輩、合作夥伴
- 活動現場的可辨識個人臉

若沒有授權的照片：
- 拍背影 / 拍手部 / 拍環境細節（避免人臉）
- 或先用插畫、活動 logo、場域空景代替
- 或加馬賽克（但會降低照片質感，盡量避免）

---

## 4. 加一張新「計畫卡」到首頁/Projects 頁 難度⭐⭐⭐

目前首頁 `HomePage.astro` 寫死了 3 張計畫卡（計畫故事 1/2/3）。要加新卡有兩種做法：

### 做法 A（短期，1 張快速加）：直接改 HomePage.astro

開 `src/components/HomePage.astro`，找到「計畫與實踐」區塊，複製其中一張 `<article>` 整段，改文字與圖片路徑。

### 做法 B（長期，建議）：把計畫卡資料化

未來 Bobo 累積 5+ 張計畫卡時，會更需要把資料挪到 `src/data/projects.ts` 之類獨立檔案。叫我來做：

> 「幫我把首頁計畫卡資料化，新增 `src/data/projects.ts`，每張卡包含標題、年份、地點、簡介、封面照片、連結到內頁。」

---

## 5. 加一篇新「成果與報導」 難度⭐⭐

短期照做法 A 改 HomePage.astro 或 outcomes.astro 即可。

長期建議走 [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) — 把每則新聞變成一個 Markdown 檔，例如：

```
src/content/news/zh-tw/
├── 2022-suibao-award.md
├── 2024-press-coverage.md
└── 2026-lantern-event.md
```

每個 .md 開頭有 frontmatter（標題、日期、來源連結、封面照片），內容用 Markdown 寫。

未來要做這步，叫我來：

> 「幫我把成果與報導改成 Astro Content Collections，每則新聞一個 Markdown 檔。」

---

## 6. 加新影片到「影像紀錄」 難度⭐⭐

**影片不要上傳到 GitHub repo**（重檔案會把 repo 撐大、Pages 流量上限超快用完）。

正確做法：

1. 影片先傳 YouTube（可設「不公開連結」如果不想公開搜尋）
2. 在頁面用 `<iframe>` 嵌入：

```astro
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/影片ID"
  title="影片標題"
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

把「影片ID」換成 YouTube 連結 `v=` 後面那串。

學校的「中正大學影音平台」嵌入碼也是類似格式。

---

## 7. 加一個全新頁面 難度⭐⭐⭐

例如要加「青銀學程」獨立頁。

1. 建檔 `src/pages/program.astro`（中文）
2. 建檔 `src/pages/en/program.astro`（英文）
3. 到 `src/data/site.ts` 的 `navItems` 加入：
   ```ts
   { label: '青銀學程', path: '/program/' },
   ```
   英文版也加 `{ label: 'Program', path: '/en/program/' }`
4. 內容可參考既有頁面（如 about.astro）的結構

⚠️ 兩個 `.astro` 檔結構幾乎一樣，差別只在文字。

---

## 8. 改顏色 / 字體 / 視覺風格 難度⭐⭐⭐

開 `src/styles/global.css`。最上方有色票變數：

```css
:root {
  --paper: #fbf6ee;       /* 紙張底色 */
  --paper-deep: #f2e7d8;
  --ink: #2d2a26;         /* 主文字色 */
  --teal: #2a6b6e;        /* 主色 */
  --coral: #fb7185;       /* 強調色 */
  --yellow: #f7c84b;
  --green: #4fb585;
  --blue: #4a86e0;
}
```

改一個變數，整站對應的元素都會同步換色（CSS 變數神奇之處）。

字體要換的話搜 `font-family`，目前用 Noto Sans TC + Inter。

⚠️ **大改前先 commit 一次**，這樣壞掉可以 git revert 回去。

---

## 9. 觀察線上是否更新成功

push 後到 https://github.com/Boboegg/qingyin-100-life-site/actions 看最新 workflow run：

- 🟡 黃點：跑中（30-60 秒）
- ✅ 綠勾：部署成功 → 線上網址 30 秒內生效
- ❌ 紅叉：部署失敗 → 點進去看哪一步壞了，把錯誤訊息給我看

也可以在終端：

```bash
gh run list --repo Boboegg/qingyin-100-life-site --limit 3
```

---

## 10. 常見問題排查

| 症狀 | 原因 | 處理 |
|------|------|------|
| 線上顯示 404 | 路徑沒加 `/qingyin-100-life-site/` 前綴 | 改 `src/...` 內所有 src/href，加上前綴 |
| 線上樣式跑掉 | 同上路徑問題 | 同上 |
| 推上去工作流失敗 | 大多是 build error（語法錯、import 錯） | 看 Actions log 第一個紅字 |
| 本機 npm run dev 啟動慢 | 第一次跑要安裝依賴 | 等 1-2 分鐘 |
| 截圖整頁空白 | 可能誤加了 `opacity:0` + scroll-trigger | 移除（已有歷史教訓） |
| 圖片在本機看得到，線上 404 | 沒放在 `public/`，或路徑前綴錯 | 移檔 / 改路徑 |

---

## 11. 內容底線（🔴 絕對不能違反）

1. **不捏造**：找不到的數字、年份、合作單位、職稱、引用，先標 TODO 不要編。先讀 `CONTENT_SOURCE_OF_TRUTH.md`。
2. **不偷渡學術引用**：放研究成果、論文要附 DOI 或 PDF 連結；APA 7 格式由 Bobo 親自把關。
3. **不放未授權人臉照**（見 §3 步驟 D）
4. **不寫空話**：「致力於」「持續推動」「未來將」這類詞少用，用具體事件、年份、人次代替
5. **大陸用語不亂用**：用台灣慣用詞（「優化」改「精進」、「視頻」改「影片」等，見 Bobo 的台灣在地化規則）

---

## 12. 給未來 AI 接手的開場提示

如果未來換一個 AI session 來改網站，丟下面這段給它：

> 你要協助維護「青銀共創百歲人生」網站（https://github.com/Boboegg/qingyin-100-life-site）。
>
> 先讀 `/Users/boboegg/bobohome-agent-claude/100_Todo/projects/qingyin-100-life-site/MAINTENANCE.md` 學會怎麼改。
> 寫內容前必讀同資料夾的 `CONTENT_SOURCE_OF_TRUTH.md`。
> 修改前要本機 `npm run dev` 預覽 + `npm run build` 驗證；commit/push 前等 Bobo 拍板。

---

## 13. 想加但目前還沒做的功能

這份手冊只涵蓋現有結構。將來需要這些功能時叫我建：

- [ ] 計畫卡資料化（`src/data/projects.ts`）
- [ ] 影像紀錄改 Content Collections（每張照片一筆資料）
- [ ] 新聞與報導改 Content Collections（每則一個 Markdown）
- [ ] 加全站搜尋（Pagefind）
- [ ] 加 RSS Feed（媒體訂閱）
- [ ] 加 sitemap.xml + robots.txt（SEO）
- [ ] 自訂網域（從 `boboegg.github.io/qingyin-100-life-site/` 換成 `qingyin.example.org`）
- [ ] 隱私權與授權聲明頁
- [ ] 多語言除了中英之外加東南亞語（若有國際合作）
