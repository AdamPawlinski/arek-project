<template>
  <div>
    <v-container v-if="$vuetify.breakpoint.mdAndUp" class="supra-offer d-flex flex-column align-center">
      <v-row class="supra-offer__image">
        <v-img src="../assets/offer_background_1.png" width="100vw" max-height="200px" ></v-img>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-card
            tile
            height="800"
            width="1000"
          >
            <v-navigation-drawer 
              width="100%"
              height="100%"
              permanent
            >
              <v-list
                nav                
              >
                <v-list-item-group                  
                  color="primary"
                >
                  <v-list-item
                    v-for="item in cards"
                    :key="item.title"
                    @click="chosen = item"             
                  >
                    <!-- <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon> -->

                    <v-list-item-content>
                      <v-list-item-title class="supra-offer__item-title text-h5" v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-navigation-drawer>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="ma-4 text-left">
            <v-img
              height="400"
              max-height="800"
              max-width="1500"
              :src="chosen.img"
              :lazy-src="chosen.img"              
            >
              <!-- <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template> -->
            </v-img>
            <v-card-subtitle>
              {{chosen.subtitle}}
            </v-card-subtitle>
            <v-card-text class="text-h5">
              {{chosen.text}}                    
            </v-card-text>                  
            <v-list class="ml-4">
              <h4> Korzyści:</h4>
              <v-list-item
                v-for="advantages in chosen.list"
                :key="advantages"
                class="body-2 font-weight-light"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="advantages"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>        
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col>
          <v-expansion-panels focusable>
            <v-expansion-panel
              v-for="item in cards"
              :key="item"
            >
              <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card class="ma-4 text-left">
                  <v-card-subtitle>
                    {{item.subtitle}}
                  </v-card-subtitle>
                  <v-card-text>
                    {{item.text}}                    
                  </v-card-text>                  
                  <v-list class="ml-4">
                    <h4> Korzyści:</h4>
                    <v-list-item
                      v-for="advantages in item.list"
                      :key="advantages"
                      class="body-1 font-weight-light"
                    >
                      <v-list-item-content>
                        <v-list-item-title v-text="advantages"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
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

export default {
  name: "Offer1", 
   data () {
    return {
      cards: [
        {
          title: "Kredyt obrotowy",
          subtitle: "",
          text: "Kredyt obrotowy na dowolny cel, to kredyt przeznaczony na finansowanie bieżącej działalności przedsiębiorstwa, umożliwiający zachowanie płynności finansowej Twojej firmy.",
          list: ["szybka decyzja kredytowa", "zachowanie płynności finansowej", "niskie raty miesięczne i brak zabezpieczeń rzeczowych", "umożliwia pokrycie nagłych wydatków i bieżących potrzeb", "ciągłość prowadzonej działalności"],
          img: investment
        },
        {
          title: "Kredyt inwestycyjny",
          text: "Kredyt inwestycyjny to kredyt przeznaczony na konkretne przedsięwzięcia inwestycyjne przedsiębiorstwa, między innymi na takie jak: zakup środków trwałych, samochodów, maszyn i urządzeń.",
          list: ["długi okres kredytowania, nawet do 20 lat", "wypłata jednorazowa lub w transzach", "rozłożenie w czasie kosztów inwestycji", "finansowanie do 100 % inwestycji +VAT", "zachowanie płynności finansowej dzięki uwolnieniu środków własnych potrzebnych na bieżące działania obrotowe"],
          img: investment
        },
        {
          title: "Kredyt konsolidacyjny",
          text: "Kredyt konsolidacyjny to kredyt dzięki któremu łączysz kilka kredytów w jeden.",
          list: ["Prosta kontrola zobowiązań mając jedno zobowiązanie zamiast kilku lub kilkunastu", "niższa wysokość raty niż suma rat płaconych wcześniej", "niższe oprocentowanie kredytu konsolidacyjnego", "możliwość dobrania dodatkowej kwoty na dowolny cel"],
          img: investment
        },
        {
          title: "Kredyt na spłatę ZUS i US",
          text: "Pomagam uzyskać finansowanie na spłatę zaległości wobec Zakładu Ubezpieczeń Społecznych lub Urzędu Skarbowego  instytucji.",
          list: ["uregulowanie zobowiązań, dzięki czemu firma odzyskuje dostęp do finansowania na bieżącą działalność", "Szybka decyzja", "zachowanie płynności finansowej"],
          img: investment
        },
        {
          title: "Kredyt hipoteczny",
          text: "Wybór kredytu hipotecznego to nie lada wyzwanie. Pomogę Ci przebrnąć przez gąszcz ofert bankowych i wybrać najkorzystniejszą dla Ciebie lub Twojej firmy.",
          list: ["Prowizja kredytowa od 0%", "Atrakcyjne oprocentowanie", "Elastyczne podejście do różnych źródeł dochodów", "Wsparcie i opiekę Eksperta", "Szybkość i skuteczność w działaniu", "Bezpieczeństwo transakcji"],
          img: mortage
        },
        {
          title: "Leasing",
          text: "Leasing to umowa, na mocy której leasingodawca oddaje do użytkowania daną rzecz leasingobiorcy, w zamian za ustaloną w umowie opłatą uiszczaną co miesiąc.",
          list: ["minimum formalności", "leasing NIE jest brany pod uwagę, przy wyliczaniu zdolności kredytowej przy poszukiwaniu finansowania w formie kredytu bankowego", "szybka decyzja", "niewielkie zaangażowanie własnego kapitału", "wpłata początkowa i raty leasingowe w całości wliczają się do kosztów uzyskania przychodu", "w ofercie leasing operacyjny, finansowy i zwrotny"],
          img: leasing
        },
        {
          title: "Ubezpieczenie",
          text: "W trosce o bezpieczeństwo Twoje, Twoich bliskich, Twojego majątku i Twojego biznesu współpracuję z topowymi Towarzystwami Ubezpieczeniowymi, posiadającymi w ofercie: ubezpieczenia na życie i zdrowie, ubezpieczenia dla firm, ubezpieczenia majątkowe, gromadzenie kapitału",
          list: ["minimum formalności", "zabezpieczenie funkcjonowania firmy", "zabezpieczenie przyszłości rodziny", "wsparcie przy wypełnianiu wniosków"],
          img: insurance
        },
        {
          title: "Faktoring",
          text: "Faktoring czyli finansowanie faktur to wykup przez podmiot świadczący usługę faktoringu nieprzeterminowanych wierzytelności przedsiębiorstw.",
          list: ["prosty sposób na zachowanie  płynności finansowej Twojej firmy. Faktoring dostarcza przedsiębiorstwu natychmiastowego zastrzyku gotówki poprzez uwolnienie środków zablokowanych w niezapłaconych fakturach.", "łatwo dostępna forma finansowania, uproszczone procedury w porównaniu np. z kredytami obrotowymi", "stabilność i bezpieczeństwo, nie musisz czekać na płatności klientów i martwić się o pieniądze na bieżące wydatki", "brak ryzyka związanego z zadłużeniem i obniżeniem zdolności kredytowej", "zwiększa bezpieczeństwo współpracy z odbiorcami. Faktor przejmuje ryzyko niewypłacalności odbiorców firmy"],
          img: investment
        },
      ],
      chosen: 0
    }    
  },
  }
</script>