<template>
  <div class="issues">

      <div id="issues" class="quote"><h2>"Change in our community needs to happen <em>with</em> us, not to us." - Jeanette Taylor</h2></div>

      <div class="flex-container-2">
        <div class="flex-item flex-item-3">
          <div class="issues-text-box">
            <h2>I will fight so that working-class black and brown families can remain in Chicago: the city we built.</h2>
          </div>
         </div>
        <div class="flex-item flex-item-4"></div>
    </div>

    <div class="issues-icons">

      
        <div class="icon icon-1">
          <font-awesome-icon icon="graduation-cap" style="font-size: 7em;"/>
          <h2>Quality Public Schools</h2>
          <ul>
            <li>Fully fund all public schools</li>
            <li>Establish an elected representative school board for Chicago</li>
            <li>Stop charter expansion</li>
            <li>Provide tuition-free City College education for all</li>
          </ul>
        </div>

        <div class="icon icon-2">
          <font-awesome-icon icon="home" style="font-size: 7em;"/>
          <h2>Affordable Housing</h2>
        <ul>
            <li>Mandate affordable housing near the Obama Presidential Center with a CBA Ordinance</li>
            <li>Preserve & expand public housing</li>
            <li>Lift the Ban & pass rent control in Chicago</li>
            <li>Support homeownership with programs like Renew Woodlawn</li>
            <li>Protect tenants with just cause for eviction & proactive rental inspection</li>
          </ul>
        </div>

        <div class="icon icon-3">
          <font-awesome-icon icon="hand-holding-usd" style="font-size: 7em;"/>
          <h2>Economic Justice</h2>
        <ul>
            <li>Bring jobs that pay a living wage to the ward</li>
            <li>Direct TIF funds to public needs</li>
            <li>Tax the rich -- Stop burdening ward residents with tickets and fines</li>
            <li>Protect worker pensions</li>
          </ul>
        </div>
   

     
        <div class="icon icon-4">
          <font-awesome-icon icon="city" style="font-size: 7em;"/>
          <h2>Community Safety</h2>
        <ul>
            <li>Establish a civilian police accountability council</li>
            <li>Oppose spending $95 million to build a new police academy</li>
            <li>Reopen mental health clinics</li>
          </ul>
        </div>

        <div class="icon icon-5">
          <font-awesome-icon icon="users" style="font-size: 7em;"/>
          <h2>Empower Youth & Elders</h2>
        <ul>
            <li>Fund summer job programs for youth</li>
            <li>Connect youth with mentorship, academic, & vocational resources</li>
            <li>Create senior building advisory committee to advocate for residents</li>
            <li>Open a senior activity center for socializing & organizing</li>
          </ul>
        </div>

  
        <div class="icon icon-6">
          <font-awesome-icon icon="balance-scale" style="font-size: 7em;"/>
          <h2>Immigration Justice</h2>
        <ul>
            <li>Close loopholes in the Welcoming City ordinance</li>
            <li>Provide sanctuary at all schools & public buildings in the ward</li>
            <li>Abolish the Chicago Police Department gang database</li>
          </ul>
        </div>

        <div class="icon icon-7">
          <font-awesome-icon icon="globe-americas" style="font-size: 7em;"/>
          <h2>Environmental Leadership</h2>
        <ul>
            <li>Make water affordable for all Chicagoans</li>
            <li>Replace lead pipes throughout the ward and city</li>
            <li>Expand public transit</li>
          </ul>
        </div>
    </div>

  </div>
</template>

<style>

.quote {
    text-align: center;
  }

  .flex-container-2 {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap-reverse;
  }

  .flex-item-3 {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #044696;
    flex-grow: 4;
  }

  .flex-item-4 {
    height: 50vh;
    min-width: 300px;
    min-height: 300px;
    background-image: url('../../src/assets/images/JTaylorKid.jpg');
    background-size: cover;
    flex-grow: 3;
  }

  .issues-text-box {
    max-width: 40vw;
    min-height: 30vh;
    color: white;
    border-radius: 25px;
    display: flex;
    align-items: center;
    padding-left: 5%;
    text-align: center;
  }

  .issues-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* flex-basis: 2; */
  }

  .icon {
    max-width: 25vw;
    min-width: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
  }

  font-awesome-icon {
    width: 25vw !important;
  }

  @media only screen and (max-width: 690px) {
  .issues-text-box {
    max-width: 100vw;
    border-radius: 0px;
    min-height: 0vh;
    font-size: 1.5em;
    text-align: center;
    padding-right: 5%;
  }
}

</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'issues',
  components: {
    HelloWorld
  }
}
</script>