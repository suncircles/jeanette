<template>
  <div class="volunteer">

      <div id="get-involved" class="get-involved">
      <div class="get-involved-text-1"><h2>We canvas Saturdays from 9:30 a.m.–3:30 p.m. and Sundays from 2–5 p.m.</h2></div>

      <div><button class="btn phone-button"><p>Door-knock or phonebank for Jeanette</p></button></div><br/>

      <div><a href="https://secure.actblue.com/donate/taylorfor20th" target="_blank"><button class="btn donate-button">Donate</button></a></div>

      <div class="get-involved-text-2"><h2>For upcoming panels, parties, and other community events, visit our <a href="https://www.facebook.com/Taylorfor20/">Facebook page.</a></h2></div>
    </div>

  </div>
</template>

<style>

.get-involved {
   display: flex;
   flex-direction: column;
   align-items: center;
 }

 .get-involved-text-1, .get-involved-text-2 {
   /* font-size: 2rem; */
   text-align: center;
 }

 .phone-button, .donate-button {
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

 .phone-button {
   min-height: 10vh; 
   background-color: #044696;
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