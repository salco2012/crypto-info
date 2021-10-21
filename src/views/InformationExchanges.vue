<template>
  <div>
    <h1 class="titleText mb-6 mt-4 text-center">Информация по биржам</h1>
    <v-data-table
      :headers="headers"
      :items="infoExchanges"
      :items-per-page="10"
      class="elevation-1 mb-5"
    >
      <template v-slot:item.LogoUrl="{ value }">
        <img :src="`https://www.cryptocompare.com${value}`" height="50" />
      </template>

      <template v-slot:item.GradePoints="{ item }">
        <v-chip :color="getColor(item.GradePoints)">
          {{
            Math.round(item.GradePoints) === 0
              ? '-'
              : Math.round(item.GradePoints) + ' %'
          }}
        </v-chip>
      </template>

      <template v-slot:item.Country="{value}">
                <span style="margin-right: 3px">
                 <i class="fas fa-globe-asia"></i>
              </span>
        {{value}}
      </template>

      <template v-slot:item.TOTALVOLUME24H.BTC="{ value }">
        {{ value ? value.toFixed(2) + ' $' : '-' }}
      </template>

      <template v-slot:item.Rating.TotalUsers="{ value }">
        <span style="margin-right: 3px">
        <i class="fas fa-user-friends" color: Tomato></i>
        </span>

        {{ value }}
      </template>

      <template v-slot:item.Description="{ value }">
        <div>
          <v-alert
          v-if="alertMeaning.includes(value)"
            border="top"
            close-text="Close Alert"
            color="#2a8bfa"
            outlined
            class="ma-2 alert"
            max-width="500"
          >
            <span style="font-size: 1em; color: Tomato; cursor:pointer" class="onCloseAlert" @click="selectAlert(value)">
            <i class="far fa-times-circle"></i>
                </span>
            {{ value }}

          </v-alert>
          <div class="text-start">
            <v-btn
              v-if="!alertMeaning.includes(value)"
              color="#2a8bfa"
              dark
              @click="selectAlert(value)"
              outlined
              rounded
            >
              details
            </v-btn>
          </div>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'InformationExchanges',
  data() {
    return {
      infoExchanges: [],
      alertMeaning: [],
      headers: [
        {
          text: 'Logo',
          value: 'LogoUrl',
        },
        { text: 'Name', value: 'Name' },
        { text: 'Country', value: 'Country' },
        { text: 'Grade points', value: 'GradePoints' },
        { text: 'Total volum 24h', value: 'TOTALVOLUME24H.BTC' },
        { text: 'Description', value: 'Description' },
        { text: 'Total users', value: 'Rating.TotalUsers' },
      ],
    };
  },
  methods: {
    selectAlert(value) {
      if(this.alertMeaning.includes(value)){
         const index = this.alertMeaning.indexOf(value);
        if (index > -1) {
        this.alertMeaning.splice(index, 1)
        } 
        } else {
        this.alertMeaning.push(value)
      }
    },
    getColor(grade) {
      if (grade > 70) {
        return 'green';
      } else if (grade > 50) {
        return 'orange';
      } else if (grade < 50 && grade > 0) {
        return 'red';
      } else {
        return 'transparent ';
      }
    },
    async getApiInfoExchanges() {
      try {
        const response = await fetch(
          'https://min-api.cryptocompare.com/data/exchanges/general?api_key=4b9a4ab5d678d62a4f000c38fafcdbee2fde445e9e3bd06f875e46b6a4ae53ff'
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

<style scoped>
.titleText {
  font-family: 'Russo One', sans-serif;
  font-weight: normal;
  color: #490c53;
  margin: 0 auto;
  text-transform: uppercase;
}
.alert{
  position: relative;
}
.onCloseAlert{
  position: absolute;
  top: 8px;
  right: 5px;
}
</style>
