import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCids1EBup-jWvexDvQ3i1B1irigLdXbpg",
  authDomain: "jsmin6330-hello-vue.firebaseapp.com",
  projectId: "jsmin6330-hello-vue",
  storageBucket: "jsmin6330-hello-vue.appspot.com",
  messagingSenderId: "817070361897",
  appId: "1:817070361897:web:c369a888d704c980cd3b38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
