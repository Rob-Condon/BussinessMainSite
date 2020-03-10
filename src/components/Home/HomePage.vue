<template>
  <div style="background: linear-gradient(to left,#A4B0F5, #FFFCF2); width: 100vw">
    <navbar></navbar>
    <home-page-splash-screen ></home-page-splash-screen>
    <HomeShowCase></HomeShowCase>
  </div>
</template>

<script>
    import HomePageSplashScreen from "./HomePageSplashScreen";
    import Navbar from "../Global/Navbar";
    import HomeShowCase from '../Home/HomeShowCase'
    export default {
        name: "HomePage",
        components: {Navbar, HomePageSplashScreen, HomeShowCase}
    }
    //"
</script>

<style scoped>

</style>