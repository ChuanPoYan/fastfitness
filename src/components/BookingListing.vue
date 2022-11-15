<template>
  <article class="article">
    <div class="image">
      <router-link to="/bookInfo" @click="view()">
        <img id = "preview" :src="require(`@/${this.classPreview}`)" alt="Booking" style="width:90%"/>
      </router-link>
    </div>
    <div class="content">
      <h2 class="title">{{ this.Alias }}</h2>
      <hr/>
      <div class="classinfo">
        <div class="instructor">
          <img src="../assets/person.png" alt="Icon" class="icon" />
          <span class="post">{{ this.classInstructor }}</span>
        </div>
        <div class="name">
          <img src="../assets/run.png" alt="Icon" class="icon2" />
          <span class="post">{{ this.className }}</span>
        </div>
      </div>
      <div class="datecancel">
        <div class="date">
          <img src="../assets/person.png" alt="Icon" class="icon" />
          <span class="post">{{ this.Date }}</span>
          <!-- <h2> {{ this.classDate }} </h2> -->
        </div>
        <div class ="cancelbttn">
          <button class="cancel" @click="$emit('cancel', this.BookID, this.Price)">Cancel</button>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
//Firebase imports
import firebaseApp from "../main.js";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  name: "BookingListing",
  //Pass classID from Booking to this component
  props: {
    Category: String,
    Instructor: String,
    Viewing: String,
    Name: String,
    Preview: String,
    Date: String,
    BookID: String,
    Price: Number,
    Alias: String,
  },
  methods: {
    async view() {
      //Hax method to pass ID to BookingInformation
      const auth = getAuth(firebaseApp);
      this.email = auth.currentUser.email;
      const userRef = doc(db, "users", this.email);
      await updateDoc(userRef, {
        Viewing: this.classID,
      }).catch((error) => {
        console.error("Error Saving Information", error);
      });
    },
  },
  data() {
    return {
      classCategory: "",
      classInstructor: "",
      className: "",
      classID: "",
      email: "",
      classDate: "",
      classPreview:null,
    };
  },
  //Get details based on classID
  created: function () {
    this.classCategory = this.Category;
    this.classInstructor = this.Instructor;
    this.classID = this.Viewing;
    this.className = this.Name;
    this.classPreview = this.Preview;
    this.classDate = this.Date;
  },
  updated: function () {
    this.classCategory = this.Category;
    this.classInstructor = this.Instructor;
    this.classID = this.Viewing;
    this.className = this.Name;
    this.classPreview = this.Preview;
    this.classDate = this.Date;
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Avenir);

.article {
  width: 400px;
  height: 370px;
  border-radius: 10px;
  /* border: solid 2px; */
  margin-left:30px;
  margin-right: 30px;
  margin-bottom:30px;
  float: left;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-family: "Avenir", serif;
}

.link {
  text-decoration: none;
}
.name{
  padding-left: 5px;
  /* background-color:aqua; */
}

/* .image {
  margin-left: auto;
  margin-right: auto;
  width: 30px;
  height: 20px;
}
.preview{
  width:30%;
  height:50%;
} */
.content {
  color: black;
  text-align: left;
}

.title {
  margin: auto;
  width: 90%;
}

.icon {
  width: 40px;
  height: 40px;
  margin: 5px;
}
.icon2 {
  height:40px;width:25px;margin-top: 10px;margin-left: 30px;
}
.post {
  margin: 5px;
  position: relative;
  bottom: 15px;
  font-size: 20px;
}
.instructor{
  width: 40%; float: left;
  /* background-color: green; */
}
.solid {
  display: block;
  border: none;
  height: 3px;
  background-color: grey;
}
/* .datecancel{
  grid-template: grid;
  grid-column: 1fr,1fr;
} */
.date{
  width:40%; 
  height:60px;
  /* background-color: grey; */
  float:left;
  padding-left: 5px;
  padding-top: 0px;
}
.cancelbttn{
  /* margin-left: 40%; */
  /* background-color: green; */
  height:60px;
  width:50%;
  float:right;
  /* padding-top: 10px; */
}
.cancel {
  font-family: "Avenir", serif;
  width:150px;
  height:50px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  background: rgba(255, 106, 40);
  border-radius: 9px;
  border: none;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  /* margin-left: 50px; */
}
</style>
