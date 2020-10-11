<template>
  <div>
    <v-container class="supra-offer d-flex flex-column align-center"">
      <v-row class="supra-offer__image">
        <v-img src="../assets/offer_background_1.png" width="100vw" max-height="200px" ></v-img>
      </v-row>
      <v-row class="d-flex flex-column align-center my-10">
        <v-col class="d-flex flex-column align-center" cols="12" md="8">
          <v-subheader class="text-md-h2 text-h4 font-weight-medium my-10">Dowiedz się co mogę dla Ciebie zrobić</v-subheader> 
          <v-divider class="supra-main__divider my-10"></v-divider>  
          <v-card flat class="text-h5 mx-16 mx-lg-0 font-weight-regular my-5 text-left">
            Współpracuję z kilkunastoma bankami, towarzystwami ubezpieczeniowymi  i leasingowymi  w Polsce mających w swojej ofercie Kredyty obrotowe, ratalne, inwestycyjne, leasing samochodów, maszyn i urządzeń, faktoring, dla firm, a także kredyty hipoteczne, gotówkowe i konsolidacyjne dla klientów indywidualnych, ubezpieczenia na życie, majątkowe, zdrowotne czy firmowe. 
            Niezależnie od tego, czego potrzebujesz, pomogę Ci, aby Twoje plany stały się rzeczywistością.               
          </v-card>               
        </v-col>     
      </v-row>  
      <v-row class="mt-16">
        <v-col  cols="12" md="6" lg="3" v-for="(card, i) in cards" :key="card.title"
          data-aos="fade-up"
          data-aos-offset="200"
          :data-aos-delay="i * 50"
        >
            <v-hover v-slot:default="{ hover }">
            <v-card class="supra-main__card pa-5 mx-10 mx-md-0" hover min-height="35vh" :color="hover ? 'rgba(46, 48, 71, 0.8)' : 'white'" :class="hover ? 'white--text' : 'black--text' ">
              <div class="supra-main__bullet mt-4"></div>
              <div class="supra-main__content d-flex flex-column justify-space-between ml-6 my-n10">
                <v-card-title class="supra-main__card-title text-left">{{card.title}}</v-card-title>
                <v-card-text >
                  <p class="text-left">
                    {{card.text}} 
                  </p>
                </v-card-text> 
                <!-- <v-card-actions class="supra-main__card-button mt-n8">
                  <v-btn text :color="hover ? '#3bbb9a' : 'black--text'">Więcej</v-btn>
                </v-card-actions>  -->
              </div>                
            </v-card>
            </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Offer", 
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
          text: "Kredyt konsolidacyjny to kredyt dzięki któremu łączysz kilka kredytów w jeden."
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
  }
</script>