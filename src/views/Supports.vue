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
      path: "",
      hostsHeaders: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Address", value: "address" },
        { text: "Note", value: "note" },
        { text: "Type", value: "type" },
      ],
      supportsHeaders: [
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
      hosts: [],
      supports: [],
      items: [],
    };
  },
  created() {
    this.path = this.$route.path;
    console.log(this.path);
    this.setList();
  },
  methods: {
    setList() {
      if (this.path === "/hosts") {
        this.headers = this.hostsHeaders;
        this.getHostsList();
      } else if (this.path === "/supports") {
        this.headers = this.supportsHeaders;
        this.getSupportsList();
      }
    },
    getHostsList() {
      axios
        .get(
          // url
          "https://firestore.googleapis.com/v1/projects/hokudai-hackason/databases/(default)/documents/hosts"
        )
        .then((response) => {
          this.hosts = response.data.documents;
          console.log(this.hosts);
          this.setItems();
        });
    },
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
      if (this.path === "/supports") {
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
      } else if (this.path === "/hosts") {
        this.items = this.hosts.map((item) => {
          const fields = item.fields;
          item = {};
          item.name = fields.name.stringValue;
          item.address = fields.address.stringValue;
          item.note = fields.note.stringValue;
          item.type = fields.type.stringValue;
          return item;
        });
        console.log(this.items);
      }
    },
  },
};
</script>

<style scoped></style>
