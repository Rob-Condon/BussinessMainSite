<template>
  <div id="SplashZone">

    <div style="z-index: 1;" id="bubble-wrapper" class="bubble-wrapper">
      <div style="z-index: 1;"  id="bubble" ref="bubble" class="bubble">
        <img style="z-index: 1;" class="bubble-image" src="../../assets/images/in-house-web-spider.svg" />
      </div>
      <div style="z-index: 1;" ref="bubblePulse" class="bubble-pulse"></div>
      <div  id="LogoName" class="LogoName">
        <h1 id="LogoNameRight" class="LogoTitleString" style="opacity: 0"> <b id="InColor">In</b> House  </h1> <h1 style="opacity: 0" id="LogoNameLeft" class="LogoTitleString"> Web</h1>
        <div id="line"></div>
        <h1 id="LogoBottomText"> Web Design and App Specialists </h1>

      </div>
      <img src="../../assets/images/LaptopBackground-min.png" alt="None" id="LaptopImage">
    </div>

    <div id="SplashImage"></div>
  </div>
</template>

<script>
    import JQuery from 'jquery';
    let $ = JQuery;
    import {  Back, Elastic, Expo, TimelineMax } from "gsap"
    export default {
        data() {
            return{
                SplashZoneBackground:  require('../../assets/images/Tiny/WebDesgin.png'),
            }
        },
        methods: {

        },
        mounted() {
            const { bubble, bubblePulse } = this.$refs;
            var LogoStringTimeline = new TimelineMax({paused: true});
            LogoStringTimeline.to("#LogoNameRight", 0.5, {x:-400, opacity:1}).to("#LogoNameLeft", 0.5, {x:150, opacity:1}, "-=0.5").to(
                "#bubble", 1, {width: '6vw', height: '6vw', y:'-40vh', x:'-46vw', ease: Back.easeOut.config(0.2)}).to("#bubble-wrapper", 1 , {width: '11vw', height: '11vw', }, "-=0.9").to(
                    "#LogoNameRight", 1, {x:0}).to("#LogoNameLeft", 1, {x:20}, "-=1").from(
                        "#line", 0.3, { scaleX: 0, transformOrigin: "right center" }).to("#LogoBottomText", 0.45, { y: -80, opacity: 1 }, "text").to(
                            '#LogoName', 0.7, {y: '-1vh', ease: Back.easeOut.config(1)}).to(
                                '#LaptopImage', 0.5, {opacity: 1, ease: Back.easeOut.config(0.5)},'-=0.5').to('#InColor', 0.75, {color: 'white'}, '-=0.5').to(
                                    '#LogoBottomText', 0.5, {x:'5vw'}, '-=1.5').to('#LaptopImage', 1, {x:'-15.6vw'}).to('#LogoName',1,{x:'10vw'},'-=1');



            var tl = new TimelineMax({
                repeat:-1, yoyo:false
            });

            $('#bubble').hover(function() {
                toggleTimeline(tl);
                console.log("Help");
                LogoStringTimeline.play()

            });

            tl.to(bubble, 0.4, {
                scale: 0.8,
                rotation: 16,
                ease: Back.easeOut.config(1.7)
            });
            tl.to(
                bubblePulse,
                0.8,
                {
                    scale: 0.9,
                    opacity: 1
                },
                "-=0.6"
            );
            tl.to(bubble, 1.2, {
                scale: 1,
                rotation: "-=16",
                ease: Elastic.easeOut.config(2.5, 0.5)
            });
            tl.to(
                bubblePulse,
                1.1,
                {
                    scale: 3,
                    opacity: 0,
                    ease: Expo.easeOut
                },
                "-=1.2"
            );
            function toggleTimeline(tl) {
                tl.willStop = !tl.willStop; //just attaching a custom "willStop" property that we toggle so we can track even if the user clicks many times quickly.
                if (tl.willStop) {
                    var repeats = Math.floor(tl.totalTime() / tl.duration());
                    if (repeats % 2 === 0) { //make sure we end on a yoyo cycle which would be on an ODD number of repeats!
                        repeats += 1;
                    }
                    tl.repeat(repeats);
                }
            }






        }
    }
</script>
<style>
  .LogoTitleString {
    display: inline-block;
    font-size: 6vw;
    color: #261D4F;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
  }
  .LogoName {
    position: absolute;
    width: 100vw;
    transform: translateY(5vh);

  }
  #SplashZone {
    width: 100vw;
    height: 100vh;
    display: grid;

    grid-template-rows: 95% 5%;
    justify-content: center;
    z-index: 1;
    overflow: hidden;: hidden;
    max-width: 100%;
  }
  #SplashImage:after {
    content: "";
  }
  #InColor {
    color: #261D4F;
  }
  #LaptopImage {
    width: 45vw;
    z-index: -1;
    transform: translateX(-25.6vw);
    position: absolute;
    opacity: 0;
  }
  #SplashImage {
    background: url(../../assets/images/FireBackground.jpg);
    opacity: 0;
    z-index: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }



  .bubble-wrapper {
    position: relative;
    display: flex;
    width: 40vw;
    height: 40vw;
    align-self: center;
    align-items: center;
    justify-content: center;
  }

  .bubble {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    background: #FFFCF2;
    border-radius: 50%;
    height: 20vw;
    width: 20vw;
  }

  .bubble-pulse {
    position: absolute;
    z-index: 1;
    height: 24vw;
    width: 24vw;

    background: #FFFCF2;
    border-radius: 50%;
    opacity: 0;
    transform: scale(0);
  }

  .bubble-image {
    margin-top: 5%;
    height: 110%;
  }

  #line {
    transform: translate(23vw, -7vh);
    width: 50vw;
    height: 1px;
    background: white;
    margin: 0;
    justify-self: center;
  }
  #LogoBottomText {
    transform: translateY(-20vh);
    font-size: 2vw;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    opacity: 0;
  }
  .SplashReadMore {
    transform: translateY(-2vh);
    font-size: 1vw;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    transition: 1s;
  }
  /* Global Styles */



  .container:hover .SplashReadMore {
    transform: translateY(0.1vh);
    font-size: 2vw;
    font-weight: 600;
  }
  .container:hover {
    cursor: pointer;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    height: 25vh;
    transform: translateY(-20vh);
  }
  .chevron {
    position: absolute;
    width: 2.1rem;
    height: 0.48rem;
    opacity: 0;
    transform: scale(0.3);
    transition: 0.5s;
    animation: move-chevron 3s ease-out infinite;
  }
  .chevron:first-child {
    animation: move-chevron 3s ease-out 1s infinite;
  }
  .chevron:nth-child(2) {
    animation: move-chevron 3s ease-out 2s infinite;
  }

  .chevron:before, .chevron:after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    background: #2c3e50;
  }
  .chevron:before {
    left: 0;
    transform: skewY(30deg);
  }
  .chevron:after {
    right: 0;
    width: 50%;
    transform: skewY(-30deg);
  }
  @keyframes move-chevron {
    25% {
      opacity: 1;
    }
    33.3% {
      opacity: 1;
      transform: translateY(2.28rem);
    }
    66.6% {
      opacity: 1;
      transform: translateY(3.12rem);
    }
    100% {
      opacity: 0;
      transform: translateY(4.8rem) scale(0.5);
    }
  }

</style>