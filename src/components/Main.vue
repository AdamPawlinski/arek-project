<template>
  <div>    
    <!-- Sizes your content based upon application components -->
    <v-main class="pt-0">
      <v-container fluid>        
        <Hero />          
      </v-container>
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="d-flex flex-column align-center">
        <v-row>
        <v-subheader class="text-h2 my-10">Finansowanie firm</v-subheader>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center" sm="12" lg="4">
            <v-card
              class="mx-10"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Analiza potrzeb</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Lorem ipsum</div>

                <div>Lorem ipsum dolor sit</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="orange"
                  text
                >
                  Share
                </v-btn>

                <v-btn
                  color="orange"
                  text
                >
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col class="d-flex justify-center" sm="12" lg="4">
            <v-card
              class="mx-10"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Przygotowanie dokumentacji</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Lorem ipsum</div>

                <div>Lorem ipsum dolor sit</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="orange"
                  text
                >
                  Share
                </v-btn>

                <v-btn
                  color="orange"
                  text
                >
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col class="d-flex justify-center" sm="12" lg="4">
            <v-card
              class="mx-10"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Przygotowanie dokumentacji</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Lorem ipsum</div>

                <div>Lorem ipsum dolor sit</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="orange"
                  text
                >
                  Share
                </v-btn>

                <v-btn
                  color="orange"
                  text
                >
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container  class="d-flex flex-column my-10 grey lighten-5" height="800">
        <v-subheader class="text-h2 my-10">Oferta</v-subheader>
        <v-tabs
         v-model="tab"
         class="blue darken-2"
        >
          <v-tab
            v-for="item in items"
          :key="item.tab"
          >
            {{item.tab}}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="item in items"
            :key="item.tab"
          >
            <v-card flat>
              <v-card-text class="text-left">{{ item.content }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
      <v-container class="d-flex flex-column grey lighten-5 my-10">
        <div>
          <v-subheader class="text-h2 my-10">O mnie</v-subheader>
        </div>
        <v-card :class="`elevation-${hover ? 10 : 0}`" class="d-flex flex-column align-center">
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat dui nisi. 
              Integer nisl dui, tincidunt sit amet lorem id, congue molestie nunc. Donec at ultricies diam. 
              Fusce nec venenatis orci. Nunc hendrerit orci risus, et egestas mi condimentum in. Nulla in pretium turpis. 
              Maecenas quis pulvinar sem. Duis mattis ac ipsum id scelerisque. Quisque euismod varius metus, vitae viverra lorem maximus in. 
              Proin vulputate turpis ac elit tempus laoreet. Proin sit amet ex non mi semper lobortis.
            </p>
          </v-card-text>
          <v-img  class="rounded-circle" max-width="150px" max-height="300px" src="https://media-exp1.licdn.com/dms/image/C4D03AQGZwYlO7jTCyQ/profile-displayphoto-shrink_200_200/0?e=1599696000&v=beta&t=SP2G6ap8vTOPz3tecrJkqt-Bihc0tEZKIFTZPII4w-0" alt="Arkadiusz"></v-img>        
        </v-card>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Hero from "./Hero"
export default {
  name: 'Main', 
  components: {
    Hero,
  }, 
  data () {
    return {
      tab: null,
      items: [
        { tab: 'Kredyt firmowy', content: 'Nam urna enim, dapibus at ornare eu, bibendum dignissim lacus. Sed faucibus ut velit vitae dictum. Cras iaculis lectus eget lacus posuere, vitae dignissim mi volutpat. Nulla ac pharetra dui, sollicitudin consequat risus. Suspendisse viverra quam vel tortor vulputate feugiat. Aenean blandit nisi sit amet fermentum aliquam. Sed feugiat nisi at auctor ornare.' },
        { tab: 'Inwestycje', content: 'Nam urna enim, dapibus at ornare eu, bibendum dignissim lacus. Sed faucibus ut velit vitae dictum. Cras iaculis lectus eget lacus posuere, vitae dignissim mi volutpat. Nulla ac pharetra dui, sollicitudin consequat risus. Suspendisse viverra quam vel tortor vulputate feugiat. Aenean blandit nisi sit amet fermentum aliquam. Sed feugiat nisi at auctor ornare.' },
        { tab: 'Kredyt hipoteczny', content: 'Nam urna enim, dapibus at ornare eu, bibendum dignissim lacus. Sed faucibus ut velit vitae dictum. Cras iaculis lectus eget lacus posuere, vitae dignissim mi volutpat. Nulla ac pharetra dui, sollicitudin consequat risus. Suspendisse viverra quam vel tortor vulputate feugiat. Aenean blandit nisi sit amet fermentum aliquam. Sed feugiat nisi at auctor ornare.' },          
      ],
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
