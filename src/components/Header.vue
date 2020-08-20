<template>
<nav>  
  <v-app-bar app hide-on-scroll flat color="rgba(46, 48, 71, 0.8)" class="supra-nav__header" > 
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
            exact-active-class="supra-header__button--active"
            v-bind="attrs"
            v-on="on"
            :text="true"
            to="/"
            class="supra-header__button"
          >
            Strona Główna
          </v-btn>
          <v-btn
            dark
            exact-active-class="supra-header__button--active"
            v-bind="attrs"
            v-on="on"
            :text="true"
            to="omnie"
            class="supra-header__button"
          >
            O mnie
          </v-btn>
          <v-btn
            dark
            exact-active-class="supra-header__button--active"
            v-bind="attrs"
            v-on="on"
            :text="true"
            to="oferta"
            class="supra-header__button"
          >
            Oferta
          </v-btn>
          
          <!-- <HeaderMenuOffer /> -->
          <v-btn
            dark
            exact-active-class="supra-header__button--active"
            v-bind="attrs"
            v-on="on"
            :text="true"
            to="kontakt"
            class="supra-header__button  mr-16"
          >
            Kontakt
          </v-btn>
            <v-btn
              v-for="icon in icons"
              :key="icon.social"
              class="mx-4 white--text"
              icon
              :href="icon.href"
              target="_blank"                  
            >
              <v-icon size="24px">{{ icon.social }}</v-icon>
            </v-btn>
      <v-app-bar-nav-icon class="d-lg-none .d-xl-none">
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
    },
    data() {
      return {
        icons: [
          {
            social: 'mdi-linkedin',
            href: 'https://www.linkedin.com/in/arkadiusz-sztaba-6b70a5aa/'
          },
          {
            social: 'mdi-facebook',
            href: 'https://www.facebook.com/arkadiusz.sztaba.1'
          },
          {
            social: 'mdi-twitter',
            href: 'https://twitter.com/SztabaArek'
          },
        ]
      }
    }
  }
</script>