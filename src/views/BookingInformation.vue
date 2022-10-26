<template>
  <body>
    <br /><br /><br />
    <!-- Contains course information -->
    <h4>Course Information</h4>
    <!-- TODO: Currently calendar UI goes over it, need new Calendar UI-->
    <div>
      <SavedModal v-show="showModal" @close-modal="showModal = false" />
    </div>
    <div class="main">
      <div class="photoandreview">
        <!-- Contains picture and review -->
        <img
          src="../assets/spinclass.png"
          alt="spin class photo"
          width="500"
          height="312.5"
        />
        <!-- To change to actual name of the class -->
        <div class="description">
          <p>
            <b>{{ this.className }}</b>
          </p>
          <p>Instructor: {{ this.classInstructor }}</p>
          <p>Category: {{ this.classCategory }}</p>
          <p>Price: {{ this.classPrice }} credits</p>
          <p>
            This is the best spin class you'll ever take, with the most intense
            instructors and peers, you'll be a world class athlete in no time!
          </p>
        </div>
      </div>
      <div class="mapcalendarandbooking">
        <!-- Details -->
        <div class="details">
          <h4>Details</h4>
          <!-- To get details from data -->
          <p>+65 9830 9205</p>
          <p>movetolive@gmail.com</p>
          <p>movetolive.sg</p>
          <p>@movetolive</p>
        </div>
        <!--Map -->
        <div class="map">
          <img
            src="../assets/placeholdermap.png"
            alt="map"
            width="250"
            height="200"
          />
        </div>
        <!-- Calendar, if someone find a better one pls hmu :< -->
        <div class="calendar">
          <BookingCalendar />
        </div>
        <!-- Booking -->
        <div class="booking">
          <h4><b>Pick an available time</b></h4>
          <!-- Time data to be dervied from backend? -->
          <div class="buttons1">
            <button class="timebtn" type="button" value="time1">09:30am</button>
            <button class="timebtn" type="button" value="time2">10:30am</button>
            <button class="timebtn" type="button" value="time2">11:30am</button>
          </div>
          <p style="font-size: 14px">You have booked</p>
          <p><b>19 September 10:30am</b></p>
          <div class="buttons2">
            <button
              class="actionbtn"
              type="submit"
              value="Book"
              @click="book()"
            >
              Book
            </button>
            <button class="actionbtn" type="reset" value="Cancel">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
//Firebase imports
import firebaseApp from "../main.js";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

//Calendar import
import BookingCalendar from "../components/BookingCalendar.vue";

//Popup import
import SavedModal from "../components/SavedModal.vue";

//Initialise Firebase
const db = getFirestore(firebaseApp);

export default {
  name: "BookingInformation",
  components: {
    BookingCalendar,
    SavedModal,
  },
  data() {
    return {
      membership: null,
      className: "Description",
      classCapacity: null,
      classCategory: null,
      classInstructor: null,
      classPrice: null,
      classVenue: null,
      showModal: false,
    };
  },
  created: async function () {
    const docRefClass = doc(db, "Class", "SpinClass1");
    console.log("ABCDE");
    getDoc(docRefClass).then((result) => {
      if (result.exists()) {
        this.className = result.data()["Name"];
        this.classCapacity = result.data()["Capacity"];
        this.classCategory = result.data()["Category"];
        this.classInstructor = result.data()["Instructor"];
        this.classPrice = result.data()["Price"];
        this.classVenue = result.data()["Venue"];
      }
    });
  },
  methods: {
    //Need method for this cause will have to extend later on
    book() {
      this.showModal = true;
    },
  },
};
</script>

<style scoped>
.main {
  width: 1000px;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.description {
  margin-top: 10px;
  padding: 5px;
}
.mapcalendarandbooking {
  margin-left: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr, 1fr;
}
.map {
  margin-left: 5px;
}
.details {
  height: 200px;
}
.booking {
  text-align: center;
  background-color: black;
  color: white;
}
.timebtn {
  margin: 5px;
}
.actionbtn {
  margin: 10px;
}
</style>
