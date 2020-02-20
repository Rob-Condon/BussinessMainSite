<template>
  <div id="SplashZone">
    <div id="bubble-wrapper" class="bubble-wrapper">
      <div  id="bubble" ref="bubble" class="bubble">
        <img class="bubble-image" src="../../assets/images/in-house-web-spider.svg" />
      </div>
      <div ref="bubblePulse" class="bubble-pulse"></div>
      <div id="LogoName" class="LogoName">
        <h1 id="LogoNameRight" class="LogoTitleString" style="opacity: 0"> In House  </h1> <h1 style="opacity: 0" id="LogoNameLeft" class="LogoTitleString"> Web</h1>
        <div id="line"></div>
        <h1 id="LogoBottomText"> Web design and App specialists </h1>
      </div>

    </div>

  </div>
</template>

<script>
    import JQuery from 'jquery';
    let $ = JQuery;
    import {  Back, Elastic, Expo, TimelineMax } from "gsap"
    export default {
        methods: {

        },
        mounted() {
            const { bubble, bubblePulse } = this.$refs;
            var LogoStringTimeline = new TimelineMax({paused: true});
            LogoStringTimeline.to("#LogoNameRight", 2, {x:-400, opacity:1}).to("#LogoNameLeft", 2, {x:150, opacity:1}, "-=2").to(
                "#bubble", 2, {width: '6vw', height: '6vw', y:'-40vh', x:'-46vw', ease: Back.easeOut.config(1)}).to("#bubble-wrapper", 2, {width: '11vw', height: '11vw', }, "-=2").to(
                    "#LogoNameRight", 2, {x:0}).to("#LogoNameLeft", 2, {x:20}, "-=2").from(
                        "#line", 0.5, { scaleX: 0, transformOrigin: "right center" }).to("#LogoBottomText", 0.75, { y: -40, opacity: 1 }, "text");



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
    display: flex;
    justify-content: center;
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
    transform: translateY(-11vh);
    font-size: 2vw;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    opacity: 0;
  }
  /* Global Styles */

</style>