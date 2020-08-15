<template>
  <div>        
    <v-main class="pt-0">
      <v-container class="supra-main__hero fill-height" fluid>        
        <Hero />          
      </v-container>
      <v-container fluid class="supra-main__cards d-flex flex-column align-center px-0 my-10" >
        <v-row>
          <v-col class="d-flex flex-column align-center">
            <v-subheader class="text-h2 my-10">Supra Finanse</v-subheader> 
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
      <v-container  class="supra-main__call-to-action d-flex flex-column align-center justify-center my-10" fluid>
        <v-subheader class="supra-main__subheader text-h2 my-10 white--text" height="15vh">
          Chcesz wiedzieć więcej? <br>
          Potrzebujesz pomocy?
        </v-subheader>
        <v-btn class="black--text text-h6 rounded-0" large width="25vw" height="8vh" to="kontakt"> Wypełnij formularz a bezpłatnie i bezpośrednio <br> skontaktuję się z Tobą</v-btn>
      </v-container>
      <v-container class="supra-main__text-content d-flex flex-column align-center my-10">
        <v-row>
          <v-subheader class="text-h2 my-10">Oferta</v-subheader>
        </v-row>
        <v-row>
          <v-col cols="12" md="3" v-for="card in cards" :key="card.title">
             <v-hover v-slot:default="{ hover }">
              <v-card hover class="pa-10" height="30vh" :color="hover ? '#2e3047' : 'white'" :class="hover ? 'white--text' : 'black--text' ">
                <div class="supra-main__bullet mt-4"></div>
                <div class="d-flex flex-column ml-6 my-n10">
                  <v-card-title>{{card.title}}</v-card-title>
                  <v-card-text>
                    <p class="text-left">
                      {{card.text}} 
                    </p>
                  </v-card-text>  
                </div>                
              </v-card>
             </v-hover>
          </v-col>
        </v-row>
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
      cards: [
        {
          title: "Kredyt obrotowy",
          text: "na dowolny cel, to kredyt przeznaczony na finansowanie bieżącej działalności przedsiębiorstwa, umożliwiający zachowanie płynności finansowej Twojej firmy. Może być przeznaczony na zakup towarów, materiałów, usług czy pokrycie kosztów zatrudnienia personelu."
        },
        {
          title: "Kredyt inwestycyjny",
          text: "to kredyty przeznaczone na konkretne przedsięwzięcia inwestycyjne przedsiębiorstwa, między innymi na takie jak: zakup środków trwałych, samochodów, maszyn i urządzeń, zakup, budowę, rozbudowę, modernizację czy remont nieruchomości komercyjnych, refinansowanie wydatków inwestycyjnych poniesionych w okresie ostatnich 12 m-cach. "
        },
        {
          title: "Kredyt konsolidacyjny",
          text: "Kredyt konsolidacyjny to kredyt dzięki któremu łączysz kilka kredytów w jeden jakim z niższą miesięczną ratą niż suma dotychczasowych rat"
        },
        {
          title: "Kredyt na spłatę ZUS i US.",
          text: "zaległości wobec Zakładu Ubezpieczeń Społecznych lub Urzędu Skarbowego potrafią utrudnić lub całkowicie zniweczyć uzyskanie finansowania na bieżącą działalność przedsiębiorstwa lub długofalowe cele inwestycyjne. Pomagam uzyskać finansowanie na spłatę zaległości wobec w/w instytucji."
        },
        {
          title: "Kredyt hipoteczny",
          text: "Wybór kredytu hipotecznego to nie lada wyzwanie. Pomogę Ci przebrnąć przez gąszcz ofert bankowych i wybrać najkorzystniejszą dla Ciebie lub Twojej firmy."
        },
        {
          title: "Leasing",
          text: "Leasing to umowa zawierana pomiędzy leasingodawcą a leasingobiorcą, na mocy której leasingodawca oddaje do użytkowania daną rzecz leasingobiorcy, w zamian za ustaloną w umowie opłatą uiszczaną co miesiąc."
        },
        {
          title: "Ubezpieczenie",
          text: "Wybór kredytu hipotecznego to nie lada wyzwanie. Pomogę Ci przebrnąć przez gąszcz ofert bankowych i wybrać najkorzystniejszą dla Ciebie lub Twojej firmy."
        },
        {
          title: "Faktoring",
          text: "czyli finansowanie faktur to wykup przez podmiot świadczący usługę faktoringu (faktora) nieprzeterminowanych wierzytelności przedsiębiorstw (faktorantów) należnych im od kontrahentów (odbiorców) z tytułu dostaw i usług oraz na świadczeniu na ich rzecz dodatkowych usług "
        },
      ]
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
