<template>
  <div>
    <SavedModal v-show="showModal" @close-modal="showModal = false" />
  </div>
  <div class="main">
    <div class="sub">
      <img
        id="photo"
        :src="require(`@/${this.classPhoto}`)"
        :alt="this.className"
        style="width: 100%"
      />
    </div>

    <div class="sub">
      <div class="information">
        <div class="information1">
          <p id="classinformation">CLASS INFORMATION</p>
          <h1 id="studio">{{ this.classVenue }}</h1>
          <h4 id="credits">{{ this.classPrice }} CREDITS</h4>
          <hr />
        </div>
        <div class="information2">
          <p><b>CATEGORY:</b> {{ this.className }}</p>
          <p><b>INSTRUCTOR:</b> {{ this.classInstructor }}</p>
          <p><b>SESSION:</b> 9pm - 10pm </p>
          <p id="classDescription">{{ this.classDescription }}</p>
        </div>
      </div>
      <br />
      <div class="booking2">
        <h3>Select an available date!</h3>
        <!-- calendar datepicker-->
        <div class="calendar">
          <label for="datepicker">Date</label>
          <Datepicker v-model="date" ref="datepicker" :enableTimePicker="false" textInput/>
          <br />
        </div>
        <div class="bookingbutton">
          <button id="button" @click="booking()">BOOK</button>
          <button id="button">CANCEL</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Import Datepicker for calendar
import SavedModal from "../components/SavedModal.vue";
import { ref } from 'vue';

//Firebase imports
import firebaseApp from "../main.js";
import {
  getFirestore,
  doc,
  addDoc,
  getDoc,
  collection,
  updateDoc, 
  arrayUnion, 
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  components: {
    SavedModal,
  },
  setup() {
      const date = ref(new Date());
      return {
          date,
      }
  }, 
  data() {
    return {
      selectedDate: null,
      classID: null,
      className: "Description",
      classCapacity: null,
      classCategory: null,
      classInstructor: null,
      classPrice: null,
      classVenue: null,
      classPhoto: null,
      classDescription: null,
      showModal: false,
      email: null,
      bookingRefID: null,
      isOver: false,
    };
  },
  //Get details based on classID
  created: async function () {
    //Give time for firebase to update
    await new Promise((r) => setTimeout(r, 2000));
    const auth = getAuth(firebaseApp);
    this.email = auth.currentUser.email;
    const usersDocRef = doc(db, "users", this.email);
    getDoc(usersDocRef).then((userDoc) => {
      if (userDoc.exists()) {
        this.classID = userDoc.data()["Viewing"];
        const docRefClass = doc(db, "Class", this.classID);
        getDoc(docRefClass).then((result) => {
          if (result.exists()) {
            this.className = result.data()["Name"];
            this.classCapacity = result.data()["Capacity"];
            this.classCategory = result.data()["Category"];
            this.classInstructor = result.data()["Instructor"];
            this.classPrice = result.data()["Price"];
            this.classVenue = result.data()["Venue"];
            this.classPhoto = result.data()["Photo"];
            this.classDescription = result.data()["Description"];
          }
        });
      }
    });
  },
  methods: {
    async booking() {
      //console.log(this.date); //returns Sun Nov 13 2022 01:09:37 GMT+0800 (Singapore Standard Time)
      //console.log(this.date.toDateString()) //returns Sun Nov 13 2022 
      this.selectedDate = this.date.toDateString();

      var stuff = this.selectedDate.split(" ");
      var currDate = new Date().toDateString().split(" ");
      var year = stuff[3];
      var day = stuff[2];
      var month = stuff[1];
      var currYear = currDate[3];
      var currDay = currDate[2];
      var currMonth = currDate[1];
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      for (let i = 0; i < 12; i++) {
        if (months[i] == month) {
          month = i;
        }
        if (months[i] == currMonth) {
          currMonth = i;
        }
      }
      if (year < currYear) {
        this.isOver = true;
      } else if (year > currYear) {
        this.isOver = false
      } else {
        if (month < currMonth) {
          this.isOver = true;
        } else if (month > currMonth) {
          this.isOver = false
        } else {
          if (day < currDay) {
            this.isOver = true;
          } else if (day > currDay) {
            this.isOver = false
          } else {
            this.isOver = false
          }
        }
      }

      const userDocRef = doc(db, "users", this.email);
      //Add booking to firebase
      await this.addBooking(userDocRef);
      //Wait for update
      await new Promise((r) => setTimeout(r, 2000));
      //Update user's booking to firebase
      await this.updateUser(userDocRef);
    },
    async addBooking(ref) {
      getDoc(ref).then((userDoc) => {
        if (userDoc.exists()) {
          const credits = userDoc.data()["Credits"];
          console.log(this.selectedDate)
          if (credits >= this.classPrice) {
            addDoc(collection(db, "Booking"), {
              Class: this.classID,
              Date: this.selectedDate,
              Status: (this.isOver) ? "Completed" : "Booked",
              User: this.email,
            }).then(docRef => {
              this.bookingRefID = docRef.id;
              this.showModal = true;
            })
          }
        } else {
          console.error("Insufficient Credits");
        }
      });
    },
    async updateUser(ref) {
      getDoc(ref).then((userDoc) => {
        if (userDoc.exists()) {
          const credits = userDoc.data()["Credits"];
          updateDoc(ref, {
            Bookings: arrayUnion(this.bookingRefID), 
            Credits: credits - this.classPrice, 
          }).catch((error) => {
            console.error("Error Saving Information", error);
          });
        }
      });
    },
  },
};
</script>

<style>

.information {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  line-height: 1em;
}

.information1 {
  line-height: 0.5em;

}

.information2 {
  font-weight: 500;
  letter-spacing: 1px;
}

#classinformation {
  letter-spacing: 2px;
  color: rgba(255, 106, 40);
}
#studio {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
}
#credits {
  color: rgba(255, 106, 40);
  font-size: 25px;
}

#category {
  border-radius: 20px;
  background-color: lightgray;
  width: 70px;
  height: 10px;
  color: black;
  text-transform: uppercase;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
}
.map {
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 50%;
  display: inline-block;
}

.main {
  padding-top: 50px;
  width: 100%;
  display: flex;
}

.sub {
  width: 50%;
  padding: 30px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.booking2 {
  background-color: rgba(255, 106, 40);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  color: white;
  border-radius: 30px;
  height: 300px;
  padding: 20px;
}

/* On mouse-over, add a deeper shadow */
.booking2:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.calendar {
  display: inline-block;
}

.bookingbutton {
  padding: 1rem 3rem;
  margin: 1rem;
  padding: 2rem 2rem;
  text-align: center;
}

/* On mouse-over, add a deeper shadow */
#button:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

#button {
  background-color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  letter-spacing: 1px;
  display: inline-block;
  padding: 1rem 1rem;
  vertical-align: middle;
  margin-right: 15px;
  width: 200px;
}
#classDescription {
  line-height: 1.5em;
}
</style>
