import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: () => import('@/views/PageHome.vue'), meta: { id: 'home' } },
  { path: '/about', name: 'About', component: () => import('@/views/PageAbout.vue'), meta: { id: 'about' } },
  { path: '/exhibitions', name: 'Exhibitions', component: () => import('@/views/PageExhibitions.vue'), meta: { id: 'exhibitions' } },
  { path: '/courses', name: 'Courses', component: () => import('@/views/PageCourses.vue'), meta: { id: 'courses' } },
  { path: '/contact', name: 'Contact', component: () => import('@/views/PageContact.vue'), meta: { id: 'contact' } },
  { path: '/license-challenge', name: 'LicenseChallenge', component: () => import('@/views/PageLicenseChallenge.vue'), meta: { id: 'license-challenge' } },
  { path: '/license-challenge/level/:id', name: 'LevelDetail', component: () => import('@/views/PageLevelDetail.vue'), meta: { id: 'license-challenge' } },
  { path: '/booking', name: 'Booking', component: () => import('@/views/PageBooking.vue'), meta: { id: 'booking' } },
  { path: '/download', name: 'Download', component: () => import('@/views/PageDownload.vue'), meta: { id: 'download' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
