<template>
  <div>
    <!-- navigation bar when person is logged IN: Home search booking profile logout-->
    <nav id="nav">
      <ul>
        <li><router-link to="/logout">LogOut</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/booking">Booking</router-link></li>
        <li><router-link to="/search">Search</router-link></li>
        <li><router-link to="/">Home</router-link></li>
        <img
          src="./assets/ff.png"
          style="
            float: left;
            width: 150px;
            height: auto;
            margin: 10px 10px 10px 30px;
          "
          alt="poyan"
        />
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
ul {
  font-family: Arial, Helvetica, sans-serif;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 10%;
  border-bottom: 2px solid grey;
  line-height: 50px;
}

li {
  float: right;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 120%;
  margin: 7px;
}

li a:hover {
  color: #ff6a28;
}
</style>
