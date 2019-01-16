<template>
  <div class="leadership">

  <div class="leadership-text">
    <p>Unmatched Leadership</p>
  </div>

  <div style="height: 25px"></div> 

  <div class="container"> 
    <!-- the top two articles  -->
    <div class="row">
      <div class="card-group">
        <div class="col-sm-6">
          <div class="card" >
          <!-- <div class="card" style="width: 18rem;"> -->
            <img src="../../src/assets/images/citylab.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Hope and Change Collide on the South Side</h5>
              <p class="card-text">Seven years ago, Jeanette Taylor moved from the South Side Chicago neighborhood of Bronzeville three miles south to Woodlawn. Her Bronzeville unit was going to be rehabbed, the rent tripling. She needed a more affordable neighborhood...</p>
              <a href="https://www.citylab.com/equity/2017/11/hope-and-change-collide-on-the-south-side/545243/" target="_blank">CityLab.com - Curtis Lawren</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card" >
          <!-- <div class="card" style="width: 18rem;"> -->
            <img src="../../src/assets/images/wbez.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">A Generation Of School Closings</h5>
              <p class="card-text">In the time it has taken for a child to grow up in Chicago, city leaders have either closed or radically shaken up some 200 public schools — nearly a third of the entire district — a comprehensive new tally by WBEZ finds...</p>
              <a href="https://interactive.wbez.org/generation-school-closings/" target="_blank">WBEZ.org</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div style="height: 25px;" ></div>
  <!-- <div style="height: 100px; background-color:rgb(233, 0, 1);" ></div> -->
  <div style="height: 25px;" ></div>


 <div class="container">
  <!-- the videos -->
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">A Hunger Strike in Chicago</h5>
        <p class="card-text">In June (2015), Chicago's scool officials offically closed the last open enrollment public in the city's Bronzeville neighborhood, citing poor performance and low enrollment.</p>
        <p class="card-text">On August 17, a dozen protesters went on hunger strike to pressure the city to reopen it as a neighborhood school with a focus on technology.</p>
        <a href="https://www.nytimes.com/video/us/100000003895513/a-hunger-strike-in-chicago.html" target="_blank">The New York Times - Brent McDonald</a>
        
      </div>
      <a href="https://www.nytimes.com/video/us/100000003895513/a-hunger-strike-in-chicago.html" target="_blank">
        <img class="nyt-video" src="../../src/assets/images/for_web/NYTVideo.jpg" alt="Jeanette for 20th"  >
      </a>
    </div>
</div>


 <div class="container">
  <!-- the videos -->
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">Interview with Melissa Harris-Perry on MSNBC</h5>
        <p class="card-text">A school in Chicago was forced to close due to low enrollment. Now parents and students are on a hunger strike. Protesters Jitu Brown and Jeanette Taylor Ramann talk to Melissa Harris-Perry about the strike.</p>
        <a href="https://www.msnbc.com/melissa-harris-perry/watch/hunger-strikers-protest-school-closing-520095299586" target="_blank">MSNBC - Melissa Harris-Perry</a>
        
      </div>
      <a href="https://www.msnbc.com/melissa-harris-perry/watch/hunger-strikers-protest-school-closing-520095299586" target="_blank">
        <img class="nyt-video" src="../../src/assets/images/for_web/mhpvideo.png" alt="Jeanette for 20th"  >
      </a>
    </div>
</div>
  
  


<div style="height: 25px"></div> 



<div class="container">
  
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
</div>
    <div style="height: 25px;" ></div> 
       


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
  text-align: center;
  max-height: 60vh;
}

.nyt-video, .mhp-video {
  width: 100%;
  /*max-height: 60vh;*/
  /*max-width: 1000px;*/
}

.mhp-container {
  text-align: center;
}

.videos {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.article-list {
    list-style: none;
    display: flex;
    flex-direction: column;
}

.leadership-text {
  display: flex;
  height: 15vh;
  width: 100vw;
  background-color: #044696;
  color: white;
  font-size: 7vmin;
  justify-content: center;
  align-items: center;
}

h3 {
    text-align: center;
    padding: 1%;
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