<template>
  <div class="endorsements">

       <div class="video"><iframe width="100%" height="600" src="https://www.youtube.com/embed/kAH4sOvev-M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

    <div class="endorsement-text"><br>Endorsed by:</div>

    <div class="endorsements-container">
      <div class="endorsement ctu"></div>
      <div class="endorsement seiu"></div>
      <div class="endorsement uwf"></div>
      <div class="endorsement cfl"></div>
      <div class="endorsement rc"></div>
      <div class="endorsement teamsters"></div>
      <div class="endorsement seiulocal"></div>
      <div class="endorsement afscme"></div>
      <div class="endorsement ccctu"></div>
    </div>

  </div>
</template>

<style>

 .video {
    display: flex;
    justify-content: center;
    padding-top: 10%;
  }

  iframe {
    padding: 5% 5% 0 5%;
  }

.endorsement-text {
   text-align: center;
   font-size: 4vmin;
 }

 .endorsements-container {
   display:flex;
   flex-wrap: wrap;
   justify-content: space-around;
   padding: 1em;
 }

 .endorsement {
    min-width: 150px;
    padding: 5%;
    margin: 2%;
 }

  .ctu {
    background-image: url('../../src/assets/images/ctu.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .seiu {
    background-image: url('../../src/assets/images/seiu.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .uwf {
    background-image: url('../../src/assets/images/uwf.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .cfl {
    background-image: url('../../src/assets/images/cfl.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .rc {
    background-image: url('../../src/assets/images/rc.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .teamsters {
    background-image: url('../../src/assets/images/teamsters.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .seiulocal {
    background-image: url('../../src/assets/images/seiulocal.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .afscme {
    background-image: url('../../src/assets/images/afscme.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .ccctu {
    background-image: url('../../src/assets/images/ccctu.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media only screen and (max-width: 690px) {
  iframe {
    max-width: 100vw;
    max-height: 60vh;
    padding: 0;
  }
}


</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'endorsements',
  components: {
    HelloWorld
  }
}
</script>