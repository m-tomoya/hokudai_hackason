<template>
  <v-container>
    <div class="hello">
      <h1>{{ title }}</h1>
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
        >
          <template v-if="isSupports" v-slot:[`item.name`]="{ item }">
            <a :href="item.url">
              {{ item.name }}
            </a>
          </template>
        </v-data-table>
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
      search: "",
      path: "",
      isSupports: true,
      hostsHeaders: [
        {
          text: "空き家所有者氏名",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "住所", value: "address" },
        { text: "空き家種類(農地)", value: "type" },
        { text: "備考", value: "note" },
      ],
      supportsHeaders: [
        {
          text: "補助金名",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "団体名", value: "officeName" },
        { text: "住所", value: "address" },
        { text: "申請募集開始日", value: "startAt" },
        { text: "申請募集締切日", value: "endAt" },
        { text: "備考", value: "note" },
      ],
      hosts: [],
      supports: [],
      items: [],
    };
  },
  created() {
    this.path = this.$route.path;
    this.isSupports = this.path === "/supports";
    this.setList();
  },
  methods: {
    setList() {
      if (this.path === "/hosts") {
        this.title = "空き家提供者一覧";
        this.headers = this.hostsHeaders;
        this.getHostsList();
      } else if (this.path === "/supports") {
        this.title = "補助金一覧";
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
          item.startAt = fields.startAt.timestampValue;
          item.endAt = fields.endAt.timestampValue;
          item.url = fields.url.stringValue;
          return item;
        });
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
      }
    },
  },
};
</script>

<style scoped></style>
