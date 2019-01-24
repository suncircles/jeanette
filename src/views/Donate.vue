<template>
  <div class="donate">

     <div class="don-text-box-1">
            <p>Dyett Hunger Striker Jeanette B. Taylor knows firsthand what it’s like to be priced out of the neighborhood where you grew up. She’s spent her life taking on powerful interests and greedy developers. We can send her to City Hall to fight for us—but we need your support!</p>
          </div>

      <div class="don-flex-container">

        <div class="donate-button-container">
            <a href="https://secure.actblue.com/donate/taylorfor20th" target="_blank">
            <button class="donate-page-button">Donate
            </button>
            </a>
         </div>

        <div class="don-image"></div>

    </div>
        
          <div class="don-text-box-2">
            <p>Jeanette refuses to take money from the real estate developers and lobbyists who profit from gentrification and displacement. Help her make up the difference: give $15, $25, or $50 today, and consider making it monthly for the next six months.</p>
          </div>
  </div>
</template>

<style>

.donate-text {
    display: flex;
    height: 15vh;
    width: 100vw;
    background-color: #044696;
    color: white;
    font-size: 7vmin;
    justify-content: center;
    align-items: center;
 }

.don-flex-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;
  }

  .don-image {
    height: 55vh;
    flex: 1;
    min-width: 60%;
    background-image: url("../../src/assets/images/JTaylor01.png");
    background-size: cover;
    background-position: center;
    
  }

  .don-text-box-1, .don-text-box-2 {
    text-align: center;
    font-size: 1.4rem;
    padding: 1%;
  }



  .donate-button-container {
    min-width: 400px;
    flex: 1;
    height: 55vh;
    background-color:#044696;
    display: flex;
    justify-content: center;
    align-items: center;
  }

 .donate-page-button:focus {
   outline: 0;
 }

 .donate-page-button {
   background-color: #e90000;
   border: none;
   height: 15vh;
   width: 25vw;
   max-width: 490px;
   font-size: 3vh;
   color: white;
   border-radius: 50px;
   cursor: pointer;
 }

 @media only screen and (max-width: 999px) {
   .donate-button-container {
     height: 20vh;
     background-color:white;
   }
   .donate-page-button {
     width: 100vw;
     border-radius: 50px;
   }
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