<template>
  <div class="donate">

    <div class="don-container">
        <div class="flex-item don-item-1">
          <div class="don-text-box">
            <p>Dyett Hunger Striker Jeanette B. Taylor knows firsthand what it’s like to be priced out of the neighborhood where you grew up. She’s spent her life taking on powerful interests and greedy developers. We can send her to City Hall to fight for us—but we need your support!</p>

            <div>
        <a href="https://secure.actblue.com/donate/taylorfor20th" target="_blank">
        <button class="btn donate-button">Donate
        </button>
        </a>
      </div>
        
            <p>Jeanette refuses to take money from the real estate developers and lobbyists who profit from gentrification and displacement. Help her make up the difference: give $15, $25, or $50 today, and consider making it monthly for the next six months.</p>
          </div>
         </div>
        <div class="flex-item don-item-2"></div>
    </div>

  </div>
</template>

<style>

  .don-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap-reverse;
  }

  .don-item-2 {
    height: 55vh;
    min-width: 500px;
    min-height: 300px;
    background-image: url("../../src/assets/images/JTaylor01.png");
    background-size: cover;
    background-position:center;
    flex-grow: 3;
  }

  .don-text-box {
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

 .don-text-1 {
   max-width: 80vw;
   font-size: 1.5rem;
   text-align: center;
 }

 .don-page-button {
   width:60vw;
   font-size: 3vh;
   color: white;
   border-radius: 50px;
   cursor: pointer;
   height: 15vh;
   background-color: #e90000;
   margin-bottom: 5%;
   margin-top: 5%
 }

 .don-page-button:focus {
   outline: 0;
 }


</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'donate',
  components: {
    HelloWorld
  }
}
</script>