<template>
  <div class="volunteer">

    <div class="vol-container">
        <div class="flex-item vol-item-1">
          <div class="vol-text-box">
            <p>Jeanette Taylor knows what it’s like to have the odds stacked against her.</p>
        
            <p>She's running a people-powered campaign for the dignity and respect our community deserves. Every volunteer matters! Sign up today to knock doors, make calls, or organize a house party:</p>
          </div>
         </div>
        <div class="flex-item vol-item-2"></div>
    </div>

      <div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4KyQMDEucIh0xcgQU9Yg9xt-0JiKjoZiYagEsxdPYy6-F-g/viewform" target="_blank">
        <button class="btn volunteer-button">Volunteer
        </button>
        </a>
      </div>
      
      <br/>

      <div>
        <a href="https://secure.actblue.com/donate/taylorfor20th" target="_blank">
        <button class="btn donate-button">Donate
        </button>
        </a>
      </div>

      <div class="vol-text-2">
        <p>For upcoming panels, parties, and other community events, visit our <a href="https://www.facebook.com/Taylorfor20/">Facebook page.
        </a></p>
      </div>

  </div>
</template>

<style>

  .vol-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap-reverse;
  }

  .vol-item-2 {
    height: 55vh;
    min-width: 500px;
    min-height: 300px;
    background-image: url("../../src/assets/images/for_web/JTaylor07.jpg");
    background-size: cover;
    background-position:center;
    flex-grow: 3;
  }

  .vol-text-box {
    max-width: 80vw;
    min-height: 30vh;
    color: black;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 1.5rem;
  }

.volunteer {
   display: flex;
   flex-direction: column;
   align-items: center;
 }

 .vol-text-1, .vol-text-2 {
   max-width: 80vw;
   font-size: 1.5rem;
   text-align: center;
 }

 .volunteer-button, .donate-button {
   width:60vw;
   font-size: 3vh;
   color: white;
   border-radius: 50px;
   cursor: pointer;
 }

 .donate-button {
   height: 15vh;
   background-color: #e90000;
   margin-bottom: 5%;
   margin-top: 5%
 }

 .volunteer-button {
   min-height: 15vh; 
   background-color: #044696;
   margin-bottom: 5%;
 }

 .phone-button:focus, .donate-button:focus {
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