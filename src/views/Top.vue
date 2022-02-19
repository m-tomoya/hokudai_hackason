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
      <!-- <p> -->
      <!--   Solution Platform for Empty Housing Problem In Hokkaido. <br /> -->
      <!--   Sponcered by Hokkaido University. -->
      <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->
      <!-- </p> -->
      <!-- <h3>Installed CLI Plugins</h3> -->
      <v-card max-width="1200" class="mx-auto">
        <v-container>
          <v-row dense>
            <!-- <v-col cols="12"> -->
            <!--   <v-card color="#385F73" dark> -->
            <!--     <v-card-title class="text-h5"> -->
            <!--       Unlimited music now -->
            <!--     </v-card-title> -->
            <!--  -->
            <!--     <v-card-subtitle -->
            <!--       >Listen to your favorite artists and albums whenever and -->
            <!--       wherever, online and offline.</v-card-subtitle -->
            <!--     > -->
            <!--  -->
            <!--     <v-card-actions> -->
            <!--       <v-btn text> Listen Now </v-btn> -->
            <!--     </v-card-actions> -->
            <!--   </v-card> -->
            <!-- </v-col> -->

            <v-col v-for="(item, i) in items" :key="i" cols="12">
              <v-card :color="item.color" dark>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="text-h5"
                      v-text="item.title"
                    ></v-card-title>

                    <v-card-subtitle v-text="item.subtitle"></v-card-subtitle>

                    <v-card-actions>
                      <v-btn
                        class="ml-2 mt-5"
                        outlined
                        rounded
                        small
                        :href="item.url"
                        v-if="item.isForm"
                      >
                        FORM
                      </v-btn>
                      <v-btn
                        class="ml-2 mt-5"
                        outlined
                        rounded
                        small
                        v-else
                        :to="item.url"
                      >
                        FORM
                      </v-btn>
                    </v-card-actions>
                  </div>

                  <!-- <v-avatar class="ma-3" size="125" tile> -->
                  <!--   <v-img :src="item.src"></v-img> -->
                  <!-- </v-avatar> -->
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
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
      items: [
        {
          color: "#1F7087",
          // src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "農地提供者登録フォーム",
          subtitle: "農地提供者登録フォーム",
          url: "https://docs.google.com/forms/d/e/1FAIpQLSdd1L-RufdegiAyxMt6QVht2n1VeNCpIzild465XCnKdolCuQ/viewform",
          isForm: true,
        },
        {
          color: "#952175",
          // src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "補助金登録フォーム",
          subtitle: "農地提供者登録フォーム",
          url: "https://docs.google.com/forms/d/e/1FAIpQLSfsDdJqyvHDpN5Jnw0GBV44S5UDqOHyJbtoNb23nqNyaaR31w/viewform",
          isForm: true,
        },
        {
          color: "#1F7087",
          // src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "新規就農者登録フォーム",
          subtitle: "農地提供者登録フォーム",
          url: "https://docs.google.com/forms/d/e/1FAIpQLScHMjgFRtS8ApeZ2FpXn3iXqLeBYXSHPmt3-hUopnHl0ff5bg/viewform",
          isForm: true,
        },
        {
          color: "#952175",
          // src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "農地提供者一覧",
          subtitle: "農地提供者登録フォーム",
          url: "/hosts",
          isForm: false,
        },
        {
          color: "#952175",
          // src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "補助金一覧",
          subtitle: "農地提供者登録フォーム",
          url: "/supports",
          isForm: false,
        },
      ],
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
