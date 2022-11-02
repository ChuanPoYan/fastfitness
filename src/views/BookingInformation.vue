<template>
<div class="main">

  <div class="sub">
    <img src="../assets/spin.png" alt="Spin" style="width: 100%" />
  </div>

  <div class="sub">
    <div class="information">
      <h5> CLASS INFORMATION </h5>
      <h1> RIDE THE CURRENT!  </h1>
      <hr>
      <h5> Category: Spin </h5>
      <h5> Instructor: Mandalyn Tan  </h5>
      <h5> Duration: 50mins </h5>
      <h5> Credits: 8 </h5>
      <h5> Ride the Current! puts the fun factor into getting your sweat on. You decide how far to push yourself, their instructors are there to guide and encourage you the whole ride.
        It is the ultimate party on a bike experience for anyone looking for that full body workout </h5>
      <!-- <div class="map">
        <img src="../assets/map.png" alt="Map" style="align: right" />  
      </div> -->
    </div>
    <br>
    <div class="booking">
      <h3> Select an available date! </h3>
      <!-- calendar datapicker-->
			<label for="datepicker">Date</label>
			<datepicker v-model="picked" id="datepicker"/>
      <br>
      <div class="bookingbutton">
        <button id="button"> BOOK </button> 
        <button id="button"> CANCEL </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Datepicker from 'vue3-datepicker'

export default {
	components: {
		Datepicker,
	},
}
</script>

<style>
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
hr {
  color: rgba(255, 106, 40);
}
.main{
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

.datepicker {
  --vdp-hover-bg-color: rgba(255, 106, 40);
  --vdp-selected-bg-color: rgba(255, 106, 40);
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