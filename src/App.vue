<template>
  <div id="app">
    <v-app>
      <v-alert
      v-model="alert"
      border="left"
      close-text="Close Alert"
      color="grey darken-3"      
      dismissible
      outlined
      transition="scale-transition"
      class="mt-16 mb-n16"
    >
      Używamy cookies w celu świadczenia usług i statystyk. Brak zmiany
      ustawień przeglądarki oznacza, że będą one umieszczane na Twoim
      urządzeniu. <v-btn href="https://www.kokoma.pl/jak-zmienic-ustawienia-cookies"> Możesz zmienić te ustawienia.</v-btn>
    </v-alert>
      <v-breadcrumbs 
        v-for="page in breadcrumbs"
        :key="page.text"
        class="mt-16"
      >
        <v-breadcrumbs-item>{{page.text}} </v-breadcrumbs-item>
      </v-breadcrumbs>
      <Header app/>
      <router-view>
        <Main />
      </router-view>
      <Footer app />
    </v-app>
  </div>
</template>
<script>
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
export default {
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: 'Main',
          disabled: true,
          href: 'breadcrumbs_dashboard',
        },
      ]
    }
  }
}
</script>
<style lang="scss">
@import "./assets/styles.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
