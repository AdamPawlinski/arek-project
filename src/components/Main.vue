<template>
  <div>        
    <div class="supra-main py-0" id="main">
      <v-container fluid class="supra-main__hero fill-height" 
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
      >        
        <Hero />          
      </v-container>
      <v-container  fluid class="supra-main__cards d-flex flex-column align-center pa-10 pa-md-0 my-10" 
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
      >
        <v-row>
          <v-col class="d-flex flex-column align-center">
            <v-subheader class="text-h2 font-weight-medium my-10 my-md-5">Supra Finanse</v-subheader> 
            <v-subheader class="text-h4 font-weight-regular my-5">doradztwo finansowe</v-subheader> 
            <v-divider class="supra-main__divider mt-16"></v-divider>    
          </v-col>     
        </v-row>
        <v-row>
          <v-col class="text-left text-h5 mx-auto" cols="12" md="8">
            <p>Supra Finanse to firma doradztwa finansowego. Specjalizuje się w dostarczaniu kompleksowych usług finansowych dla przedsiębiorstw i klienta indywidualnego. </p> 
            <p>Niezależnie od tego, czego potrzebujesz, pomogę Ci, aby Twoje plany stały się rzeczywistością. </p>
            <p>Na rynku finansowym działam od kilkunastu lat, i to doświadczenie pozwala mi na skuteczne, szybkie i dobrane do aktualnych potrzeb klientów, pozyskiwanie najatrakcyjniejszych ofert kredytów firmowych, konsumenckich, hipotecznych, leasingu, faktoringu czy ubezpieczeń.</p>
            <p>Spotkajmy się, aby porozmawiać o Twoich potrzebach finansowych.</p>
          </v-col>          
        </v-row>
      </v-container>
      <v-container width="100vw" class="supra-main__call-to-action d-flex flex-column align-center justify-center my-10 py-16" fluid
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"      
      >
        <v-subheader class="supra-main__subheader text-h3 text-md-h2 my-16 my-md-10 white--text font-weight-medium" height="15vh">
          Chcesz wiedzieć więcej? <br>
          Potrzebujesz pomocy?
        </v-subheader>
        <v-btn max-width="80%" height="auto" class="supra-main__call-to-action-button d-inline-block black--text text-h6 text-none rounded-0 py-7" elevation="0" to="kontakt"> Wypełnij formularz a bezpłatnie i bezpośrednio skontaktuję się z Tobą</v-btn>
      </v-container>
      <v-container class="supra-main__text-content d-flex flex-column align-center my-10">
        <v-row>
          <v-subheader class="text-h2 font-weight-medium my-10"> Oferta</v-subheader>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="3" v-for="(card, i) in cards" :key="card.title"
            data-aos="fade-up"
            data-aos-offset="200"
            :data-aos-delay="i * 50"
          >
             <v-hover v-slot:default="{ hover }">
              <v-card height="100%" class="supra-main__card pa-5 mx-10 mx-md-0" hover :color="hover ? 'rgba(46, 48, 71, 0.8)' : 'white'" :class="hover ? 'white--text' : 'black--text' ">
                <div class="supra-main__bullet mt-4"></div>
                  <div class="supra-main__card-content d-flex flex-column justify-space-between ml-6 mt-n11">
                    <v-card-title class="supra-main__card-title text-left">{{card.title}}</v-card-title>
                    <v-card-text>
                      <p class="text-left">
                        {{card.text}} 
                      </p>
                    </v-card-text> 
                    <v-card-actions class="supra-main__card-button">
                      <v-btn text to="oferta" :color="hover ? '#3bbb9a' : 'black--text'">Więcej</v-btn>
                    </v-card-actions> 
                  </div>              
              </v-card>
             </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </div>
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
      cards: [
        {
          title: "Kredyt obrotowy",
          text: "na dowolny cel, to kredyt przeznaczony na finansowanie bieżącej działalności przedsiębiorstwa, umożliwiający zachowanie płynności finansowej Twojej firmy."
        },
        {
          title: "Kredyt inwestycyjny",
          text: "to kredyt przeznaczony na konkretne przedsięwzięcia inwestycyjne przedsiębiorstwa, między innymi na takie jak: zakup środków trwałych, samochodów, maszyn i urządzeń. "
        },
        {
          title: "Kredyt konsolidacyjny",
          text: "Kredyt konsolidacyjny to kredyt dzięki któremu łączysz kilka kredytów w jeden z niższą miesięczną ratą niż suma dotychczasowych rat."
        },
        {
          title: "Kredyt na spłatę ZUS i US.",
          text: "Pomagam uzyskać finansowanie na spłatę zaległości wobec Zakładu Ubezpieczeń Społecznych lub Urzędu Skarbowego  instytucji."
        },
        {
          title: "Kredyt hipoteczny",
          text: "Wybór kredytu hipotecznego to nie lada wyzwanie. Pomogę Ci przebrnąć przez gąszcz ofert bankowych i wybrać najkorzystniejszą dla Ciebie lub Twojej firmy."
        },
        {
          title: "Leasing",
          text: "to umowa, na mocy której leasingodawca oddaje do użytkowania daną rzecz leasingobiorcy, w zamian za ustaloną w umowie opłatą uiszczaną co miesiąc."
        },
        {
          title: "Ubezpieczenie",
          text: "w trosce o bezpieczeństwo Twoje, Twoich bliskich, Twojego majątku i Twojego biznesu współpracuję z topowymi Towarzystwami Ubezpieczeniowymi."
        },
        {
          title: "Faktoring",
          text: "czyli finansowanie faktur to wykup przez podmiot świadczący usługę faktoringu nieprzeterminowanych wierzytelności przedsiębiorstw."
        },
      ]
    }
  },
  props: {
    msg: String
  },  
}
</script>
<style scoped>
/* h3 {
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
} */
</style>
