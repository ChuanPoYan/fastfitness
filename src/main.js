import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { initializeApp } from 'firebase/app'


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import calendar
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const firebaseConfig = {
  apiKey: "AIzaSyCT-Blatmyh-dTUwicQ-fhN8rvr7q0HyxQ",
  authDomain: "democpp-cf849.firebaseapp.com",
  projectId: "democpp-cf849",
  storageBucket: "democpp-cf849.appspot.com",
  messagingSenderId: "636418969215",
  appId: "1:636418969215:web:2416a77205a6f9b1b3f94a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

const app = createApp(App); 
app.component('Datepicker', Datepicker);
app.use(router); 
app.mount('#app'); 
