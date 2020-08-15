<template>
  <v-container fluid class="supra-hero__container">
    <v-carousel height="100%" cycle continuous progress hide-delimiter-background>
      <v-carousel-item 
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        transition="slide-x-transition"         
      >     
        <v-row
          class="flex-child"
          height="100%"
        >
          <v-col
            cols="12"
            md="6"
            height="100%"
            class="d-flex justify-center justify-lg-start align-center"
          >
            <v-sheet 
              height="100%"
              width="50%"
              class="d-flex transparent"      
            >
              <v-card    
                class="transparent ml-16"        
                max-height="30vh"
                max-width="50vw" 
                >
                <v-card-title class="text-h2 align-self-start text-left justify-start font-weight-medium">
                  {{item.title}}
                </v-card-title>
                <v-card-actions class="justify-start">
                    <v-btn class="black--text text-h5 rounded-0" large width="15vw" height="5vh" color="white" to="oferta">{{item.button}}</v-btn>
                </v-card-actions>
              </v-card>      
            </v-sheet>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
          <v-sheet
            height="100%"
            width="50%"
            class="d-flex justify-end align-end" 
            color="transparent"
          >
            <v-sheet-footer>
              <v-card-text>
                <v-btn
                  v-for="icon in icons"
                  :key="icon.social"
                  class="mx-4 white--text"
                  icon
                  :href="icon.href"
                  target="_blank"                  
                >
                  <v-icon size="32px">{{ icon.social }}</v-icon>
                </v-btn>
              </v-card-text>
            </v-sheet-footer>
          </v-sheet>
          </v-col>
        </v-row> 
      </v-carousel-item>
    </v-carousel >
     <div class="supra-hero__arrow">
      <v-icon large class="white--text">mdi-arrow-down </v-icon>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "Hero", 
  data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            title: `Porozmawiajmy \n o potrzebach \n finansowych`,
            button: 'Spotkajmy się'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            title: 'Kredyt hipoteczny',
            button: 'Sprawdź'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            title: 'Leasing',
            button: 'Przekonaj się'
          },
        ],
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
            href: '/'
          },
        ]
      }
    }, 
}
</script>
