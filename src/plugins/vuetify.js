import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: colors.red.darken1,
        secondary: colors.red.darken2,
        accent: colors.red.darken1,
      },
      dark: {
        primary: colors.red.lighten1,
        secondary: colors.red.lighten2,
        accent: colors.red.accent1,
      },
    },
  },
};

export default new Vuetify(opts);
