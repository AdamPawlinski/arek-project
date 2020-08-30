<template>
  <div>
    <v-container class="supra-about-me d-flex flex-column align-center justify-center mt-10">
      <div>
          <v-subheader class="text-h2 my-10">O mnie</v-subheader>
        </div>
        <v-card class="d-flex flex-column align-center pa-10">
          <v-card-text class="text-left">
            <p>
              Specjalizuję się w dostarczaniu usług finansowych dla przedsiębiorstw oraz klientów indywidualnych. Moją misją jest dostarczanie właściwych usług klientom oraz wspieranie ich w często trudnych decyzjach dotyczących finansów firmy oraz budżetu domowego. Służę przy tym wiedzą zgromadzoną w trakcie ponad 16-letniej kariery w branży, którą realizowałem na stanowiskach kierowniczych w takich instytucjach jak Nest Bank, Plus Bank, Raiffeisen Bank czy Polbank. Znajomość funkcjonowania banków pomaga mi obecnie skuteczniej działać dla dobra moich klientów. 
            </p>
            <p>
              Działając wiele lat w dziedzinie finansów, wiem jak ważne jest zaufanie oraz dobry kontakt współpracujących ze sobą stron. Dlatego staram się najpierw dobrze poznać potrzeby moich klientów i profesjonalnie doradzić odpowiednie rozwiązanie.  
            </p>
          </v-card-text>
          <v-img  class="rounded-circle" width="200px" height="200px" src="../assets/arkadiusz_sztaba_2.png" alt="Arkadiusz"></v-img>        
        </v-card>
    </v-container>
    <!-- <v-container class="supra-contact__data d-flex flex-column align-center justify-center my-10">
      <div>
        <v-subheader class="text-h2 my-10">Doświadczenie</v-subheader>
      </div>
       <v-timeline
      :align-top="alignTop"
      :dense="dense"
      :reverse="reverse"
    >
      <v-timeline-item
        class="supra-about-me__timeline-item"
        v-for="item in experience"
        color="blue darken-2"
        :key="item.year"
        :fill-dot="fillDot"
        :hide-dot="hideDot"
        :icon="icon ? 'mdi-star' : ''"
        :icon-color=" iconColor ? 'deep-orange' : ''"
        :left="left"
        :right="right"
        :small="small"
      >
        <template v-slot:icon>
          <v-avatar v-if="avatar">
            <img src="http://i.pravatar.cc/64">
          </v-avatar>
        </template>
        <v-card class="elevation-2 d-flex flex-column align-center">
          <v-card-title class="headline">{{item.year}}</v-card-title>
          <v-card-text>
            {{item.description}}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    </v-container>     -->
  </div>
</template>
<script>
export default {
  name: "AboutMe", 
   data: () => ({
      experience: [
        {
          year: 2017,
          description: "Dyrektor Oddziału Nest Bank" 
        },
        {
          year: 2015,
          description: "Dyrektor Oddziału Raiffeisen Bank" 
        },
        {
          year: 2012,
          description: "Dyrektor Oddziału Polbank" 
        }
      ]
    }),
  }
</script>