<template>
  <v-container fill-height fluid class="supra-hero__container">
    <v-carousel height="100vh" cycle continuous progress hide-delimiter-background :show-arrows="items.length > 1" :hide-delimiters="items.length === 1">
      <v-carousel-item 
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        transition="slide-x-transition"
        class="supra-hero__item"         
      >     
        <v-sheet 
          height="100%"
          class="d-flex transparent align-center justify-center justify-md-start"      
        >        
          <v-card    
            class="transparent ml-md-16"        
            max-height="30vh"
            max-width="100vw" 
            elevation="0"
            data-aos="flip-up"
            data-aos-delay="300"
            >
            <v-card-text class="text-h4 text-sm-h2 text-left text-center text-md-left font-weight-medium">
            Porozmawiajmy <br>
            o <span style="color:#3bbb9a;">Twoich</span><br> potrzebach 
            finansowych
            </v-card-text>
            <v-card-actions class="justify-center justify-md-start">
                <v-btn class="black--text text-h5 rounded-0 pa-5" outlined large color="white" to="kontakt">{{item.button}}</v-btn>
            </v-card-actions>
          </v-card>            
        </v-sheet>
      </v-carousel-item>
    </v-carousel >
     <div v-show="arrowDownVisible" class="supra-hero__arrow">
      <v-icon large class="white--text">mdi-arrow-down </v-icon>
    </div>
  </v-container>
</template>
<script>
import heroImage from '../assets/arkadiusz_sztaba_3.png'
export default {
  name: "Hero", 
  data () {
      return {
        items: [
          {
            src: heroImage,
            title: `Porozmawiajmy 
             o Twoich potrzebach 
             finansowych`,
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
        arrowDownVisible: false,
      }
    },
    methods: {
      scrollDownListener() {
        this.arrowDownVisible = window.scrollY < 200
      }
    },
    mounted() {
      this.submitted = false;
      window.addEventListener('scroll', this.scrollDownListener)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.scrollDownListener)
    }, 
}
</script>
