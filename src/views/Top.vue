<template>
  <v-container>
    <div class="hello">
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
      <v-card max-width="1200" class="mx-auto">
        <v-container>
          <v-row dense>
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
                        large
                        :href="item.url"
                        v-if="item.isForm"
                      >
                        GO FORM
                      </v-btn>
                      <v-btn
                        class="ml-2 mt-5"
                        outlined
                        rounded
                        large
                        v-else
                        :to="item.url"
                      >
                        GO LIST
                      </v-btn>
                    </v-card-actions>
                  </div>
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
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "空き家提供者登録フォーム",
          subtitle: "空き家提供者登録フォーム",
          url: "https://docs.google.com/forms/d/e/1FAIpQLSdd1L-RufdegiAyxMt6QVht2n1VeNCpIzild465XCnKdolCuQ/viewform",
          isForm: true,
        },
        {
          color: "#1F7087",
          title: "補助金登録フォーム",
          subtitle: "空き家提供者登録フォーム",
          url: "https://docs.google.com/forms/d/e/1FAIpQLSfsDdJqyvHDpN5Jnw0GBV44S5UDqOHyJbtoNb23nqNyaaR31w/viewform",
          isForm: true,
        },
        {
          color: "#1F7087",
          title: "新規就農者登録フォーム",
          subtitle: "空き家提供者登録フォーム",
          url: "https://docs.google.com/forms/d/e/1FAIpQLScHMjgFRtS8ApeZ2FpXn3iXqLeBYXSHPmt3-hUopnHl0ff5bg/viewform",
          isForm: true,
        },
        {
          color: "#952175",
          title: "空き家提供者一覧",
          subtitle: "空き家提供者登録フォーム",
          url: "/hosts",
          isForm: false,
        },
        {
          color: "#952175",
          title: "補助金一覧",
          subtitle: "空き家提供者登録フォーム",
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
