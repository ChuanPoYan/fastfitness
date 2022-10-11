<template>
  <div> 
    <nav id="nav">
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">SignUp</router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
  <div> <h1> Hello </h1></div>
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
