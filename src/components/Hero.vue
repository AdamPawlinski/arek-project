<template>
  <v-carousel cycle continuous progress >
    <v-carousel-item 
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      height="80%"
      transition="slide-x-transition"   
    > 
    <v-sheet 
      height="100%"
      width="100%"
      class="d-flex transparent justify-start align-center"
    >
      <v-card 
        hover    
        class="transparent  ml-16"        
        max-height="30vh"
        max-width="25vw" 
        >
        <v-card-title class="text-h2">
          {{item.title}}
        </v-card-title>
        <v-card-subtitle class="align-self-start text-subtitle-2 text-left justify-start">
          {{item.subtitle}}
        </v-card-subtitle>
        <v-card-actions class="justify-center">
            <v-btn large outlined color="grey lighten-5">{{item.button}}</v-btn>
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
            title: 'Finanse',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat dui nisi. Integer nisl dui, tincidunt sit amet lorem id, congue molestie nunc. Donec at ultricies diam. '
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            title: 'Kredyty',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat dui nisi. Integer nisl dui, tincidunt sit amet lorem id, congue molestie nunc. Donec at ultricies diam. ',
            button: 'Oferta'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            title: 'Pożyczki',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat dui nisi. Integer nisl dui, tincidunt sit amet lorem id, congue molestie nunc. Donec at ultricies diam. ',
            button: 'Oferta'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            title: 'Lokaty',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat dui nisi. Integer nisl dui, tincidunt sit amet lorem id, congue molestie nunc. Donec at ultricies diam. ',
            button: 'Oferta'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            title: 'Inwestycje',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat dui nisi. Integer nisl dui, tincidunt sit amet lorem id, congue molestie nunc. Donec at ultricies diam. ',
            button: 'Oferta'
          },
        ],
      }
    }, 
}
</script>
