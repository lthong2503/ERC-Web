<template>
  <section id="exhibitions">
    <HeroSection :slides="['/images/exhibit.png']" hero-height="40vh">
      <h1>展覽及體驗活動</h1>
      <p>ERC 已於多個大型活動中展出智能實景駕駛體驗</p>
    </HeroSection>

    <div class="container" style="max-width: 1000px; margin: 0 auto; padding: 40px 20px;">
      <div class="split-container">
        <div class="split-image exhibition-image-wrap">
          <img :src="images.e3" alt="蘇浙公學">
        </div>
        <div class="split-text">
          <h3>2025年 11月 30日<br>蘇浙公學(北角)開放日</h3>
          <p>ERC 將STEM 教育帶入校園，讓學生親手操控結合 AI 與 VR 技術的模型電動車，在安全環境中提早認識道路安全、機械結構與程式邏輯。這不僅是一場駕駛體驗，更是一堂啟發未來科技視野的實踐課。</p>
          <div class="tags">
            <span class="tag">趣味導向</span>
            <span class="tag">走進校園</span>
            <span class="tag">開放日</span>
          </div>
        </div>
      </div>
      <div class="split-container">
        <div class="split-image exhibition-image-wrap">
          <img :src="images.e2" alt="香港戶外用品及運動博覽">
        </div>
        <div class="split-text">
          <h3>2025年 11月 21–23日<br>香港戶外用品及運動博覽 2025</h3>
          <p>展示駕駛模擬技術如何應用於教育及安全訓練，結合戶外及運動主題展示創新科技。</p>
          <div class="tags">
            <span class="tag">運動博覽</span>
            <span class="tag">科技展示</span>
          </div>
        </div>
      </div>
      <div class="split-container">
        <div class="split-image exhibition-image-wrap">
          <img :src="images.e1" alt="香港運動節">
        </div>
        <div class="split-text">
          <h3>2025年 8月 22–24日<br>香港運動節 2025</h3>
          <p>設置智能實景駕駛體驗區，讓參加者以模擬實景方式了解安全駕駛及道路風險管理。</p>
          <div class="tags">
            <span class="tag">運動節</span>
            <span class="tag">體驗展示</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'

// 用變數避免 Vite 把路徑當成靜態 import 解析（檔案在 public/images 或由 dev 從上層提供）
const images = {
  e1: '/images/e1.webp',
  e2: '/images/e2.webp',
  e3: '/images/e3-hd.webp'
}
</script>
