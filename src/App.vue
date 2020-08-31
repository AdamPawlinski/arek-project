<template>
  <div id="app">
    <v-app class="supra-app">      
      <!-- <v-breadcrumbs 
        :items="breadcrumbs"
        divider="-"
        class="mt-16"
      >
      </v-breadcrumbs> -->     
          
      <Header />
      <v-alert
        class="supra-alert rounded-0"
        dismissible
        colored-border
        type="info"
        elevation="2"
        value
        app
        transition="fade-transition"
      >
          Używamy cookies w celu świadczenia usług i statystyk. Brak zmiany
          ustawień przeglądarki oznacza, że będą one umieszczane na Twoim
          urządzeniu. <v-btn text href="https://www.kokoma.pl/jak-zmienic-ustawienia-cookies"> Możesz zmienić te ustawienia.</v-btn>
      </v-alert> 
      <router-view 
        class="supra-content"
      >         
          <Main />
      </router-view>
      <Footer />
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
      dialog: false
    }
  },
  computed: {
    breadcrumbs() {
      let pathArray = this.$route.path.split('/') 
       pathArray.shift()
      console.log(pathArray)
      let breadcrumbs = pathArray.map(
        (path, index, breadcrumbArray)  => {
          console.log(this.$route.matched[index], path)
          breadcrumbArray.push(
            this.$route.matched[index].meta.breadCrumb || path,
          );
          return breadcrumbArray
        }
      ) 
     return breadcrumbs
    }
  },
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
