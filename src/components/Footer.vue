 <template>
  <v-footer class="supra-footer" color="rgba(46, 48, 71, 0.8)">    
    <v-row
      justify="center"
      no-gutters
    >
      <v-col cols="6">
        <v-img  src="../assets/LogoMakr.png" alt="Supra Finanse logo" max-height="50px" max-width="100px" contain />
        <p>
          Specjalizuję się w dostarczaniu kompleksowych uslug finansowych dla przedsiębiorswt oraz klienta indywidualnego.
        </p>
      </v-col>
      <v-col cols="3">

      </v-col>
      <v-col cols="3">
        <v-btn
          v-for="link in links"
          :key="link.name"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.to"
        >
          {{ link.name }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-btn class="black--text text-h5 rounded-0" outlined large width="15vw" height="5vh" color="white" to="kontakt">Spotkajmy się</v-btn>
      </v-col>
      <v-col cols="6">
        <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.social"
          class="mx-4 white--text"
          icon
          :href="icon.href"
          target="_blank"
        >
          <v-icon size="24px">{{ icon.social }}</v-icon>
        </v-btn>
      </v-card-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        {{ new Date().getFullYear() }} — <strong>Supra Finanse</strong>
      </v-col>
      <v-col cols="6">
        <span> Projekt graficzny marcinsuliga.eu </span>
      </v-col>
    </v-row>
    <div class="supra-hero__arrow supra-hero__arrow--up">
      <v-icon large class="white--text">mdi-arrow-up </v-icon>
    </div> 
 </v-footer>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
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
    }),
}
</script>