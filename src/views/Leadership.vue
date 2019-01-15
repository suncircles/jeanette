<template>
  <div class="leadership">

    <div class="nyt-container">
         <h2>Jeanette Taylor and the Dyett hunger strike:</h2>
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
            <li><a href="https://www.citylab.com/equity/2017/11/hope-and-change-collide-on-the-south-side/545243/">Article 1</a></li>
            <li><a href="https://interactive.wbez.org/generation-school-closings/">Article 2</a></li>
            <li><a href="https://www.nytimes.com/video/us/100000003895513/a-hunger-strike-in-chicago.html">Article 3</a></li>
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
  padding-top: 20%;
  text-align: center;
  max-height: 60vh;
  
}
.nyt-video {
  width: 100%;
  max-height: 60vh;
  max-width: 1000px;
}

.article-list {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
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