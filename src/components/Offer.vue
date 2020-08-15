<template>
  <div>
    <v-container class="supra-contact__data d-flex justify-center my-10" :width="$vuetify.breakpoint.mobile">
      <v-card
        class="d-flex flex-column justify-space-around align-center pa-12"
        width="50vw"
      >
        <v-card-text class="text--primary text-h5">
          <v-subheader class="pb-6 text-h3">Oferta</v-subheader>
          <p class="pb-6  text-left">Współpracuję z kilkunastoma bankami, towarzystwami ubezpieczeniowymi  i leasingowymi  w Polsce mających w swojej ofercie Kredyty obrotowe, ratalne, inwestycyjne, leasing samochodów, maszyn i urządzeń, faktoring, dla firm, 
            a także kredyty hipoteczne, gotówkowe i konsolidacyjne dla klientów indywidualnych, ubezpieczenia na życie, majątkowe, zdrowotne czy firmowe.</p>          
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="blue darken-2"
            outlined
            to="kontakt"
          >
            Skontaktuj się
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container class="supra-contact__data d-flex justify-center my-10">      
      <v-card
        class="d-flex flex-column justify-space-around align-center pa-12"
        width="50vw"
      >
        <v-card-subtitle class="pb-4 subtitle-1">Supra Finanse</v-card-subtitle>

        <v-card-text class="text--primary text-h5">
          <v-subheader class="text-h3">Kredyt hipoteczny</v-subheader>
          <p class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <v-expansion-panels focusable>
            <v-expansion-panel
              v-for="(item,i) in 4"
              :key="i"
            >
              <v-expansion-panel-header>Item</v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="blue darken-2"
            outlined
            to="kontakt"
          >
            Skontaktuj się
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container class="supra-contact__data d-flex justify-center my-10">
      <v-card
        class="d-flex flex-column justify-space-around align-center pa-12"
        width="50vw"
      >
        <v-card-subtitle class="pb-4 subtitle-1">Supra Finanse</v-card-subtitle>

        <v-card-text class="text--primary text-h5">
          <v-subheader class="text-h3">Kredyt konsolidacyjny</v-subheader>
          <p class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <v-expansion-panels focusable>
            <v-expansion-panel
              v-for="(item,i) in 4"
              :key="i"
            >
              <v-expansion-panel-header>Item</v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="blue darken-2"
            outlined
            to="kontakt"
          >
            Skontaktuj się
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container class="supra-contact__data d-flex justify-center my-10">
      <v-card
        class="d-flex flex-column justify-space-around align-center pa-12"
        width="50vw"
      >
        <v-card-subtitle class="pb-4 subtitle-1">Supra Finanse</v-card-subtitle>

        <v-card-text class="text--primary text-h5">
          <v-subheader class="text-h3">Kredyt obrotowy</v-subheader>
          <p class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <v-expansion-panels focusable>
            <v-expansion-panel
              v-for="(item,i) in 4"
              :key="i"
            >
              <v-expansion-panel-header>Item</v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="blue darken-2"
            outlined
            to="kontakt"
          >
            Skontaktuj się
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Offer", 
   data: () => ({
      
    }),
  }
</script>