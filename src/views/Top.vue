<template>
  <v-container>
    <div class="hello">
      <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <!-- <h1>Agriculture Solution for Empty Housing</h1> -->
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <p>
        Solution Platform for Empty Housing Problem In Hokkaido. <br />
        Sponcered by Hokkaido University.
        <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->
      </p>
      <!-- <h3>Installed CLI Plugins</h3> -->
      <h3>HOST REGISTER FORM</h3>
      <ul>
        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdd1L-RufdegiAyxMt6QVht2n1VeNCpIzild465XCnKdolCuQ/viewform"
            target="_blank"
            rel="noopener"
          >
            HOST REGISTER FORM
          </a>
        </li>
      </ul>
      <h3>SUPPORTER REGISTER FORM</h3>
      <ul>
        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfsDdJqyvHDpN5Jnw0GBV44S5UDqOHyJbtoNb23nqNyaaR31w/viewform"
            target="_blank"
            rel="noopener"
          >
            SUPPORTER REGISTER FORM
          </a>
        </li>
      </ul>
      <h3>HOKUDAI HACKASON</h3>
      <ul>
        <li>
          <a href="https://router.vuejs.org" target="_blank" rel="noopener">
            HOKUDAI HACKASON
          </a>
        </li>
      </ul>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "TopView",
  props: {
    msg: String,
  },
  data: () => {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
