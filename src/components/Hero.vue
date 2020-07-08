<template>
  <v-carousel cycle continuous progress>
    <v-carousel-item 
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      transition="slide-x-transition"
      align="center"
      justify="center"
    > 
    <div
          
          class="fill-height d-flex flex-column justify-start ml-8">
          <v-btn class="mt-auto">Slide</v-btn>
    </div>
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
