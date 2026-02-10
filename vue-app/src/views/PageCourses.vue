<template>
  <section id="courses">
    <HeroSection :slides="['/images/course.png']" hero-height="40vh">
      <h1>ERC STEM 課程</h1>
      <p>為小學生、初中生、家長和學校老師提供的智能實景駕駛學習體驗</p>
    </HeroSection>

    <div class="container">
      <div class="section-header">
        <h2>四大課程模組</h2>
        <p>循序漸進的 STEM 學習路徑</p>
      </div>

      <div class="grid-container">
        <div class="card">
          <div class="card-date">汽車硬件拼裝學習</div>
          <h3>A1 – Lego ERC課程​ <br>(硬件體驗學習)</h3>
          <p>讓學童可以從細分的硬件組合成一件可用及可行駛的汽車，從而啟發學生的動手製作能力及認識汽車結構。​</p>
          <span class="tag">Lego</span>
          <span class="tag">動手實驗</span>
        </div>

        <div class="card">
          <div class="card-date">編程應用</div>
          <h3>A2 – Microcontroller ERC課程​ <br>(編程應用程式及使用學習)</h3>
          <p>在完成硬體汽車製作後，需為車輛編寫程式以實現所需的行進指令。同時，向學生講解從零開始編寫程式到車輛順利行駛的具體步驟，並介紹如何透過程式設計實現轉彎、前進、後退等功能的數據處理方式。​</p>
          <span class="tag">編程</span>
          <span class="tag">微控制器</span>
        </div>

        <div class="card">
          <div class="card-date">實景模擬駕駛</div>
          <h3>A3 – Cospaces VR/AR​ <br>(實景視像模擬鏡頭操作及運用)</h3>
          <p>要將駕駛的所有工序從虛擬場景轉化為實際操作，可以採用虛擬眼鏡或3D實景牆式投影螢幕進行顯示。車輛在實際場地行進時，相關數據和畫面可即時呈現在駕駛者的控制器台上，讓駕駛者透過類似遙控機器人的操作方式，直接操控車輛。​</p>
          <span class="tag">VR/AR</span>
          <span class="tag">虛擬場景</span>
        </div>

        <div class="card">
          <div class="card-date">道路安全技能</div>
          <h3>A4 - 實景操作及教育道路安全常識​</h3>
          <p>在車輛行進的路面設計中，可融入真實場景模擬，例如交通燈、路口、迴旋處等，讓學習者根據實際道路規定進行安全操作。這能有效提升學生對交通標誌和指示的敏感度，進一步增強道路安全意識。​</p>
          <span class="tag">實景駕駛</span>
          <span class="tag">遙控操作</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
</script>
