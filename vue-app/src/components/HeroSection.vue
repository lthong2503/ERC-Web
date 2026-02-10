<template>
  <div class="hero" :style="heroStyle">
    <div v-if="slides.length" class="slider-container">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="slide"
        :class="{ active: i === currentIndex }"
        :style="{ backgroundImage: `url('${slide}')` }"
      />
    </div>
    <template v-if="slides.length > 1">
      <button type="button" class="slider-arrow prev" aria-label="Previous" @click="changeSlide(-1)">&#10094;</button>
      <button type="button" class="slider-arrow next" aria-label="Next" @click="changeSlide(1)">&#10095;</button>
    </template>
    <div class="hero-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  slides: { type: Array, default: () => [] },
  heroHeight: { type: String, default: '85vh' }
})

const currentIndex = ref(0)
let autoInterval = null

const heroStyle = computed(() => ({ height: props.heroHeight }))

function changeSlide(direction) {
  const n = props.slides.length
  if (!n) return
  currentIndex.value = (currentIndex.value + direction + n) % n
  startAutoSlide()
}

function startAutoSlide() {
  if (autoInterval) clearInterval(autoInterval)
  if (props.slides.length > 1) {
    autoInterval = setInterval(() => changeSlide(1), 5000)
  }
}

watch(() => props.slides, () => { currentIndex.value = 0; startAutoSlide() }, { immediate: true })

onMounted(startAutoSlide)
onUnmounted(() => { if (autoInterval) clearInterval(autoInterval) })
</script>
