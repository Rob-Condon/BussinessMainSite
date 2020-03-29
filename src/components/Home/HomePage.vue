<template>
  <div style="background: linear-gradient(to left,#A4B0F5, #FFFCF2); width: 100vw; overflow-x: hidden; max-width: 100%">
    <navbar></navbar>
    <home-page-splash-screen ></home-page-splash-screen>
<<<<<<< HEAD
    <div>
      <div class="QuoteLine"></div>
      <h4 class="Quote">Here is a cool quote about us that you hopfully enjoy</h4>
      <h4 class="QuoteBy">- Cool dude</h4>
      <div class="QuoteLine"></div>
    </div>
    <HomeWeaponWheel></HomeWeaponWheel>

=======
    <HomeShowCase></HomeShowCase>
<<<<<<< HEAD
>>>>>>> parent of 3d00c5b... added a shitty quiz
=======
>>>>>>> parent of 3d00c5b... added a shitty quiz
  </div>
</template>

<script>
    import HomePageSplashScreen from "./HomePageSplashScreen";
    import Navbar from "../Global/Navbar";
<<<<<<< HEAD
    import HomeWeaponWheel from "./HomeWeaponWheel";

    export default {
        name: "HomePage",
        components: {HomeWeaponWheel, Navbar, HomePageSplashScreen}
=======
    import HomeShowCase from '../Home/HomeShowCase'
    export default {
        name: "HomePage",
        components: {Navbar, HomePageSplashScreen, HomeShowCase}
<<<<<<< HEAD
>>>>>>> parent of 3d00c5b... added a shitty quiz
=======
>>>>>>> parent of 3d00c5b... added a shitty quiz
    }
    //"
</script>

<style scoped>
.QuoteLine {
  width: 30vw;
  height: 1px;
  background-color: whitesmoke;
  margin-left: 35%;
}
.Quote {
  font-family: 'Kalam', cursive;
  font-weight: 300;
  font-size: 2vw;
  color: black;
}
.QuoteBy {
  font-family: 'Kalam', cursive;
  font-weight: 400;
  color: black;
  transform: translateY(-4vh);
}
</style>