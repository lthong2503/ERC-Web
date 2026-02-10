import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB8UQ5702asQU7SGyfGhTgfZBmLv5FjUbc',
  authDomain: 'erc-booking.firebaseapp.com',
  projectId: 'erc-booking',
  storageBucket: 'erc-booking.firebasestorage.app',
  messagingSenderId: '69669577622',
  appId: '1:69669577622:web:ac786d4615a81b4507b3b7',
  measurementId: 'G-XRHJRLPBR6'
}

const app = initializeApp(firebaseConfig)
getAnalytics(app)
export const db = getFirestore(app)
