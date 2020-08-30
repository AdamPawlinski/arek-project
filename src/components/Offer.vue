<template>
  <div>
    <v-container class="supra-offer d-flex flex-column align-center justify-center mt-10"  fluid>
      <v-row>
        <v-img src="../assets/offer_background.png" width="100vw" max-height="200px" contain></v-img>
      </v-row>
        <v-row>
          <v-col class="d-flex flex-column align-center my-10 mx-auto" cols="12" md="8">
            <v-subheader class="text-h2 font-weight-medium mt-10">Dowiedz się co mogę dla Ciebie zrobić</v-subheader> 
            <v-divider class="supra-main__divider my-16"></v-divider>  
            <v-subheader class="text-h5 font-weight-regular my-5">
              Współpracuję z kilkunastoma bankami, towarzystwami ubezpieczeniowymi  i leasingowymi  w Polsce mających w swojej ofercie Kredyty obrotowe, ratalne, inwestycyjne, leasing samochodów, maszyn i urządzeń, faktoring, dla firm, a także kredyty hipoteczne, gotówkowe i konsolidacyjne dla klientów indywidualnych, ubezpieczenia na życie, majątkowe, zdrowotne czy firmowe. 
              Niezależnie od tego, czego potrzebujesz, pomogę Ci, aby Twoje plany stały się rzeczywistością.               
            </v-subheader>               
          </v-col>     
        </v-row>  
        <v-row >
          <v-col class="mx-auto" cols="12" md="6" lg="3" v-for="(card, i) in cards" :key="card.title"
            data-aos="fade-up"
            data-aos-offset="200"
            :data-aos-delay="i * 50"
          >
             <v-hover v-slot:default="{ hover }">
              <v-card class="supra-main__card pa-5 mx-10 mx-md-0" hover min-height="35vh" :color="hover ? 'rgba(46, 48, 71, 0.8)' : 'white'" :class="hover ? 'white--text' : 'black--text' ">
                <div class="supra-main__bullet mt-4"></div>
                <div class="supra-main__content d-flex flex-column justify-space-between ml-6 my-n10">
                  <v-card-title>{{card.title}}</v-card-title>
                  <v-card-text>
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
          text: "czyli finansowanie faktur to wykup przez podmiot świadczący usługę faktoringu (faktora) nieprzeterminowanych wierzytelności przedsiębiorstw (faktorantów)."
        },
      ]
    }
  },
  }
</script>