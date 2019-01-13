<template>
  <div class="home">

    <div id="home" class="flex-container">
      <div class="flex-item flex-item-1"></div>
      <div class="flex-item flex-item-2">
        <div class="hero-text-box">
          <div class="hero-text-1"><p>Proven leadership. Unmatched sacrifice. Send a Dyett Hunger Striker to City Hall.</p></div>
          <div class="hero-buttons"><a href="https://chicagoelections.com/en/your-voter-information.html" target="_blank"><button class="hero-donate-button">Donate</button></a>
         <a href="https://chicagoelections.com/en/your-voter-information.html" target="_blank"><button class="hero-vol-button">Volunteer</button></button></a></div>
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
    align-items: center;
    flex-wrap: wrap;
    background-image: url('../../src/assets/images/hero.png');
    height: 80vh;
    min-width: 500px;
    min-height: 300px;
    background-size: cover;
    background-position:center;
  }

  .flex-item-2 {
    border: 10px solid pink;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width: 280px;
    min-height: 400px;
    /* flex-grow: 10; */
  }

  .flex-item-1 {
    border: 10px solid pink;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* flex-grow: 1; */
  }

  .hero-text-box {
    border: 10px solid pink;
    max-width: 40vw;
    min-height: 30vh;
    background-color: #044696;
    color: white;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 1.5rem;
  }

  .hero-text-1 {
    padding: 10px;
    text-align: center;
  }

  .hero-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-buttons a {
    padding-bottom: 5%;
    font-size: 2.5rem;
  }

  .hero-donate-button, .hero-vol-button {
    width: 25vw;
    height: 5vh;
    background-color: #e90000;
    border-radius: 25px;
    border: none;
    font-size: 1.5rem;
    color: white;
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
  .hero-buttons {
    flex-direction: row;
  }
  .flex-item-1 {
    height: 42vh;
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
