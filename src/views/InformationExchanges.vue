<template>
  <div>
    <v-card v-for="(item, index) in infoExchanges" :key="index" class="mb-3">
      <v-card-title>
        {{ item.Name }}
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'InformationExchanges',
  data() {
    return {
      infoExchanges: [],
    };
  },
  methods: {
    async getApiInfoExchanges() {
      try {
        const response = await fetch(
          'https://min-api.cryptocompare.com/data/exchanges/general'
        );
        const result = await response.json();
        const resultKey = Object.keys(result.Data);

        for (let i = 0; i < resultKey.length; i++) {
          this.infoExchanges.push(result.Data[resultKey[i]]);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.getApiInfoExchanges();
  },
};
</script>
