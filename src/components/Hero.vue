<template>
  <v-carousel cycle continuous progress >
    <v-carousel-item 
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      transition="slide-x-transition"   
    > 
    <v-sheet 
      height="100%"
      width="100%"
      class="transparent justify-start align-center"
    >
      <v-card 
        hover    
        class="transparent justify-start ml-16 mt-16"        
        max-height="30%"
        max-width="25%" 
        >
        <v-card-title>
          Finanse
        </v-card-title>
        <v-card-subtitle class="align-self-start">
          Lorem ipsum
        </v-card-subtitle>
        <v-card-actions>
            <v-btn large outlined class="primary">Slide</v-btn>
        </v-card-actions>
      </v-card>
    </v-sheet>
    </v-carousel-item>
  </v-carousel >
</template>
<script>
export default {
  name: "Hero", 
  data () {
      return {
        items: [
          {
            src: '../assets/pobrane.jpeg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    }, 
}
</script>
