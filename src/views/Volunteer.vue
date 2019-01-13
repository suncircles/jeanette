<template>
  <div class="volunteer">

      <div class="get-involved-text-1">

        <p>Jeanette Taylor knows what it’s like to have the odds stacked against her.</p>
        
         <p>She's running a people-powered campaign for the dignity and respect our community deserves. Every volunteer matters! Sign up today to knock doors, make calls, or organize a house party:</p>

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

      <div class="get-involved-text-2">
        <p>For upcoming panels, parties, and other community events, visit our <a href="https://www.facebook.com/Taylorfor20/">Facebook page.
        </a></p>
      </div>

  </div>
</template>

<style>

.volunteer {
   display: flex;
   flex-direction: column;
   align-items: center;
 }

 .get-involved-text-1, .get-involved-text-2 {
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
   margin-bottom: 10%;
   margin-top: 5%
 }

 .volunteer-button {
   min-height: 15vh; 
   background-color: #044696;
   margin-top: 10%;
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