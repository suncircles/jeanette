<template>

  <div id="app">
    <div class="navcontainer">
        <nav class="navbar">
                <span class="navbar-toggle" id="js-navbar-toggle">
                      <!-- <i class="fas fa-bars"></i> -->
                      <font-awesome-icon icon="bars" />

                </span>
                <!-- <a href="#" class="logo">logo</a> -->
                <img src="./assets/images/logo.png" class="logo" alt="Jeanette 20th Ward" width="131px" height="72px">

                <ul class="main-nav" id="js-menu">
                    
                    <li>
                        <a href="#home" v-smooth-scroll="{ duration: 1000 }" class="nav-links">Home</a>
                    </li>
                    <li>
                        <a href="#issues" v-smooth-scroll="{ duration: 1000, offset: -130 }" class="nav-links">Issues</a>
                    </li>
                    <li>
                        <a href="#bio" v-smooth-scroll="{ duration: 1000, offset: -150 }" class="nav-links">Meet Jeanette</a>
                    </li>
                    <li>
                        <a href="#get-involved" v-smooth-scroll="{ duration: 1000, offset: -120 }" class="nav-links">Get Involved</a>
                    </li>
                </ul>
        </nav>
        <div class="socmedia">
          <a href="https://www.facebook.com/Taylorfor20/" target="_blank" >
            <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
          </a>
          <a href="https://twitter.com/J1Ramann" target="_blank">
            <font-awesome-icon :icon="['fab', 'twitter']" size="2x" /> 
          </a>
        </div>
      </div>  

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
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* nav bar css below https://itnext.io/how-to-build-a-responsive-navbar-using-flexbox-and-javascript-eb0af24f19bf*/

{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body {
    font-family: 'Josefin Sans', sans-serif;
}
.navbar {
    font-size: 18px;
    padding-top: 10px;
    /* padding-bottom: 10px; */
}
.navcontainer {
    background-color: #ede8e8;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    width: 100vw;
    position: fixed;
    z-index: 200;
}

.socmedia {
    margin-left: 20px;
    padding-top: 10px;
    display: flex;
    justify-content: space-evenly;
    width: 100px;
}



.main-nav {
    list-style-type: none;
}
.nav-links,
.logo {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
}

.main-nav li {
    text-align: center;
    margin: 15px auto;
}
.logo {
    display: inline-block;
    font-size: 22px;
    margin-top: 10px;
    margin-left: 20px;
}

.navbar-toggle {
    position: absolute;
    top: 30px;
    right: 20px;
    cursor: pointer; 
    color: rgba(0,0,0,0.8);
    font-size: 24px;
}

.main-nav {
    list-style-type: none;
    display: none;
}

.active {
  display: block;
}

@media screen and (min-width: 768px) {
    .navbar {
        display: flex;
        justify-content: space-between;
        padding-bottom: 0;
        height: 70px;
        align-items: center;
    }
    .main-nav {
        display: flex;
        margin-right: 30px;
        flex-direction: row;
        justify-content: flex-end;
    }
    .main-nav li {
        margin: 0;
    }
    .nav-links {
        margin-left: 40px;
    }
    .logo {
        margin-top: 0;
    }
   .navbar-toggle {
       display: none;
    }
    .logo:hover,
    .nav-links:hover {
        color: rgba(255, 255, 255, 1);
    }
  }

/*end nav bar css*/

</style>



<script>

export default {
  data: function() {
    return {
    };
  },
  mounted() {
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {
        
        mainNav.classList.toggle('active');
    });
  },
  created: function() {
    
  },
  methods: {},
  computed: {}
};
</script>