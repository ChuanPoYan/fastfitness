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
          <p><b>DURATION:</b> 50 MINS</p>
          <p>{{ this.classDescription }}</p>
        </div>
      </div>
      <br />
      <div class="booking">
        <h3>Select an available date!</h3>
        <!-- calendar datepicker-->
        <div class="calendar">
          <label for="datepicker">Date</label>
          <datepicker v-model="picked" id="datepicker" />
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
import Datepicker from "vue3-datepicker";
import SavedModal from "../components/SavedModal.vue";

//Firebase imports
import firebaseApp from "../main.js";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  components: {
    Datepicker,
    SavedModal,
  },
  data() {
    return {
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
    };
  },
  methods: {
    booking() {
      //Need method for this cause will extend later on
      this.showModal = true;
    },
  },
  //Get details based on classID
  created: async function () {
    //Give time for firebase to update
    await new Promise(r => setTimeout(r, 2000));
    const auth = await getAuth(firebaseApp);
    var email = auth.currentUser.email;
    const usersDocRef = doc(db, "users", email);
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
};
</script>

<style>
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
  float: right;
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

.information {
  background-colour: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  line-height: 1em;
}

.booking {
  background-color: rgba(255, 106, 40);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  color: white;
  border-radius: 30px;
  height: 300px;
  width: 600px;
  display: inline-block;
  margin: 5px;
  padding: 20px;
}

/* On mouse-over, add a deeper shadow */
.booking:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.calendar {
  display: inline-block;
  margin: 5px;
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
</style>
