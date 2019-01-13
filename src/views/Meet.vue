<template>
  <div class="meet">

    <div class="bio-quote"><h2>Jeanette M. Taylor's record of fighting for our community is <em>unmatched</em>. Her track record of sacrifice is based on her belief that change should happen “with us, not to us.”</h2></div>

      <div class="bio-container">
        <div class="flex-item bio-item-1">
          <div class="bio-text-box">
            <div class="bio-text-box">
            <br><br>
            <p>Jeanette is a proud mother and grandmother. She lives in Woodlawn with her husband and two teenage children. She:</p>
            <ul>
              <li>Led the 34-day hunger strike that forced Rahm Emanuel to keep Dyett High School open</li></br>
              <li>Took on U of C administrators, standing with the youth organizers to win a new adult trauma center for the south side</li></br>
              <li>Is fighting to bring a Community Benefits Agreement Ordinance to stop displacement from the area around the Obama Center—so that working  families can find housing they can afford and get jobs in our community.</li>
            </ul>
            <p>Jeanette is the <strong>only</strong> candidate with a track record of taking on Rahm Emanuel and winning. As alderman, she will stand up to greedy developers and special interests and fight every day for the dignity and respect that we deserve.</p>
            <br>
          </div>
          </div>
         </div>
        <div class="flex-item bio-item-2"></div>
    </div>

    

  </div>
</template>

<style>

.meet {
  padding-top: 10%;
}

.bio-quote {
    text-align: center;
    font-size: 2vmin;
  }

  .bio-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap-reverse;
  }

  .bio-item-1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 4;
  }

  .bio-item-2 {
    height: 50vh;
    min-width: 300px;
    min-height: 300px;
    background-image: url('../../src/assets/images/JTaylorKid.png');
    background-size: cover;
    flex-grow: 3;
  }

  .bio-text-box {
    max-width: 50vw;
    min-height: 30vh;
    color: black;
    display: flex;
    padding-left: 5%;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 900px) {
  .bio-text-box {
    max-width: 100vw;
    border-radius: 0px;
    min-height: 0vh;
    padding-right: 5%;
  }
  .bio-item-2 {
    height: 55vh;
  }
  .meet {
  padding-top: 20%;
}
}

</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'meet',
  components: {
    HelloWorld
  }
}
</script>