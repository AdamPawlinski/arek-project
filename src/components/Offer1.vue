<template>
  <div>
    <v-container v-if="$vuetify.breakpoint.mdAndUp" class="supra-offer d-flex flex-column align-center" min-height="100vh">
      <v-row class="supra-offer__image">
        <v-img src="../assets/offer_background_1.png" class="d-flex align-center justify-center text-h4 font-weight-bold" width="100vw" max-height="200px"><div class="supra-offer__image-text">{{opened.title}}</div></v-img>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-card
            tile
            width="100%"
            class="supra-offer__navigation-card d-flex justify-center py-10"
            elevation="0"
            color="#e6e6e6"
          >
            <v-navigation-drawer 
              width="90%"
              permanent
              floating
            >
              <v-list
                nav
                class="pa-0"              
              >
                <v-list-item-group                  
                  
                >
                  <v-list-item
                    v-for="item in cards"
                    :key="item.title"
                    @click="clickHandler(item)"
                    class="pa-0"             
                  >
                    <v-list-item-content>
                      <v-list-item-title class="supra-offer__item-title text-h5 " v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-navigation-drawer>
          </v-card>
          <v-card
            tile
            width="100%"
            class="supra-offer__contact-card my-10"
            elevation="0"
            color="#2e3047"
          >
            <v-card-title class="white--text">
              Zapraszam do kontaktu
            </v-card-title>
            <v-card-text>
              <v-btn width="100%" height="auto" color="#3bbb9a" class="supra-offer__contact-button d-inline-block white--text text-h6 text-left rounded-0 py-3" elevation="0" to="/kontakt"><v-icon class="pr-15">mdi-email</v-icon>Kontakt</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="mx-4 mb-10 text-left" elevation="0">
            <v-img
              height="400"
              max-height="800"
              max-width="980"
              :src="opened.img"
              :lazy-src="opened.img"              
            >
            </v-img>
            <v-card-subtitle>
              {{opened.subtitle}}
            </v-card-subtitle>
            <v-card-text class="text-h5">
              {{opened.text}}                    
            </v-card-text>                  
            <v-list class="ml-4">
              <h4 class="text-h5 text--secondary"> Korzyści:</h4>
              <v-list-item
                v-for="advantages in opened.list"
                :key="advantages"                
              >
                <v-list-item-icon>
                  <v-icon color="#3bbb9a">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>                   
                  <v-list-item-title v-text="advantages" class="subtitle-1 text--secondary"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>        
    </v-container>
    <v-container v-else class="supra-offer d-flex flex-column align-center mb-10">
      <v-row>
        <v-col cols="12">
          <v-card
            tile
            height="100%"
            elevation="0"
          >                   
          <v-expansion-panels focusable>
            <v-expansion-panel
              v-for="item in cards"
              :key="item.title"
              class="supra-offer__expansion-panel"
            >            
              <v-expansion-panel-header class="text-h5  pl-8">{{item.title}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card class="ma-4 text-left" elevation="0">
                  <v-img
                    height="400"
                    max-height="800"
                    max-width="90vw"
                    :src="item.img"
                    :lazy-src="item.img"  
                    cover            
                  >
                  </v-img>
                  <v-card-subtitle>
                    {{item.subtitle}}
                  </v-card-subtitle>
                  <v-card-text class="text-h5 text--secondary">
                    {{item.text}}                    
                  </v-card-text>                  
                  <v-list class="ml-4">
                    <h4 class="text-h5 text--secondary">Korzyści:</h4>
                    <v-list-item
                      v-for="advantages in item.list"
                      :key="advantages"
                      class="subtitle-1 text--secondary font-weight-light d-flex align-center"
                      two-line
                    >
                      <v-list-item-icon class="my-6">
                        <v-icon color="#3bbb9a">mdi-check-circle</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-text="advantages"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          </v-card>
        </v-col>
      </v-row>    
    </v-container>
  </div>
</template>
<script>
import insurance from "../assets/ubezpieczenie_1.jpeg"
import investment from "../assets/kredyt_inwestycyjny_1.jpeg"
import mortage from "../assets/kredyt_hipoteczny_1.jpeg"
import leasing from "../assets/leasing_1.jpeg"
import credit from "../assets/kredyt_obrotowy_1.jpeg"

export default {
  name: "Offer1", 
  data () {
    return {
      cards: [
        {
          id: 1,
          title: "Kredyt obrotowy",
          subtitle: "",
          text: "Kredyt obrotowy na dowolny cel, to kredyt przeznaczony na finansowanie bieżącej działalności przedsiębiorstwa, umożliwiający zachowanie płynności finansowej Twojej firmy.",
          list: ["szybka decyzja kredytowa", "zachowanie płynności finansowej", "niskie raty miesięczne i brak zabezpieczeń rzeczowych", "umożliwia pokrycie nagłych wydatków i bieżących potrzeb", "ciągłość prowadzonej działalności"],
          img: credit
        },
        {
          id: 2,
          title: "Kredyt inwestycyjny",
          text: "Kredyt inwestycyjny to kredyt przeznaczony na konkretne przedsięwzięcia inwestycyjne przedsiębiorstwa, między innymi na takie jak: zakup środków trwałych, samochodów, maszyn i urządzeń.",
          list: ["długi okres kredytowania, nawet do 20 lat", "wypłata jednorazowa lub w transzach", "rozłożenie w czasie kosztów inwestycji", "finansowanie do 100 % inwestycji +VAT", "zachowanie płynności finansowej dzięki uwolnieniu środków własnych potrzebnych na bieżące działania obrotowe"],
          img: investment
        },
        {
          id: 3,
          title: "Kredyt konsolidacyjny",
          text: "Kredyt konsolidacyjny to kredyt dzięki któremu łączysz kilka kredytów w jeden.",
          list: ["Prosta kontrola zobowiązań mając jedno zobowiązanie zamiast kilku lub kilkunastu", "niższa wysokość raty niż suma rat płaconych wcześniej", "niższe oprocentowanie kredytu konsolidacyjnego", "możliwość dobrania dodatkowej kwoty na dowolny cel"],
          img: investment
        },
        {
          id: 4,
          title: "Kredyt na spłatę ZUS i US",
          text: "Pomagam uzyskać finansowanie na spłatę zaległości wobec Zakładu Ubezpieczeń Społecznych lub Urzędu Skarbowego  instytucji.",
          list: ["uregulowanie zobowiązań, dzięki czemu firma odzyskuje dostęp do finansowania na bieżącą działalność", "Szybka decyzja", "zachowanie płynności finansowej"],
          img: investment
        },
        {
          id: 5,
          title: "Kredyt hipoteczny",
          text: "Wybór kredytu hipotecznego to nie lada wyzwanie. Pomogę Ci przebrnąć przez gąszcz ofert bankowych i wybrać najkorzystniejszą dla Ciebie lub Twojej firmy.",
          list: ["Prowizja kredytowa od 0%", "Atrakcyjne oprocentowanie", "Elastyczne podejście do różnych źródeł dochodów", "Wsparcie i opiekę Eksperta", "Szybkość i skuteczność w działaniu", "Bezpieczeństwo transakcji"],
          img: mortage
        },
        {
          id: 6,
          title: "Leasing",
          text: "Leasing to umowa, na mocy której leasingodawca oddaje do użytkowania daną rzecz leasingobiorcy, w zamian za ustaloną w umowie opłatą uiszczaną co miesiąc.",
          list: ["minimum formalności", "leasing NIE jest brany pod uwagę, przy wyliczaniu zdolności kredytowej przy poszukiwaniu finansowania w formie kredytu bankowego", "szybka decyzja", "niewielkie zaangażowanie własnego kapitału", "wpłata początkowa i raty leasingowe w całości wliczają się do kosztów uzyskania przychodu", "w ofercie leasing operacyjny, finansowy i zwrotny"],
          img: leasing
        },
        {
          id: 7,
          title: "Ubezpieczenie",
          text: "W trosce o bezpieczeństwo Twoje, Twoich bliskich, Twojego majątku i Twojego biznesu współpracuję z topowymi Towarzystwami Ubezpieczeniowymi, posiadającymi w ofercie: ubezpieczenia na życie i zdrowie, ubezpieczenia dla firm, ubezpieczenia majątkowe, gromadzenie kapitału",
          list: ["minimum formalności", "zabezpieczenie funkcjonowania firmy", "zabezpieczenie przyszłości rodziny", "wsparcie przy wypełnianiu wniosków"],
          img: insurance
        },
        {
          id: 8,
          title: "Faktoring",
          text: "Faktoring czyli finansowanie faktur to wykup przez podmiot świadczący usługę faktoringu nieprzeterminowanych wierzytelności przedsiębiorstw.",
          list: ["prosty sposób na zachowanie  płynności finansowej Twojej firmy. Faktoring dostarcza przedsiębiorstwu natychmiastowego zastrzyku gotówki poprzez uwolnienie środków zablokowanych w niezapłaconych fakturach.", "łatwo dostępna forma finansowania, uproszczone procedury w porównaniu np. z kredytami obrotowymi", "stabilność i bezpieczeństwo, nie musisz czekać na płatności klientów i martwić się o pieniądze na bieżące wydatki", "brak ryzyka związanego z zadłużeniem i obniżeniem zdolności kredytowej", "zwiększa bezpieczeństwo współpracy z odbiorcami. Faktor przejmuje ryzyko niewypłacalności odbiorców firmy"],
          img: investment
        },
      ],
      opened: 0   
    }   
  }, 
  watch: {
    '$route.params.opened': {
      handler: function(open) {      
        this.readCategoryIdFromUrl(open);        
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    clickHandler(item) {
      this.$router.push({name: "oferta", params: {opened: item.title.toLowerCase().split(' ').join('-')}})
    },
    readCategoryIdFromUrl(open) {  
          return this.opened = this.cards.find(
            card => {
              return card.title.toLowerCase().split(' ').join('-') === open.toLowerCase()
            }
          )
        }
  },
  mounted() {
    console.log(this.$route.params.opened )
    if (this.$route.params.opened === undefined) this.$router.push({name: "oferta", params: {opened: "kredyt-obrotowy" }})
  }
}
</script>