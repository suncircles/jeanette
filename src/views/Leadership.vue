<template>
  <div class="leadership">

    <div class="nyt-container">
         <h2>Jeanette Taylor and the Dyett hunger strike in the NYT:</h2>
      <a href="https://www.nytimes.com/video/us/100000003895513/a-hunger-strike-in-chicago.html" target="_blank">
        <img class="nyt-video" src="../../src/assets/images/for_web/NYTVideo.jpg" alt="Jeanette for 20th"  >
      </a>
    </div>

    <div class="mhp-container">
      <h2>Jeanette Taylor talks about the Dyett hunger strike on Melissa Harris-Perry:</h2>
        <a href="https://www.msnbc.com/melissa-harris-perry/watch/hunger-strikers-protest-school-closing-520095299586" target="_blank">
        <img class="mhp-video" src="../../src/assets/images/for_web/mhpvideo.png" alt="Jeanette for 20th"  >
      </a>
    </div>

    <carousel id="slideshow" :per-page="1" :autoplay="true" :autoplayTimeout=3000 :loop="true">  
      <!-- https://github.com/ssense/vue-carousel -->
      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/JTaylor01.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/bloodpressure.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/dyet.jpg" alt="Jeanette for 20th">
      </slide>

      <slide>
        <img class="landscape" src="../../src/assets/images/for_web/JTaylor11.jpg" alt="Jeanette for 20th">
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

    <h2>Read more about Jeanette Taylor's activism:</h2>
        <ul class="article-list">
            <li><h3>“How many times have we been played about everything that comes to this community that’s supposed to be for us, that’s not supposed to push us out?”</h3><a href="https://www.citylab.com/equity/2017/11/hope-and-change-collide-on-the-south-side/545243/" target="_blank">from "Hope and Change Collide on the South Side" in Citylab</a></li>
            <li><h3>"We all know what great schools look like; they're just not a priority in black and brown communities."</h3><a href="https://interactive.wbez.org/generation-school-closings/" target="_blank">from "A Generation of School Closings" on WBEZ</a></li>
        </ul>

  </div>
</template>

<style>

 #slideshow {
   z-index: 1;
   text-align: center;
 }

.landscape {
  width: 100%;
  height: auto;
  max-width: 1000px;
}
.carousel-1 {
  /*position: absolute;*/
}

.nyt-container {
  padding-top: 5%;
  text-align: center;
  max-height: 60vh;
  
}
.nyt-video, .mhp-video {
  width: 100%;
  max-height: 60vh;
  max-width: 1000px;
}

.mhp-container {
  padding-bottom: 5%;
}

.article-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

h2 {
    text-align: center;
}

</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'leadership',
  components: {
    HelloWorld
  }
}
</script>