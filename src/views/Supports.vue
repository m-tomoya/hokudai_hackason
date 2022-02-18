<template>
  <v-container>
    <div class="hello">
      <h1>Support List</h1>
      <h3>Reccomend for You</h3>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
      <h3>All Support List</h3>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "SupportsView",
  data: () => {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
      // headers: [
      //    {
      //      text: 'Name',
      //      align: 'start',
      //      sortable: false,
      //      value: 'name',
      //    },
      //    { text: 'Address', value: 'address' },
      //    { text: 'Note', value: 'note' },
      //    { text: 'OfficeName', value: 'officeName' },
      //    { text: 'StartAt', value: 'startAt' },
      //    { text: 'EndAt', value: 'endAt' },
      //  ],
      supports: [],
      // items: []
    };
  },
  created() {
    // this.getSupportsList();
    console.log(this.headers);
  },
  methods: {
    getSupportsList() {
      axios
        .get(
          // url
          "https://firestore.googleapis.com/v1/projects/hokudai-hackason/databases/(default)/documents/supports"
        )
        .then((response) => {
          this.supports = response.data.documents;
          console.log(this.supports);
          this.setItems();
        });
    },
    setItems() {
      this.items = this.supports.map((item) => {
        const fields = item.fields;
        item = {};
        item.name = fields.name.stringValue;
        item.address = fields.address.stringValue;
        item.note = fields.note.stringValue;
        item.officeName = fields.officeName.stringValue;
        item.startAt = fields.startAt.stringValue;
        item.endAt = fields.endAt.stringValue;
        return item;
      });
      console.log(this.items);
    },
  },
};
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
