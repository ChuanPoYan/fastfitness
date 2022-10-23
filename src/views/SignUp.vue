<template>
  <div>
    <form id="signup" @submit.prevent="signup">
      <h2>SignUp Page</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <br /><br />
      <input type="password" placeholder="Password..." v-model="password" />
      <br /><br />
      <button>Sign Up</button>
      <p>Signed Up Already? Login</p>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { default as error_dict } from "../data/error.js";
import firebaseApp from "@/main";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import router from "../router/index.js";

const db = getFirestore(firebaseApp);

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
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
          router.push("/");
        })
        .catch((error) => {
          if (error.code in error_dict.data()) {
            alert(error_dict.data()[error.code]);
          } else {
            alert(error.message);
          }
        });
      setDoc(doc(db, "users", this.email), {
        First_Name: null,
        Phone_Number: null,
        Email: this.email,
        Address: null,
        Membership: null,
      })
        .then((docRef) => {
          console.log(docRef);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error Creating User", error);
        });
    },
  },
};
</script>

<style>
#signup {
  text-align: center;
  padding-top: 80px;
}
</style>
