<template>
    <h1> Booking Page </h1>
<div class="booking">
    <div id="upcoming">
        <h1 style="text-align: left">Upcoming Bookings</h1>
        <BookingListing/>  
        <BookingListing/> 
    </div>
    <div id="previous">
        <h1 style="text-align: left">Previous Bookings</h1>
        <BookingListing/> 
        <BookingListing/> 
    </div>
</div>
</template>

<style>
.booking {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px; 
    padding-top: 10px;
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

<script>
import BookingListing from '@/components/BookingListing.vue'

export default {
    name: 'Booking',
    components:{
        BookingListing
    }
}
</script>

