<template>
<div class="main">

  <div class="sub">
    <img src="../assets/spin.png" alt="Spin" style="width: 100%" />
  </div>

  <div class="sub">
    <div class="information">
      <h1> Class Information </h1>
      <h5> Category: Spin </h5>
      <h5> Studio: Ride the Current!  </h5>
      <h5> Instructor: Mandalyn Tan  </h5>
      <h5> Duration: 50mins </h5>
      <h5> Credits: 8 </h5>
      <h5> Description: Ride the Current! puts the fun factor into getting your sweat on. You decide how far to push yourself, their instructors are there to guide and encourage you the whole ride.
        It is the ultimate party on a bike experience for anyone looking for that full body workout </h5>
    </div>
    <br>
    <div class="booking">
      <h3> Select an available date! </h3>
      <!-- calendar datapicker-->
			<label for="datepicker">Date</label>
			<datepicker v-model="picked" id="datepicker"/>
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
}

.booking {
  background-color: rgba(255, 106, 40);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  color: white; 
  border-radius: 30px;
  height: 250px; 
  width: 700px;
  display: inline-block;
	margin: 5px;
}

/* On mouse-over, add a deeper shadow */
.booking:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>