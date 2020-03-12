<template>
  <div id="ShowCaseMain">
    <div id="WeDo">
      <div class="ShowContent">
        What We Do
      </div>

    </div>
    <div v-on:click="ClickDesgin()" class="Service" id="WebDesgin">
      <div id="Item1Background"></div>
      <div class="TextContent">
        Web Design
      </div>

    </div>
    <div v-on:click="ClickMarketing()" class="Service" id="Marketing">
      <div id="Item2Background"></div>
      Marketing
    </div>
    <div v-on:click="ClickSEO()" class="Service" id="SEO">
      <div id="Item3Background"></div>
      SEO
    </div>
    <div v-on:click="ClickMobile()" class="Service" id="Mobile">
      <div id="Item4Background"></div>
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
                Pictures: [
                    require('../../assets/images/Tiny/WebDesgin.png') ,
                    require('../../assets/images/Tiny/Marketing.png'),
                    require('../../assets/images/Tiny/SEO.png'),
                    require('../../assets/images/Tiny/Mobile.png')
                ],
            }
        },
        methods: {
            //url("../../assets/images/Tiny/SEO.jpg")
          ClickDesgin: function() {
            if(this.Clicked !== 1) {
                document.getElementById('ShowCaseBackground').style.opacity = "1";
                document.getElementById('ShowCaseBackground').style.backgroundImage = "url("+this.Pictures[0]+")";
                document.getElementById('Item1Background').style.backgroundColor = 'rgba(255, 252, 242, 1)';
                document.getElementById('Item1Background').style.width = '85vw';
                this.Clicked = 1;
            } else {
                document.getElementById('ShowCaseBackground').style.opacity = "0";
                document.getElementById('Item1Background').style.backgroundColor = 'rgba(255, 252, 242, .35)';
                document.getElementById('Item1Background').style.width = '78vw';
                this.Clicked = 0;
            }
          },
          ClickMarketing: function() {
              if(this.Clicked !== 2) {
                  document.getElementById('ShowCaseBackground').style.opacity = "1";
                  document.getElementById('ShowCaseBackground').style.backgroundImage = "url("+this.Pictures[1]+")";

                  this.Clicked = 2;
              } else {
                  document.getElementById('ShowCaseBackground').style.opacity = "0";

                  this.Clicked = 0;
              }
          },
          ClickSEO: function() {
              if(this.Clicked !== 3) {
                  document.getElementById('ShowCaseBackground').style.opacity = "1";
                  document.getElementById('ShowCaseBackground').style.backgroundImage = "url("+this.Pictures[2]+")";
                  this.Clicked = 3;
              } else {
                  document.getElementById('ShowCaseBackground').style.opacity = "0";
                  this.Clicked = 0;
              }
          },
          ClickMobile: function() {
              if(this.Clicked !== 4) {
                  document.getElementById('ShowCaseBackground').style.opacity = "1";
                  document.getElementById('ShowCaseBackground').style.backgroundImage = "url("+this.Pictures[3]+")";
                  this.Clicked = 4;
              } else {
                  document.getElementById('ShowCaseBackground').style.opacity = "0";
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
  max-width: 100%;
  overflow-x: hidden;
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
  background: rgba(104,109,136,0.8);
  box-shadow:  inset 0 0 60px rgba(104,109,136,1),
    0 0 60px rgba(104,109,136,0.7);
  height: 50vh;
  border-bottom-left-radius: 100%;
  border-top-left-radius: 100%;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
  display: flex;
  z-index: 2;
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
  overflow: hidden;
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
  border-bottom-left-radius: 100%;
  border-top-left-radius: 100%;
  transition:  0.4s ease-in-out;
  z-index: 0;
  filter:blur(2px);
  max-width: 99%;
  overflow-x: hidden;
}
#Item1Background {
  background-color: rgba(255, 252, 242, .35);
  width: 78vw;
  transform: translate(6vw, -7vh) skew(-50deg);;
}
#Item2Background {
  width: 95vw;
  transform: translate(6vw, -7vh) skew(-50deg);;
}
#Item3Background {
  width: 95vw;
  transform: translate(6vw, -7vh) skew(50deg);;
}
#Item4Background {
  width: 78vw;
  transform: translate(6vw, -7vh) skew(50deg);;
}
#Item1Background, #Item2Background, #Item3Background, #Item4Background {
  z-index: -1;
  box-shadow:  inset 0 0 30px rgba(255, 252, 242, .4),
  0 0 60px rgba(255,252,242,0.5);
  background-color: rgba(255, 252, 242, .35);
  overflow-x: hidden;
  position: absolute;
  right: 0;
  transition: 1s;
  height: 18vh;
}
.TextContent {
  z-index: 5;
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