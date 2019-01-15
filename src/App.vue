<template>

  <div id="app">
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a class="navbar-brand" href="#">
            <router-link to="/"><img src="./assets/images/logo.png" class="logo" alt="Jeanette 20th Ward" width="131px" height="72px"></router-link>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <router-link to="/meet" class="dropdown-item" >Meet</router-link>
                <router-link to="/issues" class="dropdown-item">Issues</router-link>
                <router-link to="/leadership" class="dropdown-item">Unmatched Leadership</router-link>
                <router-link to="/endorsements" class="dropdown-item">Endorsements</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Get Involved
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
               <router-link to="/volunteer" class="dropdown-item">Volunteer</router-link>
                   <router-link to="/donate" class="dropdown-item">Donate</router-link>
            </div>
          </li>
         

          <li class="nav-item">
            <router-link to="/voting" class="nav-link">Voting Information</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/donate" class="nav-link">Donate</router-link>
          </li>
            
          <li class="nav-item socmedia">
              &nbsp;<a href="https://www.facebook.com/Taylorfor20/" target="_blank" >
                  <font-awesome-icon :icon="['fab', 'facebook']" size="1x" />
              </a>&nbsp;&nbsp;&nbsp;
              <a href="https://twitter.com/J1Ramann" target="_blank">
                  <font-awesome-icon :icon="['fab', 'twitter']" size="1x" /> </a>
          </li>  

        </ul>
      </div>
    </nav>



      <router-view/>
  </div>
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.socmedia {
    padding-top: 9px;
}



</style>



<script>

export default {
  data: function() {
    return {

    };
  },
  mounted() {
  },
  created: function() {
    
  },
  methods: {},
  computed: {}
};
</script>