<template>
    <body>
        <h4> Course Information </h4>
        <!-- Contains course information -->
        <div class="main">
            <div class="photoandreview">
                <!-- Contains picture and review -->
                <img src="../assets/spinclass.png" alt="spin class photo" width="500" height="312.5">
                <!-- To change to actual name of the class -->
                <div class="description">
                    <p><b>Description</b></p>
                    <p>This is the best spin class you'll ever take, 
                        with the most intense instructors and peers, 
                        you'll be a world class athlete in no time!</p>
                </div>
            </div>
            <div class="mapcalendarandbooking">
                <!-- Details and map -->
                <div class="detailsandmap">
                    <!-- Details -->
                    <div class="details">
                        <h4>Details</h4>
                        <!-- To get details from data -->
                        <p> +65 9830 9205 </p>
                        <p> movetolive@gmail.com </p>
                        <p> movetolive.sg </p>
                        <p> @movetolive </p>
                    </div>
                    <!--Map -->
                    <div class="map">
                        <img src="../assets/placeholdermap.png" alt="map" width="250" height="200">
                    </div>
                </div>
                <!-- Calendar and booking -->
                <div class="calendarandbooking">
                    <!-- Calendar, if someone find a better one pls hmu :< -->
                    <div class="calendar">
                        <BookingCalendar/>
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
                            <button class="actionbtn" type="submit" value="Book">Book</button>
                            <button class="actionbtn" type="reset" value="Cancel">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
    import BookingCalendar from '../components/BookingCalendar.vue';
    export default {
        name: "BookingInformation",
        components: {
            BookingCalendar,
        },
    }
</script>

<style scoped>
    .main{
        width: 1500px;
        height: 500px;
        display: flex;
    }
    .photoandreview{
        width: 500px;
    }
    .description{
        border-style: solid;
        border-width: 1px;
        border-color:#D3D3D3;
        margin: 5px;
        width: 500px;
        margin-top: 10px;
    }
    .mapcalendarandbooking{
        margin-left: 50px;
    }
    .detailsandmap{
        display: flex;
        height: 200px;
        width: 500px;
    }
    .map{
        margin-left: 5px;
    }
    .details{
        border-style: solid;
        border-width: 1px;
        border-color:#D3D3D3;
        height: 200px;
    }
    .calendarandbooking{
        display: flex;
    }
    .calendar{
        width: 200px;
        height: 300px;
        margin-top:210px;
    }
    .booking{
        text-align: center;
        width: 250px;
        height: 247px;
        background-color: black;
        color: white;
    }
    .timebtn{
        margin: 5px;
    }
    .actionbtn{
        margin: 10px;
    }
</style>
