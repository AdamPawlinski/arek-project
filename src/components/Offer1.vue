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
            width="40vw"
          >
            <v-navigation-drawer permanent>
              <v-list
                nav
                dense
              >
                <v-list-item-group
                  v-model="chosen"
                  color="primary"
                >
                  <v-list-item
                    v-for="item in cards"
                    :key="item.title"
                  >
                    <!-- <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon> -->

                    <v-list-item-content>
                      <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-navigation-drawer>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="ma-4 text-left">
            <v-card-subtitle>
              {{cards.subtitle}}
            </v-card-subtitle>
            <v-card-text>
              {{cards.text}}                    
            </v-card-text>                  
            <v-list class="ml-4">
              <h4> Korzyści:</h4>
              <v-list-item
                v-for="advantages in cards.list"
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
                      class="body-2 font-weight-light"
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
export default {
  name: "Offer1", 
   data () {
    return {
      cards: [
        {
          title: "Kredyt obrotowy",
          subtitle: "",
          text: "na dowolny cel, to kredyt przeznaczony na finansowanie bieżącej działalności przedsiębiorstwa, umożliwiający zachowanie płynności finansowej Twojej firmy.",
          list: ["szybka decyzja kredytowa", "zachowanie płynności finansowej", "niskie raty miesięczne i brak zabezpieczeń rzeczowych", "umożliwia pokrycie nagłych wydatków i bieżących potrzeb", "ciągłość prowadzonej działalności"]
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
      ],
      chosen: 0
    }    
  },
  }
</script>