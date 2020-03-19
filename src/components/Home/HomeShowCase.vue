<template style="overflow-x: hidden; max-width: 100%;">
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
    import {TimelineMax } from "gsap"
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
                TimeLine1: new TimelineMax({paused: true}),
                TimeLine2: new TimelineMax({paused: true}),
                TimeLine3: new TimelineMax({paused: true}),
                TimeLine4: new TimelineMax({paused: true}),
                TimeLines: [],
                TimeLineBack1: new TimelineMax({paused: true}),
                TimeLineBack2: new TimelineMax({paused: true}),
                TimeLineBack3: new TimelineMax({paused: true}),
                TimeLineBack4: new TimelineMax({paused: true}),
                TimeLinesBack: [],
            }
        },
    beforeMount() {
        this.TimeLines.push(this.TimeLine1);
        this.TimeLines.push(this.TimeLine2);
        this.TimeLines.push(this.TimeLine3);
        this.TimeLines.push(this.TimeLine4);

        this.TimeLinesBack.push(this.TimeLineBack1);
        this.TimeLinesBack.push(this.TimeLineBack2);
        this.TimeLinesBack.push(this.TimeLineBack3);
        this.TimeLinesBack.push(this.TimeLineBack4);
        console.log("Pushed on");
    },
        methods: {
            //url("../../assets/images/Tiny/SEO.jpg")
            BackToNormal: function(TurnOff = 0) {

                for(let number = 1; number <= 4; number++) {
                    if(number !== TurnOff) {
                        console.log(this.TimeLines[number-1]);
                        console.log(number-1);
                        this.TimeLinesBack[number-1].restart();
                        //this.TimeLinesBack[number-1].play();
                    }

                }
                if(TurnOff === 0) {
                    document.getElementById('WeDo').style.background = 'rgba(104,109,136,0.95)';
                }
                document.getElementById('ShowCaseBackground').style.opacity = "0";
                document.getElementById('WeDo').style.transform = 'scale(1)';
                this.Clicked = 0;
            },
            Active: function(number) {
                document.getElementById('WeDo').style.background = 'rgba(104,109,136,1)';
                document.getElementById('WeDo').style.transform = 'scale(1.5)';
                this.BackToNormal(number);
                this.TimeLines[number-1].restart();
                //this.TimeLines[number-1].play();
                document.getElementById('ShowCaseBackground').style.opacity = "1";
                document.getElementById('ShowCaseBackground').style.backgroundImage = "url("+this.Pictures[number-1]+")";
                this.Clicked = number;
          },
          ClickDesgin: function() {
            if(this.Clicked !== 1) {
                this.Active(1)
            } else {
                this.BackToNormal();
            }
          },
          ClickMarketing: function() {
              if(this.Clicked !== 2) {
                  this.Active(2)
              } else {
                  this.BackToNormal();
              }
          },
          ClickSEO: function() {
              if(this.Clicked !== 3) {
                  this.Active(3)
              } else {
                  this.BackToNormal();
              }
          },
          ClickMobile: function() {
              if(this.Clicked !== 4) {
                  this.Active(4)
              } else {
                  this.BackToNormal();
              }
          }
        },

        computed: {

        },
        mounted() {
            this.TimeLine1.to("#Item1Background", 1, {scaleX:2, scaleY: 1, backgroundColor: 'rgba(03, 06, 07, 0.9)'});
            this.TimeLine2.to("#Item2Background", 1, {scaleX:2, backgroundColor: 'rgba(03, 06, 07, 0.9)'});
            this.TimeLine3.to("#Item3Background", 1, {scaleX:2, backgroundColor: 'rgba(03, 06, 07, 0.9)'});
            this.TimeLine4.to("#Item4Background", 1, {scaleX:2, backgroundColor: 'rgba(03, 06, 07, 0.9)'});
            this.TimeLineBack1.to("#Item1Background", 0.5, {scaleX:1, scaleY: 1, backgroundColor: 'rgba(03, 06, 07, .35)'});
            this.TimeLineBack2.to("#Item2Background", 0.5, {scaleX:1, scaleY: 1, backgroundColor: 'rgba(03, 06, 07, .35)'});
            this.TimeLineBack3.to("#Item3Background", 0.5, {scaleX:1, scaleY: 1, backgroundColor: 'rgba(03, 06, 07, .35)'});
            this.TimeLineBack4.to("#Item4Background", 0.5, {scaleX:1, scaleY: 1, backgroundColor: 'rgba(03, 06, 07, .35)'});
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
  grid-template-areas: "NONE1 NONE1 WebDesgin WebDesgin WeDo WeDo WeDo WeDo WeDo WeDo"
  "Marketing Marketing Marketing NONE12 WeDo WeDo WeDo WeDo WeDo WeDo"
  "SEO SEO SEO NONE13 WeDo WeDo WeDo WeDo WeDo WeDo"
  "NONE11 NONE11 Mobile Mobile WeDo WeDo WeDo WeDo WeDo WeDo";
  text-align: center;
}
#WeDo {
  grid-area: WeDo;
  font-size: 5vw;
  color: #2D232E;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  background: rgba(104,109,136,0.95);
  box-shadow:  inset 0 0 60px rgba(104,109,136,1),
    0 0 60px rgba(104,109,136,0.7);
  height: 60vh;
  width: 40vw;
  transition: 1s;
  border-bottom-left-radius: 100%;
  border-top-left-radius: 100%;
  right: 0;
  justify-self: right;

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
  color: #474448;
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
  height: 120vh;
  width: 100vw;
  border-bottom-left-radius: 100%;
  border-top-left-radius: 100%;
  transition:  0.4s ease-in-out;
  z-index: 0;
  filter:blur(2px);
  transform: translateY(-10vh);
  max-width: 99%;
  overflow-x: hidden;

}
#Item1Background {
  background-color: rgba(03, 06, 07, .35);
  width: 85vw;
  transform: translate(6vw, -7vh) skew(-50deg) scale(1,1);
}
#Item2Background {
  width: 98vw;
  transform: translate(6vw, -7vh) skew(-50deg) scale(1,1);
}
#Item3Background {
  width: 98vw;
  transform: translate(6vw, -7vh) skew(50deg) scale(1,1);
}
#Item4Background {
  width: 85vw;
  transform: translate(6vw, -7vh) skew(50deg) scale(1,1);
}
#Item1Background, #Item2Background, #Item3Background, #Item4Background {
  z-index: -1;
  box-shadow:  inset 0 0 30px rgba(255, 252, 242, .4),
  0 0 60px rgba(255,252,242,0.5);
  background-color: rgba(03, 06, 07, .35);
  overflow-x: hidden;
  position: absolute;
  right: 0;
  transition: 1s;
  height: 18vh;
}
#Item1Background:hover, #Item4Background:hover {
  width: 88vw;
}
#Item2Background:hover, #Item3Background:hover {
  width: 100vw;
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