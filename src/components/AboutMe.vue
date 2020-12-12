<template>
  <div>
    <v-container class="supra-about-me d-flex flex-column align-center justify-center mt-10">
      <div>
          <v-subheader class="text-h2 my-10">O mnie</v-subheader>
      </div>
      <v-card class="d-flex flex-column align-center pa-10" elevation="0">
        <v-card-text class="text-left text-h5">
          <p>
            Specjalizuję się w dostarczaniu usług finansowych dla przedsiębiorstw oraz klientów indywidualnych. Moją misją jest dostarczanie właściwych usług klientom oraz wspieranie ich w często trudnych decyzjach dotyczących finansów firmy oraz budżetu domowego. Służę przy tym wiedzą zgromadzoną w trakcie prawie 20-letniej kariery. Znajomość funkcjonowania banków pomaga mi obecnie skuteczniej działać dla dobra moich klientów. 
          </p>
          <p>
            Działając wiele lat w dziedzinie finansów, wiem jak ważne jest zaufanie oraz dobry kontakt współpracujących ze sobą stron. Dlatego staram się najpierw dobrze poznać potrzeby moich klientów i profesjonalnie doradzić odpowiednie rozwiązanie.  
          </p>
        </v-card-text>
      </v-card>
      <v-row>
          <v-col cols="12" md="4"
            data-aos="fade-up"
            data-aos-offset="200"
            :data-aos-delay="i * 50"
          >
             <v-hover v-slot:default="{ hover }">
              <v-card height="100%" class="supra-main__card pa-5 mx-10 mx-md-0" hover :color="hover ? 'rgba(46, 48, 71, 0.8)' : 'white'" :class="hover ? 'white--text' : 'black--text' ">
                <div class="supra-main__bullet mt-4"></div>
                  <div class="supra-main__card-content d-flex flex-column justify-space-between ml-6 mt-n11">
                    <v-card-title class="supra-main__card-title text-left">Kompleksowa obsługa</v-card-title>
                    <v-card-text>
                      <p class="text-left">
                        Zapewniam pełną obsługę od ustalenia potrzeb, poprzez dobór właściwych produktów i wyjaśnienie zawiłości prawno-finansowych aż po podpisanie dokumentacji i wdrożenie produktu.
                      </p>
                    </v-card-text>
                    <v-card-actions class="supra-main__card-button">
                      <v-btn text to="/kontakt" :color="hover ? '#3bbb9a' : 'black--text'">Dowiedz się więcej</v-btn>
                    </v-card-actions> 
                  </div>              
              </v-card>
             </v-hover>
          </v-col>
          <v-col cols="12" md="4"
            data-aos="fade-up"
            data-aos-offset="200"
            :data-aos-delay="i * 50"
          >
             <v-hover v-slot:default="{ hover }">
              <v-card height="100%" class="supra-main__card pa-5 mx-10 mx-md-0" hover :color="hover ? 'rgba(46, 48, 71, 0.8)' : 'white'" :class="hover ? 'white--text' : 'black--text' ">
                <div class="supra-main__bullet mt-4"></div>
                  <div class="supra-main__card-content d-flex flex-column justify-space-between ml-6 mt-n11">
                    <v-card-title class="supra-main__card-title text-left">Indywidualne podejście</v-card-title>
                    <v-card-text>
                      <p class="text-left">
                        Do każdego klienta i jego potrzeb podchodzę indywidualnie i dobieram właściwe rozwiązania. Współpraca ze mną to gwarancja dobrego rozwiązania dla firm i klientów indywidualnych.
                      </p>
                    </v-card-text>
                    <v-card-actions class="supra-main__card-button">
                      <v-btn text to="/kontakt" :color="hover ? '#3bbb9a' : 'black--text'">Dowiedz się więcej</v-btn>
                    </v-card-actions> 
                  </div>              
              </v-card>
             </v-hover>
          </v-col>
          <v-col cols="12" md="4"
            data-aos="fade-up"
            data-aos-offset="200"
            :data-aos-delay="i * 50"
          >
             <v-hover v-slot:default="{ hover }">
              <v-card height="100%" class="supra-main__card pa-5 mx-10 mx-md-0" hover :color="hover ? 'rgba(46, 48, 71, 0.8)' : 'white'" :class="hover ? 'white--text' : 'black--text' ">
                <div class="supra-main__bullet mt-4"></div>
                  <div class="supra-main__card-content d-flex flex-column justify-space-between ml-6 mt-n11">
                    <v-card-title class="supra-main__card-title text-left">Pełna wiarygodność</v-card-title>
                    <v-card-text>
                      <p class="text-left">
                        Nawiązałem współpracę z wieloma instytucjami finansowymi, uzyskując pełną wiarygodność jako pośrednik finansowy. Na co dzień współpracuje z wieloma klientami w zakresie kredytów firmowych i konsumpcyjnych oraz ubezpieczeń i leasingów.                         
                      </p>
                    </v-card-text>
                    <v-card-actions class="supra-main__card-button">
                      <v-btn text to="/kontakt" :color="hover ? '#3bbb9a' : 'black--text'">Dowiedz się więcej</v-btn>
                    </v-card-actions> 
                  </div>              
              </v-card>
             </v-hover>
          </v-col>
        </v-row>
        <v-row>
           <v-img  class="rounded-circle ma-10" width="200px" height="200px" src="../assets//Arkadiusz_Sztaba_Supra_Finanse.png" alt="Arkadiusz"></v-img>
        </v-row>
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
  //  data: () => ({
  //     experience: [
  //       {
  //         year: 2017,
  //         description: "Dyrektor Oddziału Nest Bank" 
  //       },
  //       {
  //         year: 2015,
  //         description: "Dyrektor Oddziału Raiffeisen Bank" 
  //       },
  //       {
  //         year: 2012,
  //         description: "Dyrektor Oddziału Polbank" 
  //       }
  //     ]
  //   }),
  }
</script>