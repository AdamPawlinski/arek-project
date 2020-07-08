<template>
<v-app-bar app>
      <v-img src="../assets/LogoMakr.png" alt="Supra Finanse logo" max-height="50px" max-width="100px" :contain="true">
      </v-img>
      <v-menu :open-on-click="true">
         <template v-slot:activator="{ on, attrs }">
           <v-btn
            dark
            v-bind="attrs"
            v-on="on"
            :text="true"
            class="theme.themes.light.primary"
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
      <v-app-bar-nav-icon>
        |||
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