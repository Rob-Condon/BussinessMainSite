<template>
  <div id="Wrapper">
  <div id="SemiCircle">





    <div class="MiddleLine"></div>
    <div id="CircleChunk1" v-on:mouseenter="Fade(1)">
      <div id="ImageMarketing"><img src="../../assets/images/SVG/MarketingIcon.svg" alt="None" ></div>
      <h1 id="Chunk1Text" class="ChunkText"> Marketing</h1> </div>
    <div id="CircleChunk2" v-on:mouseenter="Fade(2)">
      <div id="ImageSEO"><img src="../../assets/images/SVG/SEOIcon.svg" alt="None" ></div>
      <h1 id="Chunk2Text" class="ChunkText"> SEO </h1> </div>
    <div id="CircleChunk3" v-on:mouseenter="Fade(3)">
      <div id="Chunk3Highlight"></div>
      <img src="../../assets/images/SVG/MobileIcon.svg" alt="None" id="ImageMobile">
      <h1 id="Chunk3Text" class="ChunkText"> Mobile </h1> </div>
    <div id="CircleChunk4" v-on:mouseenter="Fade(4)">
      <div><img src="../../assets/images/SVG/WebIcon.svg" alt="None" id="ImageWeb"></div>
      <h1 id="Chunk4Text" class="ChunkText">Web Design </h1> </div>






    <div id="Chunk5" class="SemiVisual" style="background-color: lightgray; opacity: 1;"></div>
    <div id="Chunk0" class="SemiVisual" style="background-color: #04080F; opacity: 1;">
      <div class="ChunkTextHolder" style="  color: white;">
        <h1 class="ChunkTitle">Our Services</h1>
        <div class="ChunkTitleLine" style="background-color: white;"></div>
        <h4 class="ChunkContent">Here at In House Web we offer all services to desgin, set up and maintain a quality online presence. <br><br><br><br><br>
        From just showing the world you exist, to using the internet as your main source of new clients. <br><br><br><br><br>
        We can insure to you that in this day and age, having a unique internet identity is one hell of an asset. </h4>
      </div>
    </div>
    <div id="Chunk1" class="SemiVisual" v-bind:style="{'background-image': 'url('+Pictures[0]+')'}">
      <div class="ChunkTextHolder" style="  color: #04080F;">
        <h1 class="ChunkTitle">Marketing</h1>
        <div class="ChunkTitleLine" style="background-color: #04080F;"></div>
        <h4 class="ChunkContent">Marketing stuff that i don't know atm. <br><br><br><br><br>
          From just showing the world you exist, to using the internet as your main source of new clients. <br><br><br><br><br>
          We can insure to you that in this day and age, having a unique internet identity is one hell of an asset. </h4>
      </div>
    </div>
    <div id="Chunk2" class="SemiVisual" v-bind:style="{'background-image': 'url('+Pictures[1]+')'}">
      <div class="ChunkTextHolder" style="  color: #04080F;">
        <h1 class="ChunkTitle">SEO</h1>
        <div class="ChunkTitleLine" style="background-color: #04080F;"></div>
        <h4 class="ChunkContent">SEO is search engine optimization. We here at In House Web can make sure your site comes up before your competitors. <br><br><br><br>
          To truly make sure the customers who want your services will see that your offer them. <br><br><br><br>
          This is to insure expections are meet while your brand comes to mind when people think of the service/proudct you sell</h4>
      </div>
    </div>
    <div id="Chunk3" class="SemiVisual" v-bind:style="{'background-image': 'url('+Pictures[2]+')'}" >
      <div class="ChunkTextHolder" style="  color: #04080F;">
        <h1 class="ChunkTitle">Mobile</h1>
        <div class="ChunkTitleLine" style="background-color: #04080F;"></div>
        <h4 class="ChunkContent">People these days are on there phones more then ever. Browses sites on there phone more then ever. But there
          is one <b>Critical</b> error many make, not designing for mobile. When a site is only made for computers, people om mobile will have a bad time.<br><br><br><br>
          We will make sure that your desktop website is made fresh for mobile. So that mobile users will stay and exsplore instead of glance and rush through the site.
        We want them to take in all the content, and therefore will have to keep that content looking interesting</h4>
      </div>
    </div>
    <div id="Chunk4" class="SemiVisual" v-bind:style="{'background-image': 'url('+Pictures[3]+')'}">
      <div class="ChunkTextHolder" style="  color: #04080F;">
        <h1 class="ChunkTitle">Web Design</h1>
        <div class="ChunkTitleLine" style="background-color: #04080F;"></div>
        <h4 class="ChunkContent">.<br><br><br><br>
          We will make sure that your desktop website is made fresh for mobile. So that mobile users will stay and exsplore instead of glance and rush through the site.
          We want them to take in all the constent, and therefore will have to keep that content looking interesting</h4>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
    //import JQuery from 'jquery';
    //let $ = JQuery;
    export default {
        name: "HomeWeaponWheel",
        data() {
            return {
                CurrentWhatDo: 0,
                Pictures: [
                    require('../../assets/images/TinySmall/Marketing.png') ,
                    require('../../assets/images/TinySmall/SEO.png'),
                    require('../../assets/images/TinySmall/Mobile.png'),
                    require('../../assets/images/TinySmall/WebDesgin.png')
                ],
                CircleSpokes: [],
                ListCircle: [],
            }
        },
        methods: {
            async Load() {
                this.CurrentWhatDo = 1;
                await new Promise(r => setTimeout(r, 5));
                this.CurrentWhatDo = 2;
                await new Promise(r => setTimeout(r, 5));
                this.CurrentWhatDo = 3;
                await new Promise(r => setTimeout(r, 5));
                this.CurrentWhatDo = 4;
                await new Promise(r => setTimeout(r, 5));
                this.CurrentWhatDo = 0;
                await new Promise(r => setTimeout(r, 5));
            },
             async Fade(number) {
                 if(this.ListCircle.length === 0) {
                     this.ListCircle = [document.getElementById('Chunk0'), document.getElementById('Chunk1'),
                         document.getElementById('Chunk2'), document.getElementById('Chunk3'), document.getElementById('Chunk4')];
                 }

                if(this.CircleSpokes.length === 0) {
                    console.log('why?');
                    this.CircleSpokes = ['This array doesnt start at 1', document.getElementById('CircleChunk1'), document.getElementById('CircleChunk2'),
                        document.getElementById('CircleChunk3'), document.getElementById('CircleChunk4')]
                }
                console.log(this.CircleSpokes);
                 console.log(this.CircleSpokes[1].style);
                 let i = 0;
                for(i=0; i<this.ListCircle.length; i++) {
                    console.log(i);
                    if(i === number) {
                        this.ListCircle[i].style.opacity = '1';
                    } else {
                        this.ListCircle[i].style.opacity = '0';
                    }
                }

                if(number === 1) {
                   this.CircleSpokes[1].style.transform = 'rotate(70deg) translate(6vw, 0vw)'
                } else {
                   this.CircleSpokes[1].style.transform = 'rotate(70deg) translate(-3vw, 0vw)'
                }
                if(number === 2) {
                  this.CircleSpokes[2].style.transform = 'rotate(30deg) translate(4vw, -3vw)'
                } else {
                  this.CircleSpokes[2].style.transform = 'rotate(30deg) translate(-2vw, -3vw)'
                }
                if(number === 3) {
                   this.CircleSpokes[3].style.transform = 'rotate(-30deg) translate(5vw, -3.5vw)'
                } else {
                   this.CircleSpokes[3].style.transform = 'rotate(-30deg) translate(0.5vw, -3.5vw)'
                }
                if(number === 4) {
                   this.CircleSpokes[4].style.transform = 'rotate(-70deg) translate(8vw, -2vw)'
                } else {
                   this.CircleSpokes[4].style.transform = 'rotate(-70deg) translate(-0vw, -2vw)'
                }
                console.log("got to here without issue")
            }
        },
      beforeMount() {
          this.Load();

      }
    }
</script>

<style scoped>
#Wrapper {
  padding-top: 10vw;
  padding-bottom: 20vw;
  max-width: 100%;
  overflow-x: hidden;
}
#SemiCircle {
  margin-top: 8vw;
  margin-bottom: 8vw;
  width: 25vw;
  height: 35vw;

  transform: scale(3, 1.3);
  border-bottom-right-radius: 100%;
  border-top-right-radius:100%;
  z-index: 10;

}
.SemiVisual {
  margin-top: 8vw;
  margin-bottom: 8vw;
  width: 25vw;
  height: 35vw;
  border-bottom-right-radius: 900vw;
  border-top-right-radius:900vw;
  background-repeat: no-repeat;
  background-size: 120% 100%;
  z-index: 10;
  background-color: gray;
  opacity: 0;
  position: absolute;
  transform: translateY(-18vh);
  transition: 1s;
  overflow: hidden;
}
#CircleChunk1 {
  z-index: -1;
  position: absolute;
  width: 30vw;
  height: 10vw;
  border-bottom-right-radius: 25%;
  border-top-right-radius: 25%;
  background-color: #F6E8EA;
  transform: rotate(70deg) translate(-3vw, 0vw);
  top: 60%;
  transition: 0.3s;
}

#Chunk1Text {
  transform: rotate(-70deg) scale(0.333, 0.8) translate(11vw, 14vw);
}
#Chunk2Text {
  transform: rotate(-30deg) scale(0.333, 0.8) translate(28vw, 11vw);
}
#ImageMarketing {
  transform: rotate(-70deg) scale(0.333, 0.8) translate(17.5vw, 18vw);
  width: 10vw;
  position: absolute;
  border-radius: 100%;
  background-color: rgba(244, 250, 255, 0.5);
  padding: 0.6vw;
  box-shadow: 0vw 0vw 1vw 1vw rgba(244, 250, 255, 0.5);
}
#ImageSEO {
  transform: rotate(-30deg) scale(-0.333, 0.8) translate(-43vw, 10.5vw);
  width: 12vw;
  position: absolute;
  border-radius: 100%;
  background-color: rgba(246, 232, 234, 0.5);
  padding: 0.2vw;
  box-shadow: 0vw 0vw 1vw 1vw rgba(246, 232, 234, 0.5);
}
#ImageMobile {
  transform: rotate(30deg)  scale(-0.333, 0.8) translate(-10vw, -1vw);
  width: 9vw;
  position: absolute;
}
#ImageWeb {
  transform: rotate(70deg) scale(0.333, 0.8) translate(1vw, 1.3vw);
  width: 9vw;
  position: absolute;
}
#Chunk3Text {
  transform: rotate(30deg) scale(0.333, 0.8) translate(40vw, -4vw);
}
#Chunk4Text {
  transform: rotate(70deg) scale(0.333, 0.8) translate(16vw, -14vw);
}
.ChunkText {
  font-size: 3vw;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
}
.ChunkTitle {
  font-size: 4vw;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;


}
.ChunkTextHolder {
  transform: scale(0.333, 0.8) translateY(0vw);
}
.ChunkTitleLine {
  width: 30vw;
  height: 2px;
  transform: translateY(-2vw);
}
.ChunkContent {
  font-size: 1.2vw;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  margin: 2vw;
  width: 35vw;
  text-align: left;
}
#CircleChunk2 {
  position: absolute;
  width: 29vw;
  height: 13vw;
  border-bottom-right-radius: 25%;
  border-top-right-radius: 25%;
  background-color: #F4FAFF;
  transform: rotate(30deg) translate(-2vw, -3vw);
  top: 46%;
  transition: 0.3s;
  z-index: -1;
}
#Chunk3Highlight {
  position: absolute;
  width: 23vw;
  height: 8vw;
  border-radius: 40%;
  background-color: rgba(246, 232, 234, 0.9);
  padding: 0.2vw;
  box-shadow: 0vw 0vw 1vw 1vw rgba(246, 232, 234, 0.9);
}
#CircleChunk3 {
  position: absolute;
  width: 30.5vw;
  height: 14vw;
  border-bottom-right-radius: 25%;
  border-top-right-radius: 25%;
  background-color: #F4FAFF;
  transform: rotate(-30deg) translate(0.5vw, -3.5vw);
  top: 33%;
  transition: 0.3s;
  z-index: -1;
}

#CircleChunk4 {
  position: absolute;
  width: 29vw;
  height: 10vw;
  border-bottom-right-radius: 25%;
  border-top-right-radius: 25%;
  background-color: #F6E8EA;
  transform: rotate(-70deg) translate(-0vw, -2vw);
  top: 19%;
  transition: 0.3s;
  z-index: -1;
}


  .MiddleLine {
    position: absolute;
    width: 100vw;
    height: 2vw;
    top: 48%;
    z-index: 5;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }


</style>