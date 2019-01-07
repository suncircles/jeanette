<template>
  <div class="home">

    <div class="flex-container">
      <div class="flex-item flex-item-1"></div>
      <div class="flex-item flex-item-2">
        <div class="hero-text-box">
          <h1>Help elect a community organizer and Dyett hunger striker!</h1>
        </div>
      </div>
    </div>

     <div class="video"><iframe width="100%" height="500" src="https://www.youtube.com/embed/kAH4sOvev-M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

     <div class="quote-1"><h2>"Change in our community needs to happen <em>with</em> us, not to us." - Jeanette Taylor</h2></div>

      <div class="flex-container-2">
        <div class="flex-item flex-item-3">
          <div class="issues-text-box">
            <p>I will fight so that working-class black and brown families can remain in Chicago: the city we built.</p>
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

    

    <div class="phone-bank">
      <div class="phone-text"><h2>We canvas Saturdays from 9:30–3:30 p.m. and Sundays from 2–5 p.m.</h2></div>

      <div class="phone-button"><button><h1>Door-knock or phonebank for Jeanette</h1></button></div>

      <div class="phone-text"><h2>For upcoming panels, parties, and other community events, visit our Facebook page.</h2></div>
    </div>

    <div class="donate"></div>

    <div class="endorsements"></div>
   
  </div>
</template>

<style>

  body, html {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  .home {
    display: flex;
    flex-direction: column;
  }

  /* HERO IMAGE */

  .flex-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-color: #ede8e8;
  }

  .flex-item-1 {
    height: 60vh;
    min-width: 280px;
    min-height: 400px;
    background-image: url('../../src/assets/images/hero-image.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    flex-grow: 2;
  }

  .flex-item-2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
  }

  .hero-text-box {
    max-width: 40vw;
    min-height: 30vh;
    background-color: #044696;
    color: white;
    border-radius: 25px;
    display: flex;
    align-items: center;
  }

  .hero-text-box h1 {
    padding: 10px;
    text-align: center;
  }

  /* ISSUES */

  .quote-1 {
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
    background-image: url('../../src/assets/images/meet.png');
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
    font-size: 2em;
  }

  /* ICONS */

  .issues-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* flex-basis: 2; */
  }

  .icon {
    max-width: 25vw;
    min-width: 350px;
    /* border: 10px solid mistyrose; */
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
  }

  font-awesome-icon {
    width: 25vw !important;
  }

  /* VIDEO */

  .video {
    display: flex;
    justify-content: center;
    background-color: hsl(0, 0%, 81%);
  }

  .phone-bank {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .phone-button button {
    height: 15vh;
    width: 60vw;
    background-color: #044696;
    color: white;
    border-radius: 50px;
    cursor: pointer;
  }

  .phone-button button:focus {
    outline: 0;
    }

  iframe {
    /* max-width: 90vw; */
    padding: 5%;
  }

  @media only screen and (max-width: 690px) {
  .hero-text-box, .issues-text-box {
    max-width: 100vw;
    border-radius: 0px;
    min-height: 0vh;
  }
  .hero-text-box h1 {
    font-size: 1.5em;
  }
  .issues-text-box {
    font-size: 1.5em;
  }
  .flex-item-1 {
    height: 50vh;
    min-height: 200px;
  }
  iframe {
    max-width: 100vw;
    max-height: 40vh;
    padding: 0;
  }
}

</style>




<script>
export default {
  data: function() {
    return {
    };
  },
  created: function() {
    
  },
  methods: {},
  computed: {}
};
</script>
