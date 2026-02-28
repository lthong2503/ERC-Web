<template>
  <div class="app">
    <AppNav />
    <a href="https://wa.me/85296061079" class="whatsapp-float" target="_blank" rel="noopener">
      <i class="fab fa-whatsapp"></i>
    </a>
    <main class="page-section active">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer>
      <div class="logo" style="font-size: 1.2rem; margin-bottom: 20px;">ERC <span>Project</span></div>
      <p>&copy; 2025 ERC駕駛體驗館 · 德安駕駛學校有限公司</p>
      <p>智能駕駛體驗 | STEM 教育創新 | 安全駕駛培訓</p>
    </footer>
  </div>
</template>

<script setup>
import AppNav from '@/components/AppNav.vue'
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
