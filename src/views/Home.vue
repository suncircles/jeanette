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
  .flex-item-1 {
    height: 50vh;
    min-height: 200px;
  }
  .flex-item-6 {
    max-height: 90vh;
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
