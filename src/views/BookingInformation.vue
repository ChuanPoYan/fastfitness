<template>
<div class="main">

  <div class="sub">
    <img src="../assets/spin.png" alt="Spin" style="width: 100%" />
  </div>

  <div class="sub">
    <div class="information">
      <div class="information1">
        <p id="classinformation"> CLASS INFORMATION </p>
        <h1 id="studio"> RIDE THE CURRENT!  </h1>
        <h4 id="credits"> 8 CREDITS </h4>
      <hr>
      </div>
      <div class="information2">
        <p> Category: Spin  </p>
        <p> Instructor: Mandalyn Tan  </p>
        <p> Duration: 50mins </p>
        <p> RIDE THE CURRENT! puts the fun factor into getting your sweat on. You decide how far to push yourself, their instructors are there to guide and encourage you the whole ride.
          It is the ultimate party on a bike experience for anyone looking for that full body workout </p>
      </div>
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
.information1 {
  line-height: 0.5em;
}

.information2 {
  font-weight: 500;
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
  background-color:lightgray;
  width: 70px;
  height: 10px; 
  color:black;
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