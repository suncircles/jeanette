<template>

  <div id="app">
<!--     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/meet">Meet Jeanette</router-link> | 
      <router-link to="/issues">Issues</router-link> | 
      <router-link to="/getinvolved">Get Involved</router-link>
    </div> -->

  <!-- <font-awesome-icon icon="bars" /> -->

    <nav class="navbar">
            <span class="navbar-toggle" id="js-navbar-toggle">
                  <!-- <i class="fas fa-bars"></i> -->
                  <font-awesome-icon icon="bars" />

            </span>
            <a href="#" class="logo">logo</a>
            <ul class="main-nav" id="js-menu">
                <li>
                    <router-link to="/" class="nav-links">Home</router-link>
                </li>
                <li>
                    <router-link to="/meet" class="nav-links">Meet Jeanette</router-link>
                </li>
                <li>
                    <router-link to="/issues" class="nav-links">Issues</router-link>
                </li>
                <li>
                    <router-link to="/getinvolved" class="nav-links">Get Involved</router-link>
                </li>
            </ul>
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
    /*background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf   100%);*/
    background-color: #ede8e8;
    /*border: 1px solid rgba(0, 0, 0, 0.2);*/
    padding-bottom: 10px;
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
    top: 10px;
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