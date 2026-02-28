/**
 * 展覽活動資料（列表與詳情頁共用）
 *
 * 活動相片放置位置與路徑：
 * - 實體資料夾：專案根目錄的 images 資料夾，即 ERC-WebDev-main/images/
 * - 建置時會複製到 vue-app/public/images/，網頁用 /images/檔名 引用
 *
 * 命名建議（可自訂）：
 * - 依活動 id 編號，例如：kcis-open-day-2025-1.jpg、kcis-open-day-2025-2.jpg
 * - 或簡短名稱：e3-gallery-1.jpg、e2-gallery-1.jpg
 * - 支援 .jpg、.jpeg、.png、.webp
 *
 * 下方每個活動的 gallery 陣列請改成你的圖片路徑，例如：
 * gallery: [
 *   { src: '/images/kcis-open-day-2025-1.jpg', alt: '蘇浙公學開放日 相片 1' },
 *   { src: '/images/kcis-open-day-2025-2.jpg', alt: '蘇浙公學開放日 相片 2' },
 * ]
 */
export const exhibitions = [
  {
    id: 'kcis-open-day-2025',
    title: '蘇浙公學(北角)開放日',
    date: '2025年 11月 30日',
    coverImage: '/images/kccnp2025_1.jpg',
    intro: 'ERC 將STEM 教育帶入校園，讓學生親手操控結合 AI 與 VR 技術的模型電動車，在安全環境中提早認識道路安全、機械結構與程式邏輯。這不僅是一場駕駛體驗，更是一堂啟發未來科技視野的實踐課。',
    introDetail: '2025 年 11 月 30 日蘇浙公學（Kiangsu-Chekiang College）開放日當天，ERC 將 STEM 教育帶入校園，於校內設置智能實景駕駛體驗區，讓學生親手操控結合 AI 與 VR 技術的模型電動車，在安全環境中認識道路安全、機械結構與程式邏輯。學生透過 VR 頭戴裝置與實景賽道，體驗油門、煞車與轉向的配合，並了解電動車與智能駕駛的基礎概念。這不僅是一場駕駛體驗，更是一堂啟發未來科技視野的實踐課，讓同學在開放日既能認識學校，也能接觸到創新駕駛教育。',
    tags: ['趣味導向', '走進校園', '開放日'],
    gallery: [
      { src: '/images/kccnp2025_1.jpg', alt: '蘇浙公學開放日 相片 1' },
      { src: '/images/kccnp2025_2.jpg', alt: '蘇浙公學開放日 相片 2' },
      { src: '/images/kccnp2025_3.jpg', alt: '蘇浙公學開放日 相片 3' },
      { src: '/images/kccnp2025_4.jpg', alt: '蘇浙公學開放日 相片 4' },
      { src: '/images/kccnp2025_5.jpg', alt: '蘇浙公學開放日 相片 5' }
    ]
  },
  {
    id: 'outdoor-sports-expo-2025',
    title: '香港戶外用品及運動博覽 2025',
    date: '2025年 11月 21–23日',
    coverImage: '/images/IndoorSport2025_1.jpg',
    intro: '展示駕駛模擬技術如何應用於教育及安全訓練，結合戶外及運動主題展示創新科技。',
    introDetail: '「香港戶外用品及運動博覽 2025 暨亞洲室內運動節」於 2025 年 11 月 21 至 23 日在香港會議展覽中心舉行。ERC 於會場設置智能實景駕駛體驗區，展示駕駛模擬技術如何應用於教育及安全訓練，與戶外及運動主題結合，讓入場人士在體驗各類運動之餘，也能認識智能駕駛與道路安全。',
    tags: ['運動博覽', '科技展示'],
    gallery: [
      { src: '/images/IndoorSport2025_1.jpg', alt: '戶外用品及運動博覽 相片 1' },
      { src: '/images/IndoorSport2025_2.jpg', alt: '戶外用品及運動博覽 相片 2' },
      { src: '/images/IndoorSport2025_3.jpg', alt: '戶外用品及運動博覽 相片 3' },
      { src: '/images/IndoorSport2025_4.jpg', alt: '戶外用品及運動博覽 相片 4' },
      { src: '/images/IndoorSport2025_5.jpg', alt: '戶外用品及運動博覽 相片 5' },
      { src: '/images/IndoorSport2025_6.jpg', alt: '戶外用品及運動博覽 相片 6' }
    ]
  },
  {
    id: 'hong-kong-sports-festival-2025',
    title: '香港運動節 2025',
    date: '2025年 8月 22–24日',
    coverImage: '/images/sportfest2025_1.jpg',
    intro: '設置智能實景駕駛體驗區，讓參加者以模擬實景方式了解安全駕駛及道路風險管理。',
    introDetail: '首屆「香港運動節 2025」於 2025 年 8 月 22 至 24 日在香港會議展覽中心展覽廳舉行，為期三日，涵蓋五大焦點賽事與多項運動體驗。ERC 在會場設置智能實景駕駛體驗區，讓參加者以 VR 模擬實景方式了解安全駕駛與道路風險管理，並可參與智能駕駛相關體驗與比賽，結合科技與運動，推動全民參與。',
    tags: ['運動節', '體驗展示'],
    gallery: [
      { src: '/images/sportfest2025_1.jpg', alt: '香港運動節 相片 1' },
      { src: '/images/sportfest2025_2.jpg', alt: '香港運動節 相片 2' },
      { src: '/images/sportfest2025_3.jpg', alt: '香港運動節 相片 3' },
      { src: '/images/sportfest2025_4.jpg', alt: '香港運動節 相片 4' }
    ]
  }
]

export function getExhibitionById(id) {
  return exhibitions.find(e => e.id === id) || null
}
