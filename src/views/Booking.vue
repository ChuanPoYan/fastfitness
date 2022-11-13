<template>
  <div class="booking">
    <div id="upcoming">
      <h1 style="text-align: left">Upcoming Bookings</h1>
      <div v-for="item in this.classIDs" :key="item">
        <BookingListing
          v-if="'Booked' == item.Status"
          :Viewing="item.Viewing"
          :Category="item.Category"
          :Instructor="item.Instructor"
          :Name="item.Name"
          :Preview="item.Preview"
        />
      </div>
    </div>
    <div id="previous">
      <h1 style="text-align: left">Previous Bookings</h1>
      <div v-for="item in this.classIDs" :key="item">
        <BookingListing
          v-if="'Completed' == item.Status"
          :Viewing="item.Viewing"
          :Category="item.Category"
          :Instructor="item.Instructor"
          :Name="item.Name"
          :Preview="item.Preview"
        />
      </div>
    </div>
  </div>
</template>

<script>
//Import BookingListing so can pass classID to it
import BookingListing from "../components/BookingListing.vue";

//Firebase imports
import firebaseApp from "../main.js";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  name: "Booking",
  components: {
    BookingListing,
  },
  data() {
    return {
      classIDs: [],
      date: new Date().toDateString,
    };
  },
  created: async function () {

    // Get user bookings data
    const auth = await getAuth(firebaseApp);
    var email = auth.currentUser.email;
    const usersDocRef = doc(db, "users", email);
    getDoc(usersDocRef).then((userDoc) => {
      if (userDoc.exists()) {
        var bookingIDs = userDoc.data()["Bookings"];

        // Get bookings class data
        bookingIDs.forEach((item) => {
          const docRefBooking = doc(db, "Booking", item);
            getDoc(docRefBooking).then((refBooking) => {
              if (refBooking.exists()) {
                var bookingInfo = refBooking.data();
                var docRefClass = doc(db, "Class", bookingInfo["Class"]);

                // Get class data
                getDoc(docRefClass).then((refClass) => {
                  if (refClass.exists()) {
                    var classInfo = refClass.data();
                    var data = {
                      Viewing: refClass.id, 
                      Status: bookingInfo["Status"],
                      Category: classInfo["Category"],
                      Instructor: classInfo["Instructor"],
                      Name: classInfo["Name"],
                      Preview: classInfo["Preview"],
                    };
                    this.classIDs.push(data);
                  }
                });
              }
            });
          
        });
      }
    });
  },
};
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
