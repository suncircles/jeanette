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

    <div class="space"></div>

     <div class="video"><iframe width="100%" height="500" src="https://www.youtube.com/embed/kAH4sOvev-M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

    <div class="phone-bank"></div>

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


  .flex-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-color: #ede8e8;
  }

  .flex-item {
    /* border: 10px solid rgb(137, 179, 83); */
  }

  .flex-item-1 {
    height: 65vh;
    min-width: 280px;
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

  .space {
    height: 3vh;
  }

  .video {
    display: flex;
    justify-content: center;
  }

  iframe {
    max-width: 85vw;
  }

  @media only screen and (max-width: 600px) {
  .hero-text-box {
    max-width: 100vw;
    border-radius: 0px;
    min-height: 0vh;
  }
  .hero-text-box h1 {
    font-size: 1.5em;
  }
  .flex-item-1 {
    height: 50vh;
  }
  .space {
    height: 0vh;
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
