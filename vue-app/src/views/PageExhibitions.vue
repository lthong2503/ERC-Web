<template>
  <section id="exhibitions">
    <HeroSection :slides="['/images/exhibit.png']" hero-height="40vh">
      <h1>展覽及體驗活動</h1>
      <p>ERC 已於多個大型活動中展出智能實景駕駛體驗</p>
    </HeroSection>

    <div class="container" style="max-width: 1000px; margin: 0 auto; padding: 40px 20px;">
      <router-link
        v-for="exhibition in exhibitions"
        :key="exhibition.id"
        :to="'/exhibitions/' + exhibition.id"
        class="split-container exhibition-card"
      >
        <div class="split-image exhibition-image-wrap">
          <img :src="exhibition.coverImage" :alt="exhibition.title">
        </div>
        <div class="split-text">
          <h3>{{ exhibition.date }}<br>{{ exhibition.title }}</h3>
          <p>{{ exhibition.intro }}</p>
          <div class="tags">
            <span v-for="tag in exhibition.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <span class="exhibition-card-link">查看活動詳情與相片 <i class="fas fa-chevron-right"></i></span>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import { exhibitions } from '@/data/exhibitions'
</script>

<style scoped>
.exhibition-card {
  display: flex;
  text-decoration: none;
  color: inherit;
}
.exhibition-card:hover .exhibition-card-link {
  color: var(--color-primary, #2563eb);
}
.exhibition-card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: #666;
  transition: color 0.2s;
}
.exhibition-card-link i {
  font-size: 0.75rem;
}
</style>
