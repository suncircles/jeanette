<template>
  <div class="home">
    
    
   <header class="flex-container">

     <div class="flex-item image-container">
       <div class="flex-item hero-image"></div>
     </div>

     <div class="flex-item hero-text-container">
       <div class=" flex-item hero-text-box">
         <h2>Help elect a community organizer and Dyett hunger striker!</h2>
       </div>
      </div>

    </header>

    <div class="space"></div>

    <div class="video"><iframe width="95%" height="500" src="https://www.youtube.com/embed/kAH4sOvev-M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

    <div class="events"></div>

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
  width: 100%;
  height: 55vh;
  /* border: 10px solid mistyrose; */
  display: flex;
  /* flex-wrap: wrap; */
  background-color: #ede8e8;
}

.flex-item {
  flex: 1;
  display: flex;
}

.image-container {
  display: flex;
  justify-content: center;
  min-height: 400px;
}

.hero-image {
  /* border: 5px solid seagreen; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding-left: 25px;
  background-image: url('../../src/assets/images/hero-image.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.hero-text-box {
  background-color: #044696;
  color: white;
  height: 33vh;
  display: flex;
  align-items: center;
  margin-right: 15%;
  padding: 10px;
  text-align: center;
  border-radius: 50px;
}

.hero-text-container {
  /* border: 5px solid palevioletred; */
  display: flex;
  align-items: center;
  align-content: center;
  width: 300px;
  padding-right: 20px;
}

.social-media {
  /* border: 5px solid lightblue; */
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 25px;
  background-color: #ede8e8;
}

.space {
  height: 3vh;
}

.video {
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 550px) {
  .flex-container {
    flex-direction: column;
  }
  .hero-text-container {
    width: 100vw;
    padding: 0;
    margin:0;
  }
  .hero-text-box {
    margin: 0;
    padding: 0;
    height: 20vh;
    border-radius: 0px;
  }
  /* .image-container {
    flex-grow: 3;
  } */
  /* .space {
    height: 9vh;
  } */
  iframe {
    width: 100%;
    max-height: 300px;
  }
}


@media only screen and (max-width: 360px) {
  .hero-text-box {
    margin-bottom: 50%;
  }
}

@media only screen and (min-width: 320px) and (max-width: 355px) and (max-height: 568px) {
  .hero-text-box {
    margin-bottom: 75%;
  }
}

@media only screen and (width: 375px) {
  .hero-text-box {
    margin-bottom: 40%;
  }
}

@media only screen and (width: 375px) and (min-height: 800px) {
  .hero-text-box {
    margin-bottom: 15%;
  }
}

@media only screen and (width: 414px) {
  .hero-text-box {
    margin-bottom: 20%;
  }
}

@media only screen and (width: 411px) {
  .hero-text-box {
    margin-bottom: 10%;
  }
}

@media only screen and (width: 411px) and (min-height: 730px) and (max-height: 820px) {
  .hero-text-box {
    margin-bottom: 20%;
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
