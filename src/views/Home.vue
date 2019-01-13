<template>
  <div class="home">

    <div id="home" class="flex-container">
      <div class="flex-item flex-item-1"></div>
      <div class="flex-item flex-item-2">
        <div class="hero-text-box">
          <div class="hero-text-1"><h1>Help elect a community organizer and Dyett hunger striker on February 26, 2019!</h1></div>
          <div class="hero-text-vote">
            <h2>Find your polling station and cast your vote for Jeanette Taylor:</h2>
            <a href="https://chicagoelections.com/en/your-voter-information.html" target="_blank"><button class="btn vote-button">Vote</button></a>
          </div>
        </div>
      </div>
    </div>

    <div id="bio" class="quote"><h2>Jeanette M. Taylor's record of fighting for our community is <em>unmatched</em>. Her track record of sacrifice is based on her belief that change should happen “with us, not to us.”</h2></div>

    <div class="flex-container-3">
        <div class="flex-item-5">
         </div>
        <div class="flex-item-6">
          <div class="bio-text-box">
            <br><br>
            <ul>
              <li>Led the 34-day hunger strike that forced Rahm Emanuel to keep Dyett High School open</li></br>
              <li>Took on U of C administrators, standing with the youth organizers to win a new adult trauma center for the south side</li></br>
              <li>Fighting to bring a Community Benefits Agreement Ordinance to stop displacement from the area around the Obama Center—so that working  families can find housing they can afford and get jobs in our community.</li>
            </ul>
            <p>Jeanette is the <strong>only</strong> candidate with a track record of taking on Rahm Emanuel and winning. As alderman, she will stand up to greedy developers and special interests and fight every day for the dignity and respect that we deserve.</p>
            <br>
          </div>
        </div>
    </div>

    <div id="get-involved" class="get-involved">
      <div class="get-involved-text-1"><h2>We canvas Saturdays from 9:30 a.m.–3:30 p.m. and Sundays from 2–5 p.m.</h2></div>

      <div><button class="btn phone-button"><p>Door-knock or phonebank for Jeanette</p></button></div><br/>

      <div><a href="https://secure.actblue.com/donate/taylorfor20th" target="_blank"><button class="btn donate-button">Donate</button></a></div>

      <div class="get-involved-text-2"><h2>For upcoming panels, parties, and other community events, visit our <a href="https://www.facebook.com/Taylorfor20/">Facebook page.</a></h2></div>
    </div>

    <div id="media" class="nyt-container">
      <a href="https://www.nytimes.com/video/us/100000003895513/a-hunger-strike-in-chicago.html" target="_blank">
        <img class="nyt-video" src="../../src/assets/images/for_web/NYTVideo.jpg" alt="Jeanette for 20th"  >
      </a>
    </div>

    <carousel id="slideshow" :per-page="1" :autoplay="true" :autoplayTimeout=3000 :loop="true">  
      <!-- https://github.com/ssense/vue-carousel -->
      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/JTaylor01.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/JTaylor07.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/bloodpressure.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/JTaylor10.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/dyet.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/JTaylor11.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/JTaylor15.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/JTaylor22.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/dyett_group.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/JTaylor24.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/JTaylor30.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/dyett_night2.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/JTaylor35.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/dyett2.jpg" alt="Jeanette for 20th">
      </slide>
    </carousel>
   
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Lato');

  h2, li, p, h1, h2, .btn {
    font-family: 'Lato', sans-serif;
  }

  body, html {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  .home {
    display: flex;
    flex-direction: column;
  }

  /* HERO IMAGE */

  .flex-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-color: #ede8e8;
    padding-top: 150px;
  }

  .flex-item-1 {
    height: 60vh;
    min-width: 280px;
    min-height: 400px;
    background-image: url('../../src/assets/images/hero-image2.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    flex-grow: 2;
  }

  .flex-item-2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
  }

  .hero-text-box {
    max-width: 40vw;
    min-height: 30vh;
    background-color: #044696;
    color: white;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .hero-text-1 {
    padding: 10px;
    text-align: center;
  }

  .hero-text-vote {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    align-items: center;
    /* background-color: ; */
    border-radius: 0 0 25px 25px;
  }

  .hero-text-vote a {
    padding-bottom: 5%;
  }

  .vote-button {
    width: 20vw;
    height: 5vh;
    color: white;
    background-color: #e90000;
    border-radius: 25px;
    border: none;
    font-size: 4vh;
  }

  /* BIO */

  .flex-container-3 {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .flex-item-5 {
    height: 50vh;
    min-width: 300px;
    background-image: url('../../src/assets/images/bio2.jpg');
    background-size: cover;
    background-position: center;
    flex-grow: 1;
  }

  .flex-item-6 {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #044696;
    max-height: 50vh;
    flex-grow: 1;
    padding-right: 2%;
  }

 /* GET INVOLVED */

 .get-involved {
   display: flex;
   flex-direction: column;
   align-items: center;
 }

 .get-involved-text-1, .get-involved-text-2 {
   /* font-size: 2rem; */
   text-align: center;
 }

 .phone-button, .donate-button {
   width:60vw;
   font-size: 3vh;
   color: white;
   border-radius: 50px;
   cursor: pointer;
 }

 .donate-button {
   height: 10vh;
   background-color: #e90000;
 }

 .phone-button {
   min-height: 10vh; 
   background-color: #044696;
 }

 .phone-button:focus, .donate-button:focus {
   outline: 0;
 }

  @media only screen and (max-width: 690px) {
  .hero-text-box, .issues-text-box {
    max-width: 100vw;
    border-radius: 0px;
    min-height: 0vh;
  }
  .hero-text-box h1 {
    font-size: 1.5em;
  }
  .vote-button {
    width: 50vw;
  }
  .issues-text-box {
    font-size: 1.5em;
    text-align: center;
    padding-right: 5%;
  }
  .flex-item-1 {
    height: 50vh;
    min-height: 200px;
  }
  .flex-item-6 {
    max-height: 90vh;
  }
  iframe {
    max-width: 100vw;
    max-height: 40vh;
    padding: 0;
  }
}

</style>




<script>
export default {
  data: function() {
    return {
    };
  },
  created: function() {
    
  },
  methods: {},
  computed: {}
};
</script>
