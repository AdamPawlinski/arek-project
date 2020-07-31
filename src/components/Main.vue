<template>
  <div>        
    <v-main class="pt-0">
      <v-container class="supra-main__hero fill-height" fluid>        
        <Hero />          
      </v-container>
      <v-container fluid class="supra-main__cards d-flex flex-column align-center px-0 my-10" >
        <v-row>
        <v-subheader class="text-h2 my-10">Jak działam</v-subheader>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center" sm="12" lg="4">
            <v-card
              class="d-flex flex-column justify-space-around align-center mx-10"
              max-width="20vw"              
            >
              <v-img
                class="white--text align-end"
                height="60%"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Analizuję potrzeby</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>Lorem ipsum</div>

                <div>Lorem ipsum dolor sit</div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="blue darken-2"
                  outlined
                  to="kontakt"
                >
                  Sprawdź
                </v-btn>                
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col class="d-flex justify-center" sm="12" lg="4">
            <v-card
              class="d-flex flex-column justify-space-around align-center mx-10"
              max-width="20vw"
            >
              <v-img
                class="white--text align-end"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Przygotowuję dokumentację</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Lorem ipsum</div>

                <div>Lorem ipsum dolor sit</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="blue darken-2"
                  outlined
                  to="kontakt"
                >
                  Sprawdź
                </v-btn>                
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col class="d-flex justify-center" sm="12" lg="4">
            <v-card
              class="d-flex flex-column justify-space-around align-center mx-10"
              max-width="20vw"
            >
              <v-img
                class="white--text align-end"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Negocjuję finansowanie</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Lorem ipsum</div>

                <div>Lorem ipsum dolor sit</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="blue darken-2"
                  outlined
                  to="kontakt"
                >
                  Sprawdź
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container  class="supra-main__tabs d-flex flex-column align-center my-10" >
        <v-subheader class="text-h2 my-10" >Oferuję</v-subheader>
        <v-tabs
         v-model="tab"
         centered         
         fixed-tabs
         class="blue darken-2"
        >
          <v-tab
            v-for="item in items"
            :key="item.tab"                       
          >
            {{item.tab}}
          </v-tab>
        </v-tabs>
        <v-tabs-items 
          v-model="tab"
          class="supra-main__tab"
        >
          <v-tab-item
            v-for="item in items"
            :key="item.tab"
          >
            <v-card class="pa-10">
              <v-card-text class="text-left">{{ item.content }}</v-card-text>
              <v-divider> </v-divider>
              <v-card-text class="text-left">{{ item.content }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
      <v-container class="supra-main__text-content d-flex flex-column align-center my-10">
        <div>
          <v-subheader class="text-h2 my-10">O mnie</v-subheader>
        </div>
        <v-card class="d-flex flex-column align-center pa-10">
          <v-img  class="rounded-circle" width="200px" height="200px" src="../assets/arkadiusz_sztaba_2.png" alt="Arkadiusz Sztaba"></v-img>
          <v-card-text>
            <p class="text-left">
              Nazywam się Arkadiusz Sztaba. Specjalizuję się w dostarczaniu usług finansowych dla przedsiębiorstw oraz klientów indywidualnych. 
              Moją misją jest dostarczanie właściwych usług klientom oraz wspieranie ich w często trudnych decyzjach dotyczących finansów firmy oraz budżetu domowego. 
              Służę przy tym wiedzą zgromadzoną w trakcie ponad 16-letniej kariery w branży, którą realizowałem na stanowiskach kierowniczych w takich instytucjach jak Nest Bank, Plus Bank, Raiffeisen Bank czy Polbank. 
              Znajomość funkcjonowania banków pomaga mi obecnie skuteczniej działać dla dobra moich klientów. 
            </p>
          </v-card-text>                  
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
        { tab: 'Kredyt obrotowy', content: 'Nam urna enim, dapibus at ornare eu, bibendum dignissim lacus. Sed faucibus ut velit vitae dictum. Cras iaculis lectus eget lacus posuere, vitae dignissim mi volutpat. Nulla ac pharetra dui, sollicitudin consequat risus. Suspendisse viverra quam vel tortor vulputate feugiat. Aenean blandit nisi sit amet fermentum aliquam. Sed feugiat nisi at auctor ornare. Nam urna enim, dapibus at ornare eu, bibendum dignissim lacus. Sed faucibus ut velit vitae dictum. Cras iaculis lectus eget lacus posuere, vitae dignissim mi volutpat. Nulla ac pharetra dui, sollicitudin consequat risus. Suspendisse viverra quam vel tortor vulputate feugiat. Aenean blandit nisi sit amet fermentum aliquam. Sed feugiat nisi at auctor ornare.' },
        { tab: 'Kredyt inwestycyjny', content: 'Nam urna enim, dapibus at ornare eu, bibendum dignissim lacus. Sed faucibus ut velit vitae dictum. Cras iaculis lectus eget lacus posuere, vitae dignissim mi volutpat. Nulla ac pharetra dui, sollicitudin consequat risus. Suspendisse viverra quam vel tortor vulputate feugiat. Aenean blandit nisi sit amet fermentum aliquam. Sed feugiat nisi at auctor ornare.' },
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
