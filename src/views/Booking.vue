<template>
  <div class="booking">
    <div id="upcoming">
      <h1 style="text-align: left">Upcoming Bookings</h1>
      <BookingListing :classID = "classIDs[0]" />
      <BookingListing :classID = "classIDs[1]" />
    </div>
    <div id="previous">
      <h1 style="text-align: left">Previous Bookings</h1>
      <BookingListing />
      <BookingListing />
    </div>
  </div>
</template>

<script>
//Import BookingListing so can pass classID to it
import BookingListing from "../components/BookingListing.vue"

//Firebase imports
import firebaseApp from "../main.js";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";


const db = getFirestore(firebaseApp);

export default {
  name: "Booking",
  components: {
    BookingListing
  },
  data() {
    return {
      classIDs: []
    }
  },
  created: async function () {
    const classRef = collection(db, "Booking");
    const snapshot = await getDocs(classRef);
    snapshot.forEach(doc => {
      this.classIDs.push(doc.id);
    })
    //Filter for bookings that the user has made, and pass the class to classID instead of bookingID
    for (let i = 0; i < this.classIDs.length; i++) {
      const docRefClass = doc(db, "Booking", this.classIDs[i]);
      getDoc(docRefClass).then((result) => {
        if (result.exists()) {
          this.classIDs[i] = result.data()["Class"];
        }
      });
    } 
  },
}
</script>


<style>
.booking {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding-top: 30px;
}
#upcoming {
  margin-left: 30px;
  height: 400px;
  width: 100%;
}
#previous {
  margin-left: 30px;
  height: 400px;
  width: 100%;
}
</style>