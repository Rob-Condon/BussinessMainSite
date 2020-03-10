<template>
  <div id="ShowCaseMain">
    <div id="WeDo">
      <div class="ShowContent">
        What We Do
      </div>

    </div>
    <div v-on:click="ClickDesgin()" class="Service" id="WebDesgin">
       Web Design
    </div>
    <div v-on:click="ClickMarketing()" class="Service" id="Marketing">
      Marketing
    </div>
    <div v-on:click="ClickSEO()" class="Service" id="SEO">
      SEO
    </div>
    <div v-on:click="ClickMobile()" class="Service" id="Mobile">
      Mobile Development
    </div>
    <div id="ShowCaseBackground">

    </div>
  </div>
</template>

<script>
    //import JQuery from 'jquery';
    //let $ = JQuery;
    export default {
        name: "HomePage",
        components: {},
        data() {
            return {
                AboutUsContent: false,
                Clicked: 0,
            }
        },
        methods: {
          ClickDesgin: function() {
            if(this.Clicked !== 1) {
                document.getElementById('ShowCaseBackground').style.backgroundColor = "rgba(255, 255, 255, 0.6)"
                this.Clicked = 1;
            } else {
                document.getElementById('ShowCaseBackground').style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                this.Clicked = 0;
            }
          },
          ClickMarketing: function() {
              if(this.Clicked !== 2) {
                  document.getElementById('ShowCaseBackground').style.backgroundColor = "rgba(255, 155, 255, 0.6)"
                  this.Clicked = 2;
              } else {
                  document.getElementById('ShowCaseBackground').style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                  this.Clicked = 0;
              }
          },
          ClickSEO: function() {
              if(this.Clicked !== 3) {
                  document.getElementById('ShowCaseBackground').style.backgroundColor = "rgba(255, 255, 155, 0.6)"
                  this.Clicked = 3;
              } else {
                  document.getElementById('ShowCaseBackground').style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                  this.Clicked = 0;
              }
          },
          ClickMobile: function() {
              if(this.Clicked !== 4) {
                  document.getElementById('ShowCaseBackground').style.backgroundColor = "rgba(155, 255, 255, 0.6)"
                  this.Clicked = 4;
              } else {
                  document.getElementById('ShowCaseBackground').style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                  this.Clicked = 0;
              }
          }
        },

        computed: {

        },
        mounted() {

        }
    }
    //"
</script>

<style scoped>
#ShowCaseMain {
  z-index: 1;
  background: linear-gradient(to left,#A4B0F5, #FFFCF2);
  width: 100vw;
  height: 100vh;
  margin-top: 20vh;
  display: grid;

  align-items: center;
  grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  grid-template-rows: 25% 25% 25% 25%;
  grid-template-areas: "NONE1 NONE1 WebDesgin WebDesgin WebDesgin WebDesgin WeDo WeDo WeDo WeDo"
  "Marketing Marketing Marketing Marketing NONE2 NONE2 WeDo WeDo WeDo WeDo"
  "SEO SEO SEO SEO NONE3 NONE3 WeDo WeDo WeDo WeDo"
  "NONE11 NONE11 Mobile Mobile Mobile Mobile WeDo WeDo WeDo WeDo";
  text-align: center;
}
#WeDo {
  grid-area: WeDo;
  font-size: 5vw;
  color: #261D4F;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  background: #9e978e;
  height: 50vh;
  border-bottom-left-radius: 100%;
  border-top-left-radius: 100%;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
  display: flex;
  z-index: 1;
}
.ShowContent {
  alignment: center;
  text-align: center;
  align-content: center;
  display: inline-block;
}
.Service {
  font-size: 2vw;
  color: #261D4F;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 200;
  z-index: 1;
}
.Service:hover {
  cursor: pointer;
}
#WebDesgin {
  grid-area: WebDesgin;
}

#Marketing {
  grid-area: Marketing;
}
#SEO {
  grid-area: SEO;
}
#Mobile {
  grid-area: Mobile;
}
#ShowCaseBackground {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 155, 0.6);
  border-bottom-left-radius: 100%;
  border-top-left-radius: 100%;
  transition: 1s;
  z-index: 0;
}
h1, h2 {
  display: initial;
  font-size: initial;
  margin-block-start: initial;
  margin-block-end: initial;
  margin-inline-start: initial;
  margin-inline-end: initial;
  font-weight: initial;
}

</style>