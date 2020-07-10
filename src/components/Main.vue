<template>
  <div>
    <v-system-bar> </v-system-bar>
    <Header/>
    <Hero/>
    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid class="d-flex flex-column">
        <v-subheader>Subheader</v-subheader>
      </v-container>
      <v-container fluid class="d-flex flex-column grey lighten-5">
        <v-subheader>Subheader</v-subheader>
        <v-tabs
         v-model="tab"
         dark
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
              <v-card-text>{{ item.content }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
      <v-container fluid class="d-flex">
        <div>
          <v-subheader>Subheader</v-subheader>
        </div>
        <div>
          <v-img max-width="150px" max-height="300px" src="https://media-exp1.licdn.com/dms/image/C4D03AQGZwYlO7jTCyQ/profile-displayphoto-shrink_200_200/0?e=1599696000&v=beta&t=SP2G6ap8vTOPz3tecrJkqt-Bihc0tEZKIFTZPII4w-0" alt="Arkadiusz"></v-img>
        </div>
      </v-container>
    </v-main>    
    <Footer app />
  </div>
</template>

<script>
import Header from "./Header.vue"
import Hero from "./Hero.vue"
import Footer from "./Footer"
export default {
  name: 'Main',
  components: {
    Header,
    Hero,
    Footer
  },
   data () {
      return {
        tab: null,
        items: [
          { tab: 'One', content: 'Tab 1 Content' },
          { tab: 'Two', content: 'Tab 2 Content' },
          { tab: 'Three', content: 'Tab 3 Content' },          
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
