import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { initializeApp } from 'firebase/app'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEPncc2M53wOvNAnV_uEYsfV8Z3WaTOuE",
  authDomain: "democpp-54388.firebaseapp.com",
  projectId: "democpp-54388",
  storageBucket: "democpp-54388.appspot.com",
  messagingSenderId: "311137043974",
  appId: "1:311137043974:web:2d7bcfd1afd97de3f96587",
  measurementId: "G-T1TTVTZXHN"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

const app = createApp(App); 
app.use(router); 
app.mount('#app'); 
