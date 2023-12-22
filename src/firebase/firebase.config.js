// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.VITE_AUTHDOMAIN,
  // authDomain: 'task-management-7bd9b.firebaseapp.com',
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,

  apiKey: 'AIzaSyCHi_Dpo_LE03tdUyH27Uo96HRF9kQKKaQ',
  authDomain: 'task-management-7bd9b.firebaseapp.com',
  projectId: 'task-management-7bd9b',
  storageBucket: 'task-management-7bd9b.appspot.com',
  messagingSenderId: '876248898443',
  appId: '1:876248898443:web:bc8df0a3da655be0aced8e',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
