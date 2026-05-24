# 青銀共創百歲人生網站

Astro + GitHub Pages 的雙語靜態網站雛形。第一版採用「手繪田野筆記風」，以照片、影片、新聞與計畫故事為主要內容。

## 本機預覽

```bash
npm install
npm run dev
```

Astro 設定了 GitHub Pages 專案路徑，所以本機首頁預設在：

```text
http://localhost:4321/qingyin-100-life-site/
```

## 建置

```bash
npm run build
```

## 內容維護

目前是設計展示版，尚未接正式資料。後續建議把內容整理成：

```text
src/content/projects/zh-tw/
src/content/projects/en/
src/content/news/zh-tw/
src/content/news/en/
src/data/media.ts
src/data/people.ts
```

影片不建議放進 GitHub。請放在 YouTube、學校影音平台或雲端，再把網址嵌入網站。

## GitHub Pages

這個 repo 的部署 workflow 已放在 `.github/workflows/deploy.yml`。遠端 repo 建好後，需要在 GitHub repo settings 啟用 Pages，來源選 GitHub Actions。
