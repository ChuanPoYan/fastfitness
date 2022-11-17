<template>
  <div class="signuppage">
    <form id="signup" @submit.prevent="signup">
      <h2 id="title">SIGN UP</h2>
      <input type="name" placeholder="Name..." v-model="name" />
      <br /><br />
      <input type="email" placeholder="Email address..." v-model="email" />
      <br /><br />
      <input type="password" placeholder="Password..." v-model="password" />
      <br /><br />
      <button class="button">Sign Up</button>
      <p id="login">
        Signed Up Already? <router-link to="/login">Login</router-link>
      </p>
    </form>
  </div>
  <div>
    <SavedModalSignup v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { default as error_dict } from "../data/error.js";
import firebaseApp from "@/main";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import SavedModalSignup from '@/components/SavedModalSignup.vue'

const db = getFirestore(firebaseApp);

export default {
  components: {
      SavedModalSignup,
  },
  name: "SignUp",
  data() {
    return {
      name: "", 
      email: "",
      password: "",
      showModal:false,
    };
  },
  methods: {
    signup() {
      createUserWithEmailAndPassword(
        getAuth(firebaseApp),
        this.email,
        this.password
      )
        .then((userCredential) => {
          const user = userCredential.user.email;
          console.log("Successfully registered!", user);
          setDoc(doc(db, "users", this.email), {
            First_Name: this.name,
            Phone_Number: null,
            Email: this.email,
            Address: null,
            Membership: "No",
            Credits: 0,
            Bookings: [],
            Viewing: null,
          })
            .then(() => {
              this.login();
            })
            .catch((error) => {
              console.error("Error Creating User", error);
            });
        })
        .catch((error) => {
          if (error.code in error_dict.data()) {
            alert(error_dict.data()[error.code]);
          } else {
            alert(error.message);
          }
        });
    },
    login() {
      const auth = getAuth(firebaseApp);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user.email;
          console.log("Successfully logged in!", user);
          this.showModal = true;
        })
        .catch((error) => {
          if (error.code in error_dict.data()) {
            alert(error_dict.data()[error.code]);
          } else {
            alert(error.message);
          }
        });
    },
  },
};
</script>

<style>
#login {
  font-size: 20px;
  font-family: Helvetica, Arial, sans-serif;
}

input,
.placeholder {
  font-size: 1rem;
  padding: 0 1.2rem;
}

input {
  height: 3rem;
  width: 16rem;
  border: 2px solid black;
  border-radius: 1rem;
}

#title {
  text-align: center;
  background: rgba(255, 106, 40);
  color: white;
  font-size: 30px;
  font-family: Helvetica, Arial, sans-serif;
  padding: 20px;
  border-radius: 20px;
}

.signuppage {
  border-radius: 5px;
  width: 100%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
}

#signup {
  text-align: center;
  padding-top: 40px;
}

.button {
  font-family: Helvetica, Arial, sans-serif;
  padding: 1rem 3rem;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  background: rgba(255, 106, 40);
  border-radius: 9px;
  border: none;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
}

.button:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
