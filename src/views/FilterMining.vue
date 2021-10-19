<template>
  <v-row>
    <v-col cols="3">
      <v-card v-if="miningData.length">
        <v-toolbar dense flat color="rgb(42, 139, 250)" dark>
          <v-toolbar-title>Дополнительно</v-toolbar-title>
        </v-toolbar>

        <v-card-text class="pa-0 pl-2">
          <v-chip-group column multiple>
            <v-chip
              filter
              outlined
              @click="selectFilter(item)"
              v-for="(index, item) in filterStatus"
              :key="item.id"
            >
              {{ item }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FilterMining',
  props: {
    miningData: {
      type: Array,
    },
    filterStatus: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    selectFilter(item) {
      this.filterStatus[item] = !this.filterStatus[item];
    },
  },
};
</script>
