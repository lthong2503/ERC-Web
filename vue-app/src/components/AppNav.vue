<template>
  <nav>
    <router-link to="/home" class="logo-link">
      <img src="/images/logo.png" alt="ERC Logo" class="logo-img">
    </router-link>
    <button
      type="button"
      class="menu-toggle"
      aria-label="Toggle navigation"
      @click="mobileOpen = !mobileOpen"
    >
      <i class="fas" :class="mobileOpen ? 'fa-times' : 'fa-bars'"></i>
    </button>
    <div class="nav-links" :class="{ open: mobileOpen }">
      <router-link to="/home" class="nav-btn" active-class="active" data-page-id="home" @click="closeMobile">首頁</router-link>
      <router-link to="/exhibitions" class="nav-btn" active-class="active" data-page-id="exhibitions" @click="closeMobile">展覽活動</router-link>
      <router-link to="/courses" class="nav-btn" active-class="active" data-page-id="courses" @click="closeMobile">課程</router-link>
      <router-link to="/about" class="nav-btn" active-class="active" data-page-id="about" @click="closeMobile">關於 ERC</router-link>

      <!-- 駕駛體驗館下拉：考照挑戰、預約 -->
      <div
        class="nav-dropdown"
        :class="{ open: dropdownOpen, 'is-active': isBookingGroup }"
        @mouseenter="onDropdownEnter"
        @mouseleave="onDropdownLeave"
      >
        <button
          type="button"
          class="nav-dropdown-trigger"
          aria-haspopup="true"
          :aria-expanded="dropdownOpen"
          @click="dropdownOpen = !dropdownOpen"
        >
          ERC駕駛體驗館
          <i class="fas fa-chevron-down"></i>
        </button>
        <ul class="nav-dropdown-menu">
          <li>
            <router-link to="/license-challenge" @click="closeMobile">
              <i class="fas fa-flag-checkered"></i>考照挑戰
            </router-link>
          </li>
          <li>
            <router-link to="/booking" @click="closeMobile">
              <i class="fas fa-calendar-check"></i>預約
            </router-link>
          </li>
        </ul>
      </div>

      <router-link to="/contact" class="nav-btn" active-class="active" data-page-id="contact" @click="closeMobile">聯絡我們</router-link>
      <router-link to="/download" class="nav-btn download-nav" active-class="active" data-page-id="download" @click="closeMobile">
        <span><i class="fas fa-download"></i> 軟體下載</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)
const dropdownOpen = ref(false)

const isBookingGroup = computed(() =>
  ['/booking', '/license-challenge'].includes(route.path)
)

function closeMobile() {
  mobileOpen.value = false
  dropdownOpen.value = false
}

function onDropdownEnter() {
  if (window.innerWidth >= 901) dropdownOpen.value = true
}

function onDropdownLeave() {
  dropdownOpen.value = false
}

watch(() => route.path, () => {
  mobileOpen.value = false
  dropdownOpen.value = false
})
</script>
