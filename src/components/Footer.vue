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
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
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
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}
</script>