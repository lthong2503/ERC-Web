<template>
  <section id="contact">
    <HeroSection :slides="['/images/contact.png']" hero-height="40vh">
      <h1>聯絡我們</h1>
      <p>歡迎蒞臨體驗智能實景駕駛模擬系統</p>
    </HeroSection>

    <div class="container">
      <div class="grid-container" style="max-width: 900px; margin: 0 auto;">
        <div class="card">
          <h3><i class="fas fa-map-marker-alt"></i> 德安駕駛學校</h3>
          <p><strong>地址：</strong>香港 - 金鐘金鐘道 95 號 </p>
          <p>統一中心 2 樓 2013 號舖<br><small>（港鐵金鐘站 D 出口）</small></p>
          <p style="margin-top:15px;"><strong>電話：</strong> 2527 7799</p>
          <p><strong>WhatsApp：</strong> 9173 4677</p>
        </div>

        <div class="card">
          <h3><i class="fas fa-vr-cardboard"></i> ERC 體驗館</h3>
          <p><strong>地址：</strong>九龍 - 九龍灣臨興街 21 號</p>
          <p>美羅中心二期 17 樓 15 室</p>
          <p style="margin-top:15px; color: var(--electric-blue);">歡迎預約參觀</p>
          <p style="margin-top:15px;"><strong>電話：</strong> 9606 1079</p>
          <p><strong>WhatsApp：</strong> 9606 1079</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
</script>
