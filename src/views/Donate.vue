<template>
  <div class="donate">

    <div class="don-image"></div>
        <div class="don-flex-container">
          <div class="don-text-box-1">
            <p>Dyett Hunger Striker Jeanette B. Taylor knows firsthand what it’s like to be priced out of the neighborhood where you grew up. She’s spent her life taking on powerful interests and greedy developers. We can send her to City Hall to fight for us—but we need your support!</p>
          </div>

          <div class="donate-button-container">
            <a href="https://secure.actblue.com/donate/taylorfor20th" target="_blank">
            <button class="donate-button">Donate
            </button>
            </a>
         </div>
        
          <div class="don-text-box-2">
            <p>Jeanette refuses to take money from the real estate developers and lobbyists who profit from gentrification and displacement. Help her make up the difference: give $15, $25, or $50 today, and consider making it monthly for the next six months.</p>
          </div>
          </div>
         </div>
  </div>
</template>

<style>

  .don-image {
    height: 55vh;
    min-width: 500px;
    min-height: 300px;
    background-image: url("../../src/assets/images/JTaylor01.png");
    background-size: cover;
    background-position:center;
  }

  .don-flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .don-text-box-1, .don-text-box-2 {
    padding-top: 1.5%;
    /* text-align: center; */
    font-size: 1.4rem;
    max-width: 85vw;
  }

  .don-text-box-2 {
    padding-top: 3%;
  }

  .donate-button-container {
    padding-top: 1.5%;
  }

 .donate-button:focus {
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