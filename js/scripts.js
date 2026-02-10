// 1. Import Firebase SDKs (App, Analytics, and Firestore)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, query, where, getDocs, serverTimestamp }
    from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// 2. Your Web App Configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8UQ5702asQU7SGyfGhTgfZBmLv5FjUbc",
    authDomain: "erc-booking.firebaseapp.com",
    projectId: "erc-booking",
    storageBucket: "erc-booking.firebasestorage.app",
    messagingSenderId: "69669577622",
    appId: "1:69669577622:web:ac786d4615a81b4507b3b7",
    measurementId: "G-XRHJRLPBR6"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Database

// --- HELPER FUNCTION: Get the next Friday's date in YYYY-MM-DD format ---
function getNextFriday(currentDate) {
    const date = new Date(currentDate); // Create a new date object to avoid modifying the original
    const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday

    let daysUntilFriday = 0;
    if (dayOfWeek === 5) { // If today is Friday
        daysUntilFriday = 0;
    } else if (dayOfWeek < 5) { // If today is before Friday (Mon-Thu)
        daysUntilFriday = 5 - dayOfWeek;
    } else { // If today is Saturday (6)
        daysUntilFriday = 5 - dayOfWeek + 7; // For Saturday, 5 - 6 + 7 = 6 days
    }
    
    date.setDate(date.getDate() + daysUntilFriday);
    
    // Format the date to 'YYYY-MM-DD'
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

// --- MOBILE MENU TOGGLE LOGIC ---
window.toggleMobileMenu = function() {
    const navLinks = document.getElementById('mobile-nav-links');
    if (navLinks) {
        navLinks.classList.toggle('open');
        const menuToggleIcon = document.querySelector('.menu-toggle i');
        if (navLinks.classList.contains('open')) {
            menuToggleIcon.classList.remove('fa-bars');
            menuToggleIcon.classList.add('fa-times');
        } else {
            menuToggleIcon.classList.remove('fa-times');
            menuToggleIcon.classList.add('fa-bars');
        }
    }
};

// --- PAGE NAVIGATION LOGIC ---
const routes = {
    '#/home': 'home',
    '#/about': 'about',
    '#/exhibitions': 'exhibitions',
    '#/courses': 'courses',
    '#/booking': 'booking',
    '#/contact': 'contact',
    '#/download': 'download'
};

function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    const selectedSection = document.getElementById(pageId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const matchingBtn = document.querySelector(`.nav-links .nav-btn[data-page-id="${pageId}"]`);
    if (matchingBtn) {
        matchingBtn.classList.add('active');
    }

    if (pageId === 'booking') {
        if (window.generateTimeSlots) {
            window.generateTimeSlots();
        }
    }

    const navLinks = document.getElementById('mobile-nav-links');
    if (navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        const menuToggleIcon = document.querySelector('.menu-toggle i');
        if (menuToggleIcon) {
            menuToggleIcon.classList.remove('fa-times');
            menuToggleIcon.classList.add('fa-bars');
        }
    }
    window.scrollTo(0, 0);
}

function router() {
    let path = window.location.hash;
    if (!path || path === '#') {
        path = '#/home';
        window.history.replaceState(null, null, path);
    }
    const pageId = routes[path];
    if (pageId) {
        showPage(pageId);
    } else {
        window.location.hash = '#/home';
    }
}

// --- BOOKING SYSTEM VARIABLES ---
let selectedBookingDate = '';
let selectedBookingTime = '';

// --- GENERATE TIME SLOTS (CHECKING FIREBASE) ---
window.generateTimeSlots = async function() {
    const timeSlotsContainer = document.getElementById('time-slots-grid');
    const dateInput = document.getElementById('booking-date');
    
    if (!timeSlotsContainer || !dateInput.value) return;

    const selectedDate = dateInput.value;
    const dateObj = new Date(selectedDate + 'T00:00:00'); // Use T00:00:00 to avoid timezone issues
    const dayOfWeek = dateObj.getDay(); // 0 for Sunday, 1 for Monday, ..., 5 for Friday, 6 for Saturday

    // --- NEW: Check if the selected day is Friday ---
    if (dayOfWeek !== 5) { 
        timeSlotsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color: red;">預約只在星期五開放。請選擇一個星期五。</p>';
        selectedBookingTime = ''; // Clear any previously selected time if the date is invalid
        return; // Stop execution if not Friday
    }
    // --- END NEW ---

    timeSlotsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">正在檢查預約狀況...</p>'; 

    // 1. Check Firebase for existing bookings on this date
    const bookingsRef = collection(db, "bookings");
    const q = query(bookingsRef, where("date", "==", selectedDate));
    const querySnapshot = await getDocs(q);

    const bookedTimes = new Set();
    querySnapshot.forEach((doc) => {
        bookedTimes.add(doc.data().time);
    });

    // 2. Render Slots
    timeSlotsContainer.innerHTML = ''; 
    const startTimeMinutes = 10 * 60; // 10:00 AM
    const endTimeMinutes = 17 * 60;   // 5:00 PM
    const interval = 30;

    for (let minutes = startTimeMinutes; minutes <= endTimeMinutes; minutes += interval) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        const timeString = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;

        const slotButton = document.createElement('button');
        slotButton.classList.add('time-slot-btn');
        slotButton.textContent = timeString;
        slotButton.setAttribute('data-time', timeString);

        // If time is in bookedTimes, disable it
        if (bookedTimes.has(timeString)) {
            slotButton.disabled = true;
            slotButton.style.backgroundColor = '#ccc';
            slotButton.style.color = '#666';
            slotButton.style.cursor = 'not-allowed';
            slotButton.title = "已預約";
        } else {
            slotButton.onclick = function() { selectTimeSlot(this); };
        }

        timeSlotsContainer.appendChild(slotButton);
    }
};

window.selectTimeSlot = function(button) {
    const allSlots = document.querySelectorAll('.time-slot-btn');
    allSlots.forEach(slot => slot.classList.remove('active'));
    button.classList.add('active');
    selectedBookingTime = button.getAttribute('data-time');
    
    const dateInput = document.getElementById('booking-date');
    if (dateInput) selectedBookingDate = dateInput.value;
};

// --- SUBMIT BOOKING (WRITE TO FIREBASE) ---
window.submitBooking = async function() {
    const name = document.getElementById('booking-name').value;
    const phone = document.getElementById('booking-phone').value;
    const email = document.getElementById('booking-email').value;

    if (!selectedBookingDate || !selectedBookingTime || !name || !phone || !email) {
        alert('請填寫所有預約資訊並選擇時間！');
        return;
    }

    const submitBtn = document.querySelector('.booking-form button[type="submit"]');
    if(submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "處理中...";
    }

    try {
        await addDoc(collection(db, "bookings"), {
            name: name,
            phone: phone,
            email: email,
            date: selectedBookingDate,
            time: selectedBookingTime,
            created_at: serverTimestamp()
        });

        const waMessage = 
            `你好 ERC，我想預約體驗。\n\n` +
            `👤 *姓名:* ${name}\n` +
            `📱 *電話:* ${phone}\n` +
            `📧 *電郵:* ${email}\n` +
            `📅 *日期:* ${selectedBookingDate}\n` +
            `⏰ *時間:* ${selectedBookingTime}`;

        const waUrl = `https://wa.me/85255379080?text=${encodeURIComponent(waMessage)}`;

        window.open(waUrl, '_blank');

        alert('資料已儲存！我們將轉至 WhatsApp 以便您發送預約詳情。');
        
        document.getElementById('booking-form').reset();
        selectedBookingDate = '';
        selectedBookingTime = '';
        generateTimeSlots(); 

    } catch (e) {
        console.error("Error adding document: ", e);
        alert("預約失敗，請檢查網絡連接。");
    } finally {
        if(submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = "<span>確認預約</span>";
        }
    }
};

// --- SLIDER LOGIC ---
let currentSlide = 0;
const slides = document.querySelectorAll('#home .slide');
const totalSlides = slides.length;
let autoSlideInterval;

window.changeSlide = function(direction) {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = currentSlide + direction;
    if (currentSlide >= totalSlides) currentSlide = 0;
    else if (currentSlide < 0) currentSlide = totalSlides - 1;
    slides[currentSlide].classList.add('active');
    startAutoSlide();
};

function startAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    if (totalSlides > 0) {
        autoSlideInterval = setInterval(() => {
            window.changeSlide(1);
        }, 5000);
    }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
        const today = new Date();
        const nextFridayString = getNextFriday(today); // Get the next Friday

        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const todayString = `${yyyy}-${mm}-${dd}`;

        dateInput.setAttribute('min', todayString); // Users can select dates from today onwards
        dateInput.value = nextFridayString; // Set default to the next Friday
        selectedBookingDate = nextFridayString; // Initialize global variable

        dateInput.addEventListener('change', (event) => {
            selectedBookingDate = event.target.value;
            selectedBookingTime = ''; // Clear selected time when date changes
            generateTimeSlots(); // Regenerate time slots based on new date
        });
    }

    startAutoSlide();
    router(); // Initial route setup after DOM is loaded
});

// Add event listener for hash changes
window.addEventListener('hashchange', router);
