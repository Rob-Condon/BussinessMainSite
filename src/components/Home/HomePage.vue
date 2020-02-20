<template>
  <div style="background: linear-gradient(to left,#A4B0F5, #FFFCF2); width: 100vw">
    <navbar></navbar>
    <home-page-splash-screen ></home-page-splash-screen>
  </div>
</template>

<script>
    import HomePageSplashScreen from "./HomePageSplashScreen";
    import Navbar from "../Global/Navbar";
    export default {
        name: "HomePage",
        components: {Navbar, HomePageSplashScreen}
    }
    //"
</script>

<style scoped>

</style>