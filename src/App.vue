<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Kalam:300,400&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,600|Raleway:300,400&display=swap');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 100%;
  width: 100%;
  overflow: hidden;
}
  body{
    margin: initial;
  }
</style>
