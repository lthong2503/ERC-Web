<template>
  <section id="license-challenge">
    <HeroSection :slides="['/images/course.png']" hero-height="40vh">
      <h1>考照挑戰</h1>
      <p>職業賽車手養成計畫 — 從新手到菁英車神</p>
    </HeroSection>

    <!-- 賽道介紹（放在職業賽車手養成計畫之上） -->
    <div class="container track-section-wrap">
      <div class="track-section">
        <div class="track-text">
          <h3>雙層立體．極限 3x3 賽道</h3>
          <p>我們在有限的空間創造了無限的挑戰。獨家設計的 3公尺 x 3公尺 複合材質賽道。</p>
          <br>
          <ul>
            <li><strong>Ground Floor:</strong> 高速 S 彎與隧道區，考驗反應速度。</li>
            <li><strong>Upper Deck:</strong> 泊車區與懸崖邊緣，考驗細膩操作。</li>
            <li><strong>Safety:</strong> 全場採用特製泡綿護欄，保護車輛同時增加容錯率。</li>
          </ul>
        </div>
        <!-- 有影片時用影片取代圖片 -->
        <div v-if="trackVideoSrc" class="track-image track-video-inline">
          <video :src="trackVideoSrc" controls playsinline class="track-video-element">
            您的瀏覽器不支援影片播放。
          </video>
        </div>
        <div v-else-if="trackYoutubeEmbed" class="track-image track-video-inline track-video-youtube">
          <iframe
            :src="trackYoutubeEmbed"
            title="賽道介紹影片"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div v-else class="track-image">
          <img :src="trackImage" alt="賽道佈局">
        </div>
      </div>
    </div>

    <div class="container levels-section">
      <h2 class="section-title levels-title">職業賽車手養成計畫</h2>
      <div class="level-container">
        <router-link to="/license-challenge/level/1" class="level-card level-card-link">
          <div class="level-img">
            <img :src="levelImages.level1" alt="新手實習生">
          </div>
          <div class="level-info">
            <div class="level-header">
              <h3>Level 1: 新手實習生</h3>
              <span class="badge novice">入門</span>
            </div>
            <p>不用戴 VR，先熟悉車輛動態。適合所有初學者。</p>
            <ul>
              <li><i class="fas fa-check"></i> 設備：第三人稱視角 (無VR)</li>
              <li><i class="fas fa-flag"></i> 任務：賽道繞圈、加速停車</li>
              <li><i class="fas fa-trophy"></i> 獎勵：解鎖 VR 駕駛資格</li>
            </ul>
            <span class="level-card-enter">查看賽道與玩法 <i class="fas fa-chevron-right"></i></span>
          </div>
        </router-link>

        <router-link to="/license-challenge/level/2" class="level-card level-card-link">
          <div class="level-img">
            <img :src="levelImages.level2" alt="專業駕駛員">
          </div>
          <div class="level-info">
            <div class="level-header">
              <h3>Level 2: 專業駕駛員</h3>
              <span class="badge pro">進階</span>
            </div>
            <p>戴上 VR，進入駕駛艙。挑戰空間感與盲區判斷。</p>
            <ul>
              <li><i class="fas fa-check"></i> 設備：FPV 沉浸式 VR</li>
              <li><i class="fas fa-flag"></i> 任務：盲彎與斜坡、泊車</li>
              <li><i class="fas fa-trophy"></i> 獎勵：獲得實體 P 牌駕照</li>
            </ul>
            <span class="level-card-enter">查看賽道與玩法 <i class="fas fa-chevron-right"></i></span>
          </div>
        </router-link>

        <router-link to="/license-challenge/level/3" class="level-card level-card-link">
          <div class="level-img">
            <img :src="levelImages.level3" alt="菁英車神">
          </div>
          <div class="level-info">
            <div class="level-header">
              <h3>Level 3: 菁英車神</h3>
              <span class="badge master">困難</span>
            </div>
            <p>極限操控，分秒必爭。完美的技術展示。</p>
            <ul>
              <li><i class="fas fa-check"></i> 設備：VR + 競速模式</li>
              <li><i class="fas fa-flag"></i> 任務：計時賽、迷宮賽、運送「豆腐」(特殊挑戰)</li>
              <li><i class="fas fa-trophy"></i> 獎勵：登錄名人堂、專屬稱號</li>
            </ul>
            <span class="level-card-enter">查看賽道與玩法 <i class="fas fa-chevron-right"></i></span>
          </div>
        </router-link>
      </div>
      <div class="levels-cta">
        <router-link to="/booking" class="cta-button"><span>立即預約挑戰</span></router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'

const trackImage = '/images/car.png'

// 職業賽車手養成計畫三張圖片（用變數避免 Vite 當成 import 解析）
const levelImages = {
  level1: '/images/level_1.webp',
  level2: '/images/level_2.webp',
  level3: '/images/level_3.webp'
}

// 賽道影片會取代「雙層立體．極限 3x3 賽道」旁的圖片。二選一（設為空字串 '' 則顯示上方圖片）：
// 方式一：本機影片 — 影片檔請放在專案根目錄的 videos 資料夾，執行 npm run dev 前會自動複製到 public
const trackVideoSrc = '/videos/ERC_promo_video.mp4'
// 方式二：YouTube — 用嵌入網址（在 YouTube 影片頁按「分享」→「嵌入」複製 src 的網址）
const trackYoutubeEmbed = ''
</script>
