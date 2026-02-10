<template>
  <section id="home">
    <HeroSection :slides="['/images/P1.webp', '/images/P2.webp']">
      <h1>智能實景駕駛 · <span style="color:var(--racing-red)">安全學習新體驗</span></h1>
      <p>結合虛擬實景、人工智能與電動車技術，創新的 STEM 教育方案</p>
      <div style="margin-top: 30px;">
        <router-link to="/courses" class="cta-button"><span>查看課程</span></router-link>
        <router-link to="/contact" class="cta-button btn-secondary"><span>聯絡我們</span></router-link>
      </div>
    </HeroSection>

    <!-- 核心體驗 (來自 ai_studio 設計) -->
    <div class="container experience-section">
      <h2 class="section-title experience-title">這不是遊戲，是真實體驗</h2>
      <div class="experience-features">
        <div class="feature-card">
          <i class="fas fa-gamepad"></i>
          <h3>Logitech G29 力回饋</h3>
          <p>告別塑膠手感。真實的路感反饋、油門深淺控制，精準還原駕駛體驗。</p>
        </div>
        <div class="feature-card">
          <i class="fas fa-vr-cardboard"></i>
          <h3>VR 第一人稱視角</h3>
          <p>戴上 VR，你將縮小 20 倍坐進駕駛艙。以前所未有的微縮角度征服賽道。</p>
        </div>
        <div class="feature-card">
          <i class="fas fa-car-side"></i>
          <h3>實體遙控車物理</h3>
          <p>拒絕電腦動畫。這是真實的機械運作、真實的摩擦力、真實的碰撞。</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="section-header">
        <h2>核心價值</h2>
        <p>ERC 是一個以智能駕駛體驗的一個品牌，集合四大科技元素，EV，VR，AI及TR。這技術由一班PolyU 數據科學及人工智能系的學生自家研發創立。而這項體驗由配備第一人稱視角(First-person view)鏡頭的模型電動車(EV)，將專屬不同賽道畫面，實時傳送到模擬駕駛艙的虛擬實境(VR)眼鏡中，使參加者可於模型駕駛艙中，運用軚盤及腳踏板親手操控賽車，感受每一個轉向和加速，體驗腎上腺素飆升的快感 !</p>
      </div>

      <div class="values-container">
        <div class="card">
          <h3><i class="fas fa-graduation-cap"></i> 教育創新</h3>
          <p>結合 VR、AI 與實景技術的智能教學方案。</p>
        </div>
        <div class="card">
          <h3><i class="fas fa-microchip"></i> 科技卓越</h3>
          <p>提供最新的硬體與軟體整合解決方案。</p>
        </div>
        <div class="card">
          <h3><i class="fas fa-lightbulb"></i> 持續創新</h3>
          <p>實現安全智能駕駛及無人駕駛方案。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
</script>
