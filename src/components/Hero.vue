<template>
  <v-container fill-height fluid class="supra-hero__container">
    <v-carousel height="100%" cycle continuous progress hide-delimiter-background>
      <v-carousel-item 
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        transition="slide-x-transition"
        class="supra-hero__item"         
      >     
        <v-sheet 
          height="100%"
          class="d-flex transparent align-center"      
        >
          <v-card    
            class="transparent ml-16"        
            max-height="30vh"
            max-width="50vw" 
            elevation="0"
            >
            <v-card-title class="text-h2 align-self-start text-left justify-start font-weight-medium">
              {{item.title}}
            </v-card-title>
            <v-card-actions class="justify-start">
                <v-btn class="black--text text-h5 rounded-0" outlined large width="15vw" height="5vh" color="white" to="kontakt">{{item.button}}</v-btn>
            </v-card-actions>
          </v-card>      
        </v-sheet>
      </v-carousel-item>
    </v-carousel >
     <div class="supra-hero__arrow">
      <v-icon large class="white--text">mdi-arrow-down </v-icon>
    </div>
  </v-container>
</template>
<script>
import heroImage from '../assets/arek-hero.png'
export default {
  name: "Hero", 
  data () {
      return {
        items: [
          {
            src: heroImage,
            title: `Porozmawiajmy \n o Twoich potrzebach \n finansowych`,
            button: 'Spotkajmy się'
          },
          // {
          //   src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          //   title: 'Kredyt hipoteczny',
          //   button: 'Sprawdź'
          // },
          // {
          //   src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          //   title: 'Leasing',
          //   button: 'Przekonaj się'
          // },
        ],
      }
    }, 
    mounted: {
      reveal() {

      }
    }
}
</script>
