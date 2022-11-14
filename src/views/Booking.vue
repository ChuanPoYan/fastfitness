<template>
  <br><br><br>
  <div class="booking">
    <div id="upcoming">
      <h1 style="text-align: left">Upcoming Bookings</h1>
      <div v-for="item in this.classIDs" :key="item">
        <BookingListing
          @cancel = "cancelSession"
          v-if="'Booked' == item.Status"
          :Viewing="item.Viewing"
          :Category="item.Category"
          :Instructor="item.Instructor"
          :Name="item.Name"
          :Preview="item.Preview"
          :Date="item.Date"
          :BookID="item.BookingID"
          :Price="item.Price"
        />
      </div>
    </div>
    <div id="previous">
      <h1 style="text-align: left">Previous Bookings</h1>
      <div v-for="item in this.classIDs" :key="item">
        <PreviousBooking
          v-if="'Completed' == item.Status"
          :Viewing="item.Viewing"
          :Category="item.Category"
          :Instructor="item.Instructor"
          :Name="item.Name"
          :Preview="item.Preview"
          :Date="item.Date"
          :BookID="item.BookingID"
          />
      </div>
    </div>
  </div>
</template>

<script>
//Import BookingListing and PreviousBooking so can pass classID to it
import BookingListing from "../components/BookingListing.vue";
import PreviousBooking from "../components/PreviousBooking.vue"

//Firebase imports
import firebaseApp from "../main.js";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, updateDoc, arrayRemove, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  name: "Booking",
  components: {
    BookingListing,
    PreviousBooking,
  },
  methods: {
    async cancelSession(bookID, price) {
      //Remove from user
      const auth = await getAuth(firebaseApp);
      var email = auth.currentUser.email;
      const usersDocRef = await doc(db, "users", email);
      const bookRef = doc(db, "Booking", bookID);
      await getDoc(bookRef).then((bookingRef) => {
        var bookingInfo = bookingRef.data();
        console.log(bookingInfo);
        updateDoc(usersDocRef, {
          Bookings: arrayRemove(bookID),
        }).catch((error) => {
          console.error("Error Deleting Booking", error);
        })
      })

      await getDoc(bookRef).then((bookingRef) => {
        var bookingInfo = bookingRef.data();
        var className = bookingInfo["Class"]
        var classRef = doc(db, "Class", className);
        getDoc(classRef).then((classsRef) => {
          var classInfo = classsRef.data();
          this.creditsToAdd = classInfo["Price"];
        })
      })
      console.log(price);
      console.log(this.credits);
      await updateDoc(usersDocRef, {
        Credits: this.credits + price
      });

      //Remove from booking
      await deleteDoc(bookRef);

      //Need to refresh page
      this.classIDs = [];
      await getDoc(usersDocRef).then((userDoc) => {
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
                        BookingID: refBooking.id,
                        Date: bookingInfo["Date"],
                        Category: classInfo["Category"],
                        Instructor: classInfo["Instructor"],
                        Name: classInfo["Name"],
                        Preview: classInfo["Preview"],
                        Price: classInfo["Number"],
                      };
                      this.classIDs.push(data);
                    }
                  });
                }
              });
            
          });
        }
      });
    }
  },
  data() {
    return {
      classIDs: [],
      date: new Date().toDateString,
      credits: 0,
    };
  },
  created: async function () {

    //Make booked data
    const completedData = {"Status" : "Completed"}

    //Get current date
    var currDate = new Date().toDateString().split(" ");
    var currYear = currDate[3];
    var currDay = currDate[2];
    var currMonth = currDate[1];

    //Manipulate user bookings data according to current date
    const auth = await getAuth(firebaseApp);
    var email = auth.currentUser.email;
    const usersDocRef = doc(db, "users", email);

    // Get user bookings data
    await getDoc(usersDocRef).then((userDoc) => {
      if (userDoc.exists()) {
        var bookingIDs = userDoc.data()["Bookings"];
        this.credits = userDoc.data()["Credits"];

        // Get bookings class data
        bookingIDs.forEach((item) => {
          const docRefBooking = doc(db, "Booking", item);
            getDoc(docRefBooking).then((refBooking) => {
              if (refBooking.exists()) {
                //Tweak data based on date
                if (refBooking.data()["Status"] == "Booked") {
                  var date = refBooking.data()["Date"];
                  var isOver = false;
                  var stuff = date.split(" ");
                  var year = stuff[3];
                  var day = stuff[2];
                  var month = stuff[1];
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
                    isOver = true;
                  } else if (year > currYear) {
                    isOver = false
                  } else {
                    if (month < currMonth) {
                      isOver = true;
                    } else if (month > currMonth) {
                      isOver = false
                    } else {
                      if (day < currDay) {
                        isOver = true;
                      } else if (day > currDay) {
                        isOver = false
                      } else {
                        isOver = false
                      }
                    }
                  }
                  if (isOver) {
                    updateDoc(docRefBooking, completedData);
                  }
                }
              }
            })
        })
      }
    });
    //Wait for update
    await new Promise((r) => setTimeout(r, 2000));
    await getDoc(usersDocRef).then((userDoc) => {
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
                      BookingID: refBooking.id,
                      Date: bookingInfo["Date"],
                      Category: classInfo["Category"],
                      Instructor: classInfo["Instructor"],
                      Name: classInfo["Name"],
                      Preview: classInfo["Preview"],
                      Price: classInfo["Price"],
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
