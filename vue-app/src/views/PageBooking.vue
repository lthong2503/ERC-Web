<template>
  <section id="booking">
    <HeroSection :slides="['/images/logo.webp']" hero-height="40vh">
      <h1>預約體驗</h1>
      <p>選擇您方便的日期和時間，親身體驗 ERC 智能駕駛！</p>
    </HeroSection>

    <!-- 收費方案（參考 pay.html） -->
    <div class="container pricing-section">
      <h2 class="pricing-section-title">收費方案</h2>
      <div class="pricing-container">
        <div class="pricing-card">
          <h3>單人極限體驗</h3>
          <div class="price-tag">
            <span class="price"><span class="currency">$</span>198</span>
            <span class="duration">/ 1 節 (45分鐘)</span>
          </div>
          <ul class="pricing-features">
            <li><i class="fas fa-user"></i>最多 2 人入場</li>
            <li><i class="fas fa-car"></i> 1 台賽車 (G29 + VR)</li>
            <li><i class="fas fa-chalkboard-teacher"></i> 包含操作教學</li>
            <li><i class="fas fa-medal"></i> 挑戰考照任務</li>
          </ul>
          <button type="button" class="pricing-select-btn" @click="selectPlanAndScroll('solo')">選擇此方案</button>
        </div>
        <div class="pricing-card pricing-card-popular">
          <div class="pricing-ribbon">熱門推薦</div>
          <h3>包場對戰派對</h3>
          <div class="price-tag">
            <span class="price"><span class="currency">$</span>498</span>
            <span class="duration">/ 1 節 (45分鐘)</span>
          </div>
          <ul class="pricing-features">
            <li><i class="fas fa-users"></i> 最多 4 人入場</li>
            <li><i class="fas fa-car-side"></i> 2 台賽車 (G29 + VR)</li>
            <li><i class="fas fa-flag-checkered"></i> 朋友/親子對戰</li>
            <li><i class="fas fa-unlock"></i> 全場地獨享不被打擾</li>
          </ul>
          <button type="button" class="pricing-select-btn" @click="selectPlanAndScroll('party')">選擇此方案</button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="booking-container" ref="bookingFormRef">
        <h2 style="color: var(--text-main); margin-bottom: 20px;">預約 ERC 體驗館時間</h2>

        <div class="form-group" style="text-align: left; max-width: 400px; margin: 0 auto 20px;">
          <label for="booking-plan">選擇方案：</label>
          <select id="booking-plan" v-model="selectedPlan" class="booking-plan-select">
            <option value="">請選擇收費方案</option>
            <option value="solo">單人極限體驗 — $198 / 45分鐘</option>
            <option value="party">包場對戰派對 — $498 / 45分鐘 (最多 4 人)</option>
          </select>
        </div>

        <label for="booking-date">選擇日期：</label>
        <input
          id="booking-date"
          v-model="selectedDate"
          type="date"
          :min="minDate"
          @change="onDateChange"
        >

        <h3 style="color: var(--electric-blue); margin-top: 30px; margin-bottom: 15px;">可預約時段 (上午10:00 - 下午5:00)</h3>
        <div class="time-slots-grid">
          <template v-if="loadingSlots">正在檢查預約狀況...</template>
          <template v-else-if="fridayError">
            <p style="grid-column: 1/-1; text-align:center; color: red;">預約只在星期五開放。請選擇一個星期五。</p>
          </template>
          <template v-else>
            <button
              v-for="slot in timeSlots"
              :key="slot.time"
              type="button"
              class="time-slot-btn"
              :class="{ active: selectedTime === slot.time }"
              :disabled="slot.booked"
              :title="slot.booked ? '已預約' : ''"
              :style="slot.booked ? { backgroundColor: '#ccc', color: '#666', cursor: 'not-allowed' } : {}"
              @click="selectTime(slot.time)"
            >
              {{ slot.time }}
            </button>
          </template>
        </div>

        <form class="booking-form" @submit.prevent="submitBooking">
          <h3 style="color: var(--text-main); margin-bottom: 20px;">您的聯絡資料</h3>
          <div class="form-group">
            <label for="booking-name">姓名：</label>
            <input id="booking-name" v-model="form.name" type="text" placeholder="請輸入您的姓名" required>
          </div>
          <div class="form-group">
            <label for="booking-phone">電話：</label>
            <input id="booking-phone" v-model="form.phone" type="tel" placeholder="請輸入您的電話號碼" required>
          </div>
          <div class="form-group">
            <label for="booking-email">電郵：</label>
            <input id="booking-email" v-model="form.email" type="email" placeholder="請輸入您的電郵地址" required>
          </div>
          <button type="submit" class="cta-button" :disabled="submitting">
            <span>{{ submitting ? '處理中...' : '確認預約' }}</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'
import HeroSection from '@/components/HeroSection.vue'

function getNextFriday(date) {
  const d = new Date(date)
  const day = d.getDay()
  let add = 0
  if (day === 5) add = 0
  else if (day < 5) add = 5 - day
  else add = 5 - day + 7
  d.setDate(d.getDate() + add)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const dayNum = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${dayNum}`
}

const today = new Date()
const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
const minDate = ref(todayStr)
const defaultDate = getNextFriday(today)

const selectedDate = ref(defaultDate)
const selectedTime = ref('')
const selectedPlan = ref('')
const timeSlots = ref([])
const loadingSlots = ref(false)
const fridayError = ref(false)
const submitting = ref(false)

const planOptions = {
  solo: { label: '單人極限體驗', price: '$198', duration: '45分鐘' },
  party: { label: '包場對戰派對', price: '$498', duration: '45分鐘 (最多 4 人)' }
}

const form = ref({
  name: '',
  phone: '',
  email: ''
})

const bookingFormRef = ref(null)

function selectPlanAndScroll(plan) {
  selectedPlan.value = plan
  bookingFormRef.value?.scrollIntoView?.({ behavior: 'smooth' })
}

function buildSlots() {
  const slots = []
  for (let m = 10 * 60; m <= 17 * 60; m += 30) {
    const h = Math.floor(m / 60)
    const min = m % 60
    slots.push({ time: `${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`, booked: false })
  }
  return slots
}

async function fetchBookedTimes(date) {
  const q = query(collection(db, 'bookings'), where('date', '==', date))
  const snap = await getDocs(q)
  const set = new Set()
  snap.forEach((doc) => set.add(doc.data().time))
  return set
}

async function loadSlots() {
  const date = selectedDate.value
  if (!date) return
  const d = new Date(date + 'T00:00:00')
  if (d.getDay() !== 5) {
    fridayError.value = true
    timeSlots.value = []
    selectedTime.value = ''
    return
  }
  fridayError.value = false
  loadingSlots.value = true
  const booked = await fetchBookedTimes(date)
  timeSlots.value = buildSlots().map((s) => ({ ...s, booked: booked.has(s.time) }))
  loadingSlots.value = false
  selectedTime.value = ''
}

function onDateChange() {
  selectedTime.value = ''
  loadSlots()
}

function selectTime(time) {
  selectedTime.value = time
}

async function submitBooking() {
  if (!selectedDate.value || !selectedTime.value || !form.value.name || !form.value.phone || !form.value.email) {
    alert('請填寫所有預約資訊並選擇時間！')
    return
  }
  if (!selectedPlan.value) {
    alert('請選擇收費方案。')
    return
  }
  const planLabel = planOptions[selectedPlan.value]?.label || selectedPlan.value
  const planDetail = planOptions[selectedPlan.value] ? `${planOptions[selectedPlan.value].label} ${planOptions[selectedPlan.value].price}` : selectedPlan.value

  submitting.value = true
  try {
    await addDoc(collection(db, 'bookings'), {
      name: form.value.name,
      phone: form.value.phone,
      email: form.value.email,
      date: selectedDate.value,
      time: selectedTime.value,
      plan: selectedPlan.value,
      plan_label: planLabel,
      created_at: serverTimestamp()
    })
    const msg = `你好 ERC，我想預約體驗。\n\n📋 *方案:* ${planDetail}\n👤 *姓名:* ${form.value.name}\n📱 *電話:* ${form.value.phone}\n📧 *電郵:* ${form.value.email}\n📅 *日期:* ${selectedDate.value}\n⏰ *時間:* ${selectedTime.value}`
    window.open(`https://wa.me/85255379080?text=${encodeURIComponent(msg)}`, '_blank')
    alert('資料已儲存！我們將轉至 WhatsApp 以便您發送預約詳情。')
    form.value = { name: '', phone: '', email: '' }
    selectedTime.value = ''
    selectedPlan.value = ''
    loadSlots()
  } catch (e) {
    console.error(e)
    alert('預約失敗，請檢查網絡連接。')
  } finally {
    submitting.value = false
  }
}

onMounted(loadSlots)
</script>
