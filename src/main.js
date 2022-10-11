import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index.js'
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCyPZY5m7Nk-OcpLDYyafbLvHP1AKyAV90",
  authDomain: "fastfitness-7aab4.firebaseapp.com",
  projectId: "fastfitness-7aab4",
  storageBucket: "fastfitness-7aab4.appspot.com",
  messagingSenderId: "408329740196",
  appId: "1:408329740196:web:7eea9ebbdf82e3c9646b31",
  measurementId: "G-0L8BRQKDYK"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

const app = createApp(App); 
app.use(router); 
app.mount('#app'); 
