<template>
  <v-container fill-height class="supra-error d-flex flex-column align-center justify-center my-10">
    <v-card 
      class="d-flex flex-column justify-center align-center pa-12"
    >
      <v-card-title class="black--text text-h2 my-10">
        Przepraszamy, podana strona nie została znaleziona
      </v-card-title>
      <v-card-actions>
        <v-btn class="black--text text-h5 rounded-0 my-10" large width="25vw" height="5vh" color="white" to="/">
          Powrót do strony głównej
        </v-btn>
      </v-card-actions>  
    </v-card>
  </v-container>  
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