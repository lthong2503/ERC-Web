<template>
  <section id="about">
    <HeroSection :slides="['/images/car.png']" hero-height="40vh">
      <h1>關於 ERC</h1>
      <p>智能實景駕駛體驗館與德安駕駛學校合作</p>
    </HeroSection>

    <div class="container">
      <div style="max-width: 800px; margin: 0 auto; background: var(--bg-light); padding: 40px; border-radius: 8px;">
        <h3 style="color: var(--electric-blue); margin-bottom: 20px;">我們的使命</h3>
        <p style="margin-bottom: 20px;">ERC 智能實景駕駛體驗館由教育及駕駛訓練專家共同策劃，結合虛擬實景（VR）、人工智能（AI）、電動車（EV）及遙感現實（TR）技術，為香港提供首創的智能駕駛教育平台。</p>
        <p>透過科技創新，讓每位學生都能享受安全、高效且富有啟發性的駕駛學習體驗，培育具備道路安全意識和 STEM 技能的未來人才。</p>

        <hr style="margin: 30px 0; border: 0; border-top: 1px solid #ddd;">

        <h3 style="color: var(--text-main); margin-bottom: 10px;">德安駕駛學校有限公司</h3>
        <p style="margin-bottom: 20px;">德安駕駛學校 - 由林秉德先生於 1970 年成立，已有五十多年歷史，以道路交通安全，培訓良好駕駛者為目標。致力為市民提供不同的駕駛課程，全面協助學員掌握駕駛的技巧並完成駕駛考試。​</p>
        <p style="margin-bottom: 20px;">近年更與 香港善導會 合作，為更新人仕提供輕型貨車及的士課程，讓他們有機會習一技旁身，以裝備他們重投社會工作。在2023年1月香港社會服務聯會頒贈「商界展關懷」計劃標誌，以表揚本校對關懷社區、關懷員工及關懷環境的承擔。​</p>
        <p><b>公司規模及現況 :​</b></p>
        <ul>
          <li>全港四大駕駛學校之一​</li>
          <li>私家車，輕型貨車，巴士，貨車共超過30部​</li>
          <li>每年教導超過2000個學生​</li>
          <li>師傅人數超過30人</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
</script>
