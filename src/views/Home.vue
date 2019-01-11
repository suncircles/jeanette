<template>
  <div class="home">

    <!-- <a href="#bio" v-smooth-scroll="{ duration: 1000 }">Bio</a> -->

    <div class="flex-container">
      <div class="flex-item flex-item-1"></div>
      <div class="flex-item flex-item-2">
        <div class="hero-text-box">
          <h1>Help elect a community organizer and Dyett hunger striker!</h1>
        </div>
      </div>
    </div>

     <div class="video"><iframe width="100%" height="600" src="https://www.youtube.com/embed/kAH4sOvev-M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

     <div class="quote"><h2>"Change in our community needs to happen <em>with</em> us, not to us." - Jeanette Taylor</h2></div>

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

    <div id="bio" class="quote"><h2>Jeanette M. Taylor's record of fighting for our community is <em>unmatched</em>. Her track record of sacrifice is based on her belief that change should happen “with us, not to us.”</h2></div>

    <div class="flex-container-3">
        <div class="flex-item-5">
         </div>
        <div class="flex-item-6">
          <div class="bio-text-box">
            <ul>
              <li>Led the 34-day hunger strike that forced Rahm Emanuel to keep Dyett High School open</li></br>
              <li>Took on U of C administrators, standing with the youth organizers to win a new adult trauma center for the south side</li></br>
              <li>Fighting to bring a Community Benefits Agreement Ordinance to stop displacement from the area around the Obama Center—so that working  families can find housing they can afford and get jobs in our community.</li>
            </ul>
            <p>Jeanette is the <strong>only</strong> candidate with a track record of taking on Rahm Emanuel and winning. As alderman, she will stand up to greedy developers and special interests and fight every day for the dignity and respect that we deserve.</p>
          </div>
        </div>
    </div>

    <div class="get-involved">
      <div class="get-involved-text-1"><p>We canvas Saturdays from 9:30 a.m.–3:30 p.m. and Sundays from 2–5 p.m.</p></div>

      <div><button class="phone-button"><p>Door-knock or phonebank for Jeanette</p></button></div><br/>

      <div><a href="https://secure.actblue.com/donate/taylorfor20th" target="_blank"><button class="donate-button">Donate</button></a></div>

      <div class="get-involved-text-2"><p>For upcoming panels, parties, and other community events, visit our <a href="https://www.facebook.com/Taylorfor20/">Facebook page.</a></p></div>
    </div>

    <div class="endorsement-text">Endorsed by:</div>
    <div class="endorsements">
      <div class="endorsement ctu"></div>
      <div class="endorsement seiu"></div>
      <div class="endorsement uwf"></div>
      <div class="endorsement cfl"></div>
      <div class="endorsement rc"></div>
    </div>
   
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
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
  }

  font-awesome-icon {
    width: 25vw !important;
  }

  /* BIO */

  .flex-container-3 {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .flex-item-5 {
    height: 50vh;
    min-width: 300px;
    background-image: url('../../src/assets/images/bio2.png');
    background-size: cover;
    background-position: center;
    flex-grow: 1;
  }

  .flex-item-6 {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #044696;
    max-height: 50vh;
    flex-grow: 1;
    padding-right: 2%;
  }

  .bio-text-box {
    max-width: 650px;
    max-height: 50vh;
    color: white;
    padding: 1%;
    text-align: left;
    font-size: 2vh;
  }

  .bio-text-box p {
    padding: 1rem;
  }

  /* VIDEO */

  .video {
    display: flex;
    justify-content: center;
    background-color: hsl(0, 0%, 81%);
  }

  iframe {
    /* max-width: 90vw; */
    padding: 5%;
  }

 /* GET INVOLVED */

 .get-involved {
   display: flex;
   flex-direction: column;
   align-items: center;
 }

 .get-involved-text-1, .get-involved-text-2 {
   font-size: 2rem;
   text-align: center;
 }

 .phone-button, .donate-button {
   width: 100vw;
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

 /* ENDORSEMENTS */

 .endorsement-text {
   background-color: #044696;
   text-align: center;
   font-size: 2vh;
   color: white;
 }

 .endorsements {
   display:flex;
   background-color: #044696;
   flex-wrap: wrap;
   justify-content: space-around;
   padding: 2em;
 }

 .endorsement {
    min-width: 5vw;
    /* min-width: 350px; */
    padding: 5%;
 }

  .ctu {
    background-image: url('../../src/assets/images/ctu.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .seiu {
    background-image: url('../../src/assets/images/seiu.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .uwf {
    background-image: url('../../src/assets/images/uwf.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .cfl {
    background-image: url('../../src/assets/images/cfl.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .rc {
    background-image: url('../../src/assets/images/rc.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }





  @media only screen and (max-width: 690px) {
  .hero-text-box, .issues-text-box, .bio-text-box {
    max-width: 100vw;
    border-radius: 0px;
    min-height: 0vh;
  }
  .hero-text-box h1 {
    font-size: 1.5em;
  }
  .issues-text-box {
    font-size: 1.5em;
    text-align: center;
    padding-right: 5%;
  }
  .bio-text-box {
    font-size: 1.9vh;
  
  }
  .flex-item-1 {
    height: 50vh;
    min-height: 200px;
  }
  /* .flex-item-6 {
    padding-bottom: 5%;
  } */
  iframe {
    max-width: 100vw;
    max-height: 40vh;
    padding: 0;
  }
}

/* Other media query for bio-text-box, maybe:
padding-bottom: 5%; */

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
