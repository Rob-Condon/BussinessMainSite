<template>
  <div style="background: linear-gradient(to left,#A4B0F5, #FFFCF2); width: 100vw; overflow-x: hidden; max-width: 100%">
    <navbar></navbar>
    <home-page-splash-screen ></home-page-splash-screen>
    <HomeShowCase></HomeShowCase>
    <Testing></Testing>
    <div style="height: 400px"></div>
  </div>
</template>

<script>
    import HomePageSplashScreen from "./HomePageSplashScreen";
    import Navbar from "../Global/Navbar";
    import HomeShowCase from '../Home/HomeShowCase'
    import Testing from "./Testing";
    export default {
        name: "HomePage",
        components: {Testing, Navbar, HomePageSplashScreen, HomeShowCase}
    }
    //"
</script>

<style scoped>

</style>