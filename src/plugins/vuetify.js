import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        background: "#f5f5f5",
        primary: "#4caf50",
        secondary: "#4caf50",
        accent: "#4caf50",
        error: "#4caf50",
        warning: "#4caf50",
        info: "#4caf50",
        success: "#4caf50",
      },
    },
  },
});
