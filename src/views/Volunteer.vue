<template>
  <div class="volunteer">

    <div class="vol-text">Volunteer</div>

    <div class="vol-image"></div>

      <div class="vol-container">

          <div class="vol-text-1">
            <p>Jeanette Taylor knows what it’s like to have the odds stacked against her. She's running a people-powered campaign for the dignity and respect our community deserves. Every volunteer matters! Sign up today to knock doors, make calls, or organize a house party:</p>
          </div>

          
            <div class="vol-button">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4KyQMDEucIh0xcgQU9Yg9xt-0JiKjoZiYagEsxdPYy6-F-g/viewform" target="_blank">
              <button class="volunteer-button">Volunteer
              </button>
              </a>
            </div> <br/>

            <div class="vol-page-don-button">
              <a href="https://secure.actblue.com/donate/taylorfor20th" target="_blank">
              <button class="donate-button">Donate
              </button>
              </a>
            </div>

            <div class="vol-text-2">
              <p>For upcoming panels, parties, and other community events, visit our <a href="https://www.facebook.com/Taylorfor20/">Facebook page.
              </a></p>
           </div>

      </div>

  </div>
</template>

<style>

  .vol-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .vol-text {
    display: flex;
    height: 15vh;
    width: 100vw;
    background-color: #044696;
    color: white;
    font-size: 6vmin;
    justify-content: center;
    align-items: center;
  }

  .vol-text-1, .vol-text-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 85vw;
    padding-top: 1.5%;
    font-size: 1.5rem;
  }

  .vol-text-2 {
    align-self: center;
    font-size: 1rem;
    font-weight: bold;
  }

  .vol-image {
    height: 55vh;
    width: 100vw;
    min-height: 300px;
    background-image: url("../../src/assets/images/for_web/JTaylor07.jpg");
    background-size: cover;
    background-position:center;
  }

 .volunteer-button, .donate-button {
   width:60vw;
   font-size: 3vh;
   color: white;
   border-radius: 50px;
   cursor: pointer;
 }

 .donate-button {
   height: 10vh;
   background-color: #e90000;
 }

 .volunteer-button {
   min-height: 10vh; 
   background-color: #044696;
 }

 .volunteer-button:focus, .donate-button:focus {
   outline: 0;
 }


</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'volunteer',
  components: {
    HelloWorld
  }
}
</script>