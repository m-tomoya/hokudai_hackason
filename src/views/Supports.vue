<template>
  <v-container>
    <div class="hello">
      <h1>Support List</h1>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :items-per-page="100"
          class="elevation-1"
        ></v-data-table>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "SupportsView",
  data: () => {
    return {
      // headers: [
      //   {
      //     text: "Dessert (100g serving)",
      //     value: "name",
      //   },
      //   { text: "Calories", value: "calories" },
      //   { text: "Fat (g)", value: "fat" },
      //   { text: "Carbs (g)", value: "carbs" },
      //   { text: "Protein (g)", value: "protein" },
      //   { text: "Iron (%)", value: "iron" },
      // ],
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Address", value: "address" },
        { text: "Note", value: "note" },
        { text: "OfficeName", value: "officeName" },
        { text: "StartAt", value: "startAt" },
        { text: "EndAt", value: "endAt" },
      ],
      supports: [],
      items: [],
    };
  },
  created() {
    this.getSupportsList();
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

<style scoped></style>
