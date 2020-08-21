import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.grey.darken2, 
        secondary: colors.grey.lighten2, 
        accent: colors.blue.darken1, 
      },
    },
    breakpoint: {
      thresholds: {
        sm: 320,
        md: 640,
        lg: 1140,
      },
    },
  },
});
