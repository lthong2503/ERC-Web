<template>
  <section id="download">
    <HeroSection :slides="['/images/banner2.webp']" hero-height="40vh">
      <h1>駕駛軟體下載</h1>
      <p>Download the host application to connect your wheel to the car.</p>
    </HeroSection>

    <div class="container">
      <div class="download-container">
        <i class="fas fa-box-open" style="font-size: 4rem; color: var(--racing-red); margin-bottom: 20px;"></i>
        <h2 style="margin-bottom: 10px;">ERC Host Controller</h2>
        <span style="background:var(--electric-blue); color:white; padding:3px 8px; border-radius:4px; font-size:0.9rem;">Version 1.2.0 (Stable)</span>

        <p style="margin-top: 20px; color: var(--text-muted);">
          此軟體作為 PC 與 ERC 車輛之間的橋樑，負責處理輸入映射、WiFi 連接和遙測顯示。
        </p>

        <div class="requirements">
          <h4><i class="fas fa-cogs"></i> 系統需求</h4>
          <ul>
            <li><i class="fas fa-check"></i> Windows 10 / 11 (64-bit)</li>
            <li><i class="fas fa-check"></i> 已安裝 Logitech G-Hub</li>
            <li><i class="fas fa-check"></i> WiFi 接收器 (需支援 2.4GHz)</li>
            <li><i class="fas fa-check"></i> .NET Framework 4.8 或更高版本</li>
          </ul>
        </div>

        <a href="https://drive.google.com/file/d/1pPSq7irpVbjj8yRFcxqzQFPFOSOqwrGa/view?usp=sharing" class="cta-button" target="_blank" rel="noopener">
          <span><i class="fas fa-download"></i> 下載安裝程式 (.exe)</span>
        </a>

        <div style="margin-top: 20px; font-size: 0.8rem; color: #888;">
          SHA-256: 8A2F... | 大小: 45MB
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
</script>
