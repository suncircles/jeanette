<template>
  <div class="vote">
    <div class="vote-text">
      <p>Election day is February 26th</p>
    </div>

  <div class="vote-button-container">
    <div class="polling-place-button">
      <a href="https://chicagoelections.com/en/your-voter-information.html" target="_blank"><button class="vote-btn">Find Your Polling Place</button></a>
    </div>

    <div class="early-voting-button">
      <a href="https://chicagoelections.com/en/early-voting.html" target="_blank"><button class="vote-btn">Early Voting</button></a>
    </div>

    <div class="mail-in-button">
      <a href="mailto: Robin@taylorfor20thward.org" target="_blank"><button class="vote-btn">Request a Mail-In Ballot</button></a>
    </div>
  </div>

  </div>
</template>

<style>

  .vote-text {
    border: 10px solid mistyrose;
    display: flex;
    height: 25vh;
    width: 100vw;
    background-color: #044696;
    color: white;
    font-size: 7vmin;
    justify-content: center;
    align-items: center;
  }

  .vote-button-container {
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .vote-btn {
    background-color: #e90000;
    color: white;
    width: 60vw;
    height: 10vh;
    border-radius: 25px;
    font-size: 4.5vmin;
    cursor: pointer;
  }

</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'vote',
  components: {
    HelloWorld
  }
}
</script>