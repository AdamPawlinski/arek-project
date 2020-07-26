<template>
<nav>
  <v-app-bar app class="blue darken-2" > 
      <router-link to="/">
        <v-img  src="../assets/LogoMakr.png" alt="Supra Finanse logo" max-height="50px" max-width="100px" contain />
      </router-link>
      <v-toolbar-title> 
        <router-link to="/"> 
          <div class="supra-header__title white--text"> 
            Supra Finanse
          </div>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
          <v-btn
            dark
            v-bind="attrs"
            v-on="on"
            :text="true"
            to="omnie"
          >
            O mnie
          </v-btn>
          <v-btn
            dark
            v-bind="attrs"
            v-on="on"
            :text="true"
            to="oferta"
          >
            Oferta
          </v-btn>
          
          <!-- <HeaderMenuOffer /> -->
          <v-btn
            dark
            v-bind="attrs"
            v-on="on"
            :text="true"
            to="kontakt"
          >
            Kontakt
          </v-btn>
      <v-app-bar-nav-icon class="d-lg-none">
      </v-app-bar-nav-icon>   
  </v-app-bar> 
</nav> 
</template>
<script>
  // import HeaderMenuOffer from "./HeaderMenuOffer"
  export default {
    name: 'Header',
    components: {
      // HeaderMenuOffer
    },
    props: {
      msg: String
    }
  }
</script>