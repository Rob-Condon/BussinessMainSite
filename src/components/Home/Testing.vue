<template style="padding-top: 200px">
  <div class="container">
    <div class="wrapper">
      <ul class="steps">
        <li class="is-active">Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
        <li>Step 4</li>
        <li>Step 5</li>
        <li>Step 6</li>
        <li>Step 7</li>
      </ul>
      <form class="form-wrapper">
        <fieldset class="section is-active">
          <h3>Home Computers and networks are ready for the remote work for all employees?</h3>
          <div class="row cf">
            <div class="four col">
              <input type="radio" name="r1" id="r11">
              <label for="r11">
                <h4>All</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r12">
              <label for="r12">
                <h4>Some</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r13">
              <label for="r13">
                <h4> None</h4>
              </label>
            </div>
          </div>
          <div class="button">Next</div>
        </fieldset>
        <fieldset class="section">
          <h3>Remote Work Applications are ready to perform high-quality remote work?</h3>
          <div class="row cf">
            <div class="four col">
              <input type="radio" name="r1" id="r21">
              <label for="r21">
                <h4>All</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r22">
              <label for="r22">
                <h4>Some</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r23">
              <label for="r23">
                <h4> None</h4>
              </label>
            </div>
          </div>
          <div class="button">Next</div>
        </fieldset>
        <fieldset class="section">
          <h3>Education and Training for Effective Remote Work are available?</h3>
          <div class="row cf">
            <div class="four col">
              <input type="radio" name="r1" id="r31">
              <label for="r31">
                <h4>All</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r32">
              <label for="r32">
                <h4>Some</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r33">
              <label for="r33">
                <h4> None</h4>
              </label>
            </div>
          </div>
          <div class="button">Next</div>
        </fieldset>
        <fieldset class="section">
          <h3>Internet bandwidth and internal network can handle increased load?</h3>
          <div class="row cf">
            <div class="four col">
              <input type="radio" name="r1" id="r41">
              <label for="r41">
                <h4>All</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r42">
              <label for="r42">
                <h4>Some</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r43">
              <label for="r43">
                <h4> None</h4>
              </label>
            </div>
          </div>
          <div class="button">Next</div>
        </fieldset>
        <fieldset class="section">
          <h3>•	The IT Architecture is ready to handle a disaster, fail or relocation?</h3>
          <div class="row cf">
            <div class="four col">
              <input type="radio" name="r1" id="r51">
              <label for="r51">
                <h4>All</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r52">
              <label for="r52">
                <h4>Some</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r53">
              <label for="r53">
                <h4> None</h4>
              </label>
            </div>
          </div>
          <div class="button">Next</div>
        </fieldset>
        <fieldset class="section">
          <h3>There is a Business Continuity Plan in place and people know the process</h3>
          <div class="row cf">
            <div class="four col">
              <input type="radio" name="r1" id="r61">
              <label for="r61">
                <h4>All</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r62">
              <label for="r62">
                <h4>Some</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r63">
              <label for="r63">
                <h4> None</h4>
              </label>
            </div>
          </div>
          <div class="button">Next</div>
        </fieldset>
        <fieldset class="section">
          <h3>The network and user security is enhanced for the increased remote work an potential cyber threats?</h3>
          <div class="row cf">
            <div class="four col">
              <input type="radio" name="r1" id="r71">
              <label for="r71">
                <h4>All</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r72">
              <label for="r72">
                <h4>Some</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r73">
              <label for="r73">
                <h4> None</h4>
              </label>
            </div>
          </div>
          <div class="button">Next</div>
        </fieldset>
        <fieldset class="section">
          <h3>Quiz Done</h3>
          <p>{{((this.finalScore)*100).toFixed(1)}}%</p>
          <div v-if="this.finalScore ===1">
            u Good
          </div>
          <div v-else>
            Looks like you still have stuff to work on<br>
            Contact Us to see how to improve your business during this time!
          </div>

          <div class="button">Reset Form</div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
    import JQuery from 'jquery';
    let $ = JQuery;
    export default {
        name: "Testing",
        data() {
            return {
              currentScore: 0,
              maxScore: 7,
              finalScore:0
            }
        },
      // methods:
      //         {
      //           getSelected: function() {
      //             var $radio = $('input[name=r1]:checked').attr('id');
      //             console.log($radio)
      //           }
      //         },
        mounted() {
          let page = this;
            $(document).ready(function(){
                $(".form-wrapper .button").click(function(){
                    var button = $(this);
                    if(this.innerText === "Reset Form")
                    {
                      page.currentScore = 0;
                      page.finalScore = 0;
                    }
                    if (this.innerText === "Next")
                    {
                      let RandomValue = $("input[type='radio'][name='r1']:checked").attr('id');
                      console.log("Got this value from raido on click: " + RandomValue);
                      let SelectionScore = RandomValue[2];

                      switch (SelectionScore) {
                        case "1":
                          page.currentScore += 1;
                          break;

                        case "2":
                          page.currentScore += 0.5;
                          break;

                        case "3":
                          page.currentScore += 0;
                          break;

                      }
                      page.finalScore = page.currentScore / page.maxScore;
                    }
                      var currentSection = button.parents(".section");
                      var currentSectionIndex = currentSection.index();
                      var headerSection = $('.steps li').eq(currentSectionIndex);
                      currentSection.removeClass("is-active").next().addClass("is-active");
                      headerSection.removeClass("is-active").next().addClass("is-active");

                      $(".form-wrapper").submit(function (e) {
                        e.preventDefault();
                      });


                      if (currentSectionIndex === 7) {
                        $(document).find(".form-wrapper .section").first().addClass("is-active");
                        $(document).find(".steps li").first().addClass("is-active");

                      }

                });
            });

        }
    }

</script>

<style scoped>
  html, body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: #3498db;
  }

  h1, h2, h3, h4, h5 ,h6{
    font-weight: 200;
  }

  a{
    text-decoration: none;
  }

  p, li, a{
    font-size: 14px;
  }

  fieldset{
    margin: 0;
    padding: 0;
    border: none;
  }

  /* GRID */

  .twelve { width: 100%; }
  .eleven { width: 91.53%; }
  .ten { width: 83.06%; }
  .nine { width: 74.6%; }
  .eight { width: 66.13%; }
  .seven { width: 57.66%; }
  .six { width: 49.2%; }
  .five { width: 40.73%; }
  .four { width: 32.26%; }
  .three { width: 23.8%; }
  .two { width: 15.33%; }
  .one { width: 6.866%; }

  /* COLUMNS */

  .col {
    display: block;
    float:left;
    margin: 0 0 0 1.6%;
  }

  .col:first-of-type {
    margin-left: 0;
  }

  .container{
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    position: relative;
    padding-top: 200px
  }

  .row{
    padding: 20px 0;
  }

  /* CLEARFIX */

  .cf:before,
  .cf:after {
    content: " ";
    display: table;
  }

  .cf:after {
    clear: both;
  }

  .cf {
    *zoom: 1;
  }

  .wrapper{
    width: 100%;
    margin: 30px 0;
  }

  /* STEPS */

  .steps{
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #fff;
    text-align: center;
  }


  .steps li{
    display: inline-block;
    margin: 20px;
    color: #ccc;
    padding-bottom: 5px;
  }

  .steps li.is-active{
    border-bottom: 1px solid #3498db;
    color: #3498db;
  }

  /* FORM */

  .form-wrapper .section{
    padding: 0px 20px 30px 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    opacity: 0;
    -webkit-transform: scale(1, 0);
    -ms-transform: scale(1, 0);
    -o-transform: scale(1, 0);
    transform: scale(1, 0);
    -webkit-transform-origin: top center;
    -moz-transform-origin: top center;
    -ms-transform-origin: top center;
    -o-transform-origin: top center;
    transform-origin: top center;
    -webkit-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    text-align: center;
    position: absolute;
    width: 100%;
    min-height: 300px
  }

  .form-wrapper .section h3{
    margin-bottom: 30px;
  }

  .form-wrapper .section.is-active{
    opacity: 1;
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  .form-wrapper .button, .form-wrapper .submit{
    background-color: #3498db;
    display: inline-block;
    padding: 8px 30px;
    color: #fff;
    cursor: pointer;
    font-size: 14px !important;
    font-family: 'Open Sans', sans-serif !important;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

  .form-wrapper .submit{
    border: none;
    outline: none;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .form-wrapper input[type="text"],
  .form-wrapper input[type="password"]{
    display: block;
    padding: 10px;
    margin: 10px auto;
    background-color: #f1f1f1;
    border: none;
    width: 50%;
    outline: none;
    font-size: 14px !important;
    font-family: 'Open Sans', sans-serif !important;
  }

  .form-wrapper input[type="radio"]{
    display: none;
  }

  .form-wrapper input[type="radio"] + label{
    display: block;
    border: 1px solid #ccc;
    width: 100%;
    max-width: 100%;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
  }

  .form-wrapper input[type="radio"] + label:before{
    content: "✔";
    position: absolute;
    right: -10px;
    top: -10px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 100%;
    background-color: #3498db;
    color: #fff;
    display: none;
  }

  .form-wrapper input[type="radio"]:checked + label:before{
    display: block;
  }

  .form-wrapper input[type="radio"] + label h4{
    margin: 15px;
    color: #ccc;
  }

  .form-wrapper input[type="radio"]:checked + label{
    border: 1px solid #3498db;
  }

  .form-wrapper input[type="radio"]:checked + label h4{
    color: #3498db;
  }

</style>