 <template>
  <v-footer app absolute class="white--text py-10"  color="rgba(46, 48, 71, 0.8)">  
    <v-container class="supra-footer">  
    <v-row
      justify="center"
      no-gutters
    >
      <v-col cols="12" lg="6" class="d-flex flex-column align-center align-lg-start">
        <!-- <v-img  class="mb-10" src="../assets/LogoMakr.png" alt="Supra Finanse logo" max-height="50px" max-width="100px" contain /> -->
        <p class="text-left ml-6">
          Specjalizuję się w dostarczaniu <br>kompleksowych uslug finansowych <br>dla przedsiębiorstw <br>oraz klienta indywidualnego.
        </p>
      </v-col>
      <v-divider color="#3bbb9a" inset class="d-flex d-lg-none"> </v-divider>
      <v-col cols="12" lg="3" class="d-flex justify-center justify-lg-start">
        <v-list color="transparent">
          <v-list-item 
            v-for="offer in offers"
            :key="offer.title"   
            class="d-flex justify-start"                     
          >
            <v-btn
              color="white"
              text
              class="my-2"
              :to="offer.to"
            >
              {{offer.title}}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-col>
      <v-divider color="#3bbb9a" inset class="d-flex d-lg-none"> </v-divider>
      <v-col cols="12" lg="3" class="d-flex justify-center justify-lg-end">
        <div class="d-flex flex-column align-start align-lg-start">
          <v-btn
            v-for="link in links"
            :key="link.name"
            color="white"
            text
            class="supra-footer__nav-links my-2"
            :to="link.to"
          >
            {{ link.name }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-divider color="#3bbb9a" inset class="d-flex d-lg-none"> </v-divider>
    <v-row>
      <v-col cols="12" lg="6" class="d-flex justify-center justify-lg-start">
        <v-btn class="black--text text-h5 rounded-0 pa-5" outlined large color="white" to="kontakt">Spotkajmy się</v-btn>
      </v-col>
      <v-col cols="12" lg="6">
        <v-card-text class="d-flex justify-center justify-lg-end">
        <v-btn
          v-for="icon in icons"
          :key="icon.social"
          class="mx-4" 
          icon
          :href="icon.href"
          target="_blank"
        >
          <v-icon size="24px" color="#3bbb9a" >{{ icon.social }}</v-icon>
        </v-btn>
      </v-card-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" class="d-flex justify-center justify-lg-start">
        {{ new Date().getFullYear() }} — <strong>Supra Finanse</strong>
      </v-col>
      <!-- <v-col cols="12" lg="6" class="d-flex justify-center justify-lg-end">
        <span> Projekt graficzny marcinsuliga.eu </span>
      </v-col> -->
    </v-row>
    </v-container>
      <div class="">
       <v-btn
        href="#main"
        class="supra-hero__arrow supra-hero__arrow--up py-6 white--text"
        color="#3bbb9a" 
        @click="$vuetify.goTo(target, options)"       
      >
        <v-icon large>mdi-arrow-up </v-icon>
      </v-btn>
      </div>      
 </v-footer>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
    offers: [
        {
          title: "Kredyt obrotowy",
          to: "oferta"
        },
        {
          title: "Kredyt inwestycyjny",
          to: "oferta"
        },
        {
          title: "Kredyt konsolidacyjny",
          to: "oferta"
        },
        {
          title: "Kredyt na spłatę ZUS i US",
          to: "oferta"
        },
        {
          title: "Kredyt hipoteczny",
          to: "oferta"
        },
        {
          title: "Leasing",
          to: "oferta"
        },
        {
          title: "Ubezpieczenie",
          to: "oferta"
        },
        {
          title: "Faktoring",
          to: "oferta"
        },
      ],
      links: [
        {
          name: "Strona główna",
          to: "/"
        },
        {
          name: "O mnie",
          to: "omnie"
        },
        {
          name: "Oferta",
          to: "oferta"
        },
        {
          name: "Kontakt",
          to: "kontakt"
        },
      ],
      icons: [
        {
          social: 'mdi-linkedin',
          href: 'https://www.linkedin.com/in/arkadiusz-sztaba-6b70a5aa/'
        },
        {
          social: 'mdi-facebook',
          href: 'https://www.facebook.com/arkadiusz.sztaba.1'
        },
        {
          social: 'mdi-twitter',
          href: 'https://twitter.com/SztabaArek'
        },
        // {
        //   social: 'goldenline',
        //   to: '/'
        // }
      ],
      target: ".supra-nav__header",
      options: {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
      }
    }),
}
</script>