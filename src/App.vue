<template>
  <div> 
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/search">Search</router-link>
      <router-link to="/booking">Booking</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">SignUp</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  colour: black; 
  font-family: 'Courier New', Courier, monospace;  
}

#nav {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  padding: 20px;
}
</style>
