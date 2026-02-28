# ERC駕駛體驗館 — Vue 版

Vue 3 版本網站，保留原有設計與功能（導航、首頁輪播、預約系統與 Firebase、軟體下載等）。

## 技術棧

- **Vue 3** (Composition API)
- **Vue Router** (Hash 模式)
- **Vite**
- **Firebase** (Firestore、Analytics)

## 開發

```bash
cd vue-app
npm install
npm run dev
```

開發時會從專案根目錄的 `images/` 與 `css/` 提供靜態資源（透過 Vite 外掛）。

瀏覽： http://localhost:5173

## 建置

```bash
npm run build
```

建置前會自動將上層的 `images`、`css` 複製到 `public/`，產出在 `dist/`。

## 預覽建置結果

```bash
npm run preview
```

## 專案結構

- `src/main.js` — 應用入口
- `src/App.vue` — 根元件（導航、WhatsApp 按鈕、頁尾、router-view）
- `src/router/index.js` — 路由（#/home, #/about, #/exhibitions, #/courses, #/contact, #/booking, #/download）
- `src/components/` — AppNav、HeroSection
- `src/views/` — 各頁面（PageHome、PageAbout、PageExhibitions、PageCourses、PageContact、PageBooking、PageDownload）
- `src/firebase.js` — Firebase 初始化與 Firestore
- `src/assets/style.css` — 樣式（與原站一致）
