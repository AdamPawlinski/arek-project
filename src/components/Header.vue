<template>
  <v-app-bar app class="blue darken-2"> 
      <v-toolbar-title>   
        <v-img src="../assets/LogoMakr.png" alt="Supra Finanse logo" max-height="50px" max-width="100px" :contain="true" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu :open-on-click="true" class="d-none d-lg-block">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
            dark
            v-bind="attrs"
            v-on="on"
            :text="true"
          >
            O mnie
          </v-btn>
          <v-btn
            dark
            v-bind="attrs"
            v-on="on"
            :text="true"
          >
            Oferta
          </v-btn>
          <v-btn
            dark
            v-bind="attrs"
            v-on="on"
            :text="true"
          >
            Kontakt
          </v-btn>
        </template>
      </v-menu>
      <v-app-bar-nav-icon class="d-lg-none">
      </v-app-bar-nav-icon>   
  </v-app-bar>  
</template>
    <script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>