<template>
  <div class="home">

    <div class="flex-container">
      <div class="flex-item flex-item-1"></div>
      <div class="flex-item flex-item-2">
        <div class="hero-text-box">
          <h1>Help elect a community organizer and Dyett hunger striker!</h1>
        </div>
      </div>
    </div>

     <div class="video"><iframe width="100%" height="500" src="https://www.youtube.com/embed/kAH4sOvev-M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

     <div class="quote-1"><h2>"Change in our community needs to happen <em>with</em> us, not to us." - Jeanette Taylor</h2></div>

      <div class="flex-container-2">
        <div class="flex-item flex-item-3">
          <div class="issues-text-box">
            <h2>I will fight so that working-class black and brown families can remain in Chicago: the city we built.</h2>
          </div>
         </div>
        <div class="flex-item flex-item-4"></div>
    </div>

    

    <div class="phone-bank">
      <div class="phone-text"><h2>We canvas Saturdays from 9:30–3:30 p.m. and Sundays from 2–5 p.m.</h2></div>

      <div class="phone-button"><button><h1>Door-knock or phonebank for Jeanette</h1></button></div>

      <div class="phone-text"><h2>For upcoming panels, parties, and other community events, visit our Facebook page.</h2></div>
    </div>

    <div class="donate"></div>

    <div class="endorsements"></div>
   
  </div>
</template>

<style>

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
  }

  .flex-item-1 {
    height: 60vh;
    min-width: 280px;
    min-height: 400px;
    background-image: url('../../src/assets/images/hero-image.png');
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
    align-items: center;
  }

  .hero-text-box h1 {
    padding: 10px;
    text-align: center;
  }

  /* ISSUES */

  .quote-1 {
    text-align: center;
  }

  .flex-container-2 {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap-reverse;
  }

  .flex-item-3 {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #044696;
    flex-grow: 1;
  }

  .flex-item-4 {
    height: 50vh;
    min-width: 400px;
    min-height: 300px;
    background-image: url('../../src/assets/images/meet.png');
    background-size: cover;
    flex-grow: 1;
  }

  .issues-text-box {
    max-width: 40vw;
    min-height: 30vh;
    color: white;
    border-radius: 25px;
    display: flex;
    align-items: center;
    padding-left: 5%;
  }

  /* VIDEO */

  .video {
    display: flex;
    justify-content: center;
    background-color: hsl(0, 0%, 81%);
  }

  #

  .phone-bank {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .phone-button button {
    height: 15vh;
    width: 60vw;
    background-color: #044696;
    color: white;
    border-radius: 50px;
    cursor: pointer;
  }

  .phone-button button:focus {
    outline: 0;
    }

  iframe {
    /* max-width: 90vw; */
    padding: 5%;
  }

  @media only screen and (max-width: 700px) {
  .hero-text-box, .issues-text-box {
    max-width: 100vw;
    border-radius: 0px;
    min-height: 0vh;
  }
  .hero-text-box h1 {
    font-size: 1.5em;
  }
  .flex-item-1 {
    height: 50vh;
    min-height: 200px;
  }
  iframe {
    max-width: 100vw;
    max-height: 40vh;
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
