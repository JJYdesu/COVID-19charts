<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">WelCome</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/notebook">NoteBook</router-link> |   
      <router-link to="/china">China</router-link> |
      <router-link to="/world">World</router-link> |
      <router-link to="/foreign">Foreign</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>
<style>
html,body{
	height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
