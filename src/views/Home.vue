<template>
  <div class="home">

    <div id="home" class="flex-container">
      <div class="flex-item flex-item-1"></div>
      <div class="flex-item flex-item-2">
        <div class="hero-text-box">
          <div class="hero-text-1">
            <p>Proven leadership. Unmatched sacrifice. Send a Dyett Hunger Striker to City Hall.</p></div>
          <div class="hero-buttons"><a href="https://secure.actblue.com/donate/taylorfor20th" target="_blank"><button class="hero-donate-button">Donate</button></a>
         <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4KyQMDEucIh0xcgQU9Yg9xt-0JiKjoZiYagEsxdPYy6-F-g/viewform" target="_blank"><button class="hero-vol-button">Volunteer</button></button></a></div>
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

  /* HERO IMAGE */

  .flex-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-image: url('../../src/assets/images/hero.png');
    height: 80vh;
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
  }
  
  .flex-item-1 {
    /* border: 10px solid pink; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 3vw;
  }

  .flex-item-2 {
    /* border: 10px solid pink; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .hero-text-box {
    /* border: 10px solid pink; */
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
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
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
    height: 6vh;
    background-color: #e90000;
    border-radius: 25px;
    border: none;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
  }

  .hero-donate-button:focus, .hero-vol-button:focus {
   outline: 0;
 }

  @media only screen and (max-width: 690px) {

  .flex-container {
    align-items: flex-end;
  }

  .hero-text-box {
    max-width: 100vw;
    max-height: 25vh;
    border-radius: 0px;
    min-height: 0vh;
    font-size: 1.2rem;
  }
  .hero-buttons {
    justify-content: space-evenly;
    flex-direction: row;
  }
  .hero-donate-button, .hero-vol-button {
    width: 40vw;
    font-size: 1.2rem;
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
