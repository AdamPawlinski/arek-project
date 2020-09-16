<template>
<nav>  
  <v-app-bar app hide-on-scroll flat fluid color="rgba(46, 48, 71, 0.8)" class="supra-header"> 
      <router-link to="/">
        <v-img  src="../assets/LOGO.png" alt="Supra Finanse logo" max-height="50px" max-width="150px" contain />
      </router-link>
      <!-- <v-toolbar-title> 
        <router-link to="/"> 
          <div class="supra-header__title white--text"> 
            Supra Finanse
          </div>
        </router-link>
      </v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-btn
        v-for="(item, index) in items"
        :key="index"
        dark
        exact-active-class="supra-header__button--active"
        :text="true"
        :to="item.to"
        class="supra-header__button hidden-md-and-down"
      >
        {{ item.title }}
      </v-btn>
      <v-menu absolute rounded="0" attach=".supra-header" class="supra-header__mobile-menu">
         <!-- <v-app-bar-nav-icon class="d-lg-none d-xl-none" color="white"> -->
          <template v-slot:activator="{ on, attrs }">
            <v-app-bar-nav-icon class="hidden-lg-and-up">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"            
              >
                <v-icon color="white" >mdi-dots-vertical</v-icon>
              </v-btn>
            </v-app-bar-nav-icon> 
          </template>
        <!-- </v-app-bar-nav-icon>  -->
        <v-expand-transition>
        <v-list class="supra-header__mobile-menu-list">          
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item-content>
              <v-btn                
                exact-active-class="supra-header__button--active"
                dark
                :text="true"
                :to="item.to"
                class="supra-header__button  mr-16 hidden-lg-and-up"
              >
                {{ item.title }}
              </v-btn>            
            </v-list-item-content>
          </v-list-item>
        </v-list>
        </v-expand-transition>
      </v-menu>
      <v-btn
        v-for="icon in icons"
        :key="icon.social"
        class="mx-4 white--text hidden-md-and-down"
        icon
        :href="icon.href"
        target="_blank"                  
      >
        <v-icon size="24px">{{ icon.social }}</v-icon>
      </v-btn>        
  </v-app-bar> 
</nav> 
</template>
<script>
  export default {
    name: 'Header',
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
        ],
        items: [
          {
            title: "Strona Główna",
            to: "/",
          },
          {
            title: "O mnie",
            to: "omnie",
          },
          {
            title: "Oferta",
            to: "oferta",
          },
          {
            title: "Kontakt",
            to: "kontakt",
          }
        ]

      }
    }
  }
</script>