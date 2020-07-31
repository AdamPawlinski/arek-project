 <template>
  <v-footer class="blue darken-2">
    <v-row
      justify="center"
      no-gutters
    >
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
      <v-col
        class="py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Supra Finanse</strong>
      </v-col>      
    </v-row>
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
          href: '/'
        },
        // {
        //   social: 'goldenline',
        //   to: '/'
        // }
      ],
    }),
}
</script>