<template>
  <div class="home">

    <div class="social-media">Social media icons</div>
    
   <header class="flex-container">

     <div class="flex-item image-container">
       <div class="flex-item hero-image"></div>
     </div>

     <div class="flex-item hero-text-container">
       <div class=" flex-item hero-text-box">
         <h1>Help elect a community organizer and Dyett hunger striker!</h1>
       </div>
      </div>

    </header>

    <div class="video"></div>

    <div class="events"></div>

    <div class="endorsements"></div>

    



 

  </div>
</template>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.flex-container {
  height: 55vh;
  /* border: 10px solid mistyrose; */
  display: flex;
  flex-wrap: wrap;
  background-color: #ede8e8;
  /* overflow: hidden; */
}

.flex-item {
  flex: 1;
  display: flex;
}

.image-container {
  display: flex;
  justify-content: center;
}

.hero-image {
  /* border: 5px solid seagreen; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding-left: 25px;
  background-image: url('../../src/assets/images/hero-image.png');
  background-repeat:no-repeat;
  background-size: contain;
  background-position: center;
}

.hero-text-box {
  background-color: #044696;
  color: white;
  height: 33vh;
  align-items: center;
  justify-content: center;
  margin-right: 15%;
  padding: 10px;
}

.hero-text-container {
  /* border: 5px solid palevioletred; */
  display: flex;
  align-items: center;
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
  }
  .image-container {
    flex-grow: 3;
  }
}

</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
