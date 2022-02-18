<template>
  <v-app>
    <!-- <v-navigation-drawer app> -->
    <!--   &#60;&#33;&#45;&#45; &#45;&#45;&#62; -->
    <!-- </v-navigation-drawer> -->
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <!-- <v-img -->
        <!--   alt="Vuetify Logo" -->
        <!--   class="shrink mr-2" -->
        <!--   contain -->
        <!--   src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" -->
        <!--   transition="scale-transition" -->
        <!--   width="40" -->
        <!-- /> -->

        <!-- <v-img -->
        <!--   alt="Vuetify Name" -->
        <!--   class="shrink mt-1 hidden-sm-and-down" -->
        <!--   contain -->
        <!--   min-width="100" -->
        <!--   src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" -->
        <!--   width="100" -->
        <!-- /> -->
        <h1>Agriculture Solution for Empty Housing</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Hokudai Hackason</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer dark padless app>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Hokudai Hackason</strong>
        </v-card-text>
      </v-card>

      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
