<template>
  <v-container>
    <h1 class="titleText mb-6 mt-4 text-center">Данные о майнинге</h1>
    <v-row class="pt-10">
      <v-col cols="2">
        <BaseInput v-model="coin" label="Например Ethereum" />
      </v-col>
      <v-col>
        <BaseButton @click="addСoin()" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" v-for="(item, index) in miningData" :key="index">
        <v-card class="mb-5">
          <v-card-title class="titleCardMining">
            {{ item.CoinInfo.Name }}
          </v-card-title>

          <v-img
            height="100"
            contain
            class="mt-2"
            :src="`https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`"
          ></v-img>

          <v-card-text class="pa-0 pl-3 pt-2 textCardMining">
            <span style="font-size: 1rem;">
              <i class="fas fa-key"></i>
            </span>
            {{ `Id: ${item.CoinInfo.Id} ` }}
          </v-card-text>

          <v-card-text class="pa-0 pl-3 pt-2 textCardMining">
            <span style="font-size: 1rem;">
              <i class="fas fa-font"></i>
            </span>
            {{ `Name: ${item.CoinInfo.Name}` }}
          </v-card-text>

          <v-card-text class="pa-0 pl-3 pt-2 textCardMining">
            <span style="font-size: 1rem;">
              <i class="fas fa-spell-check"></i>
            </span>
            {{ `FullName: ${item.CoinInfo.FullName}` }}
          </v-card-text>

          <v-card-text class="pa-0 pl-3 pt-2 textCardMining">
            <span style="font-size: 1rem;">
              <i class="fas fa-stopwatch"></i>
            </span>
            {{
              `BlockTime: ${
                item.CoinInfo.BlockTime % 1
                  ? item.CoinInfo.BlockTime.toFixed(1)
                  : item.CoinInfo.BlockTime
              } `
            }}
          </v-card-text>

          <v-card-text class="pa-0 pl-3 pt-2 textCardMining">
            <span style="font-size: 1rem;">
              <i class="fas fa-hand-holding-usd"></i>
            </span>
            {{
              `BlockReward: ${
                item.CoinInfo.BlockReward % 1
                  ? item.CoinInfo.BlockReward.toFixed(2)
                  : item.CoinInfo.BlockReward
              } $ `
            }}
          </v-card-text>

          <v-card-text class="pa-0 pl-3 pt-2 textCardMining">
            <span style="font-size: 1rem;">
              <i class="fas fa-sitemap"></i>
            </span>
            {{
              `TotalCoinsMined: ${Math.round(item.CoinInfo.TotalCoinsMined)} $ `
            }}
          </v-card-text>

          <v-card-text class="pa-0 pl-3 pt-2 textCardMining">
            <span style="font-size: 1rem;">
              <i class="fas fa-calendar-alt"></i>
            </span>
            {{ `AssetLaunchDate: ${item.CoinInfo.AssetLaunchDate} ` }}
          </v-card-text>

          <v-card-text class="pl-3 pt-2 textCardMining">
            <span style="font-size: 1rem;">
              <i class="fas fa-dollar-sign"></i>
            </span>
            {{ `Price: ${item.Price.USD} $` }}
          </v-card-text>

          <a
            class="linkCardMining"
            target="_blank"
            :href="`https://www.cryptocompare.com${item.CoinInfo.Url}`"
          >
            <span style="font-size: 1rem;" class="mr-2">
              <i class="fas fa-mouse"></i>
            </span>
            Доп. инофрмация</a
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseButton from '../components/BaseComponents/BaseButton.vue';
import BaseInput from '../components/BaseComponents/BaseInput.vue';

export default {
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      miningData: [],
      coin: '',
    };
  },
  methods: {
    async getApiMiningData(coin) {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/blockchain/mining/calculator?fsyms=${coin}&tsyms=USD&api_key=4b9a4ab5d678d62a4f000c38fafcdbee2fde445e9e3bd06f875e46b6a4ae53ff`
      );
      const result = await response.json();
      Object.keys(result.Data).filter((key) => {
        this.miningData.push(result.Data[key]);
      });
    },
    addСoin() {
      this.getApiMiningData(this.coin);
      this.coin = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.titleText {
  font-family: 'Russo One', sans-serif;
  font-weight: normal;
  color: #490c53;
  margin: 0 auto;
  text-transform: uppercase;
}
.titleCardMining {
  background-color: rgb(42, 139, 250);
  color: white;
  justify-content: center;
}
.linkCardMining {
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(42, 139, 250);
  color: white;
  padding: 10px;
}
.linkCardMining:hover {
  background-color: rgb(90, 157, 235);
}
</style>

<!-- 
1) Id - Уникальный идентификатор этой монеты.

2) Name - Внешнее сокращенное / символьное название монеты.

3) FullName - Полное название монеты.

4) ImageUrl - Cryptocompare размещает изображение для этого логотипа монет.

5) Url - Расширение URL для поиска монеты на сайте cryptocompare.com

6) NetHashesPerSecond - Общее количество хешей в секунду, которое имеет этот блокчейн.

7) BlockTime - Секунды, необходимые для добычи блока.

8) BlockReward - Количество активов, получаемых за майнинг блока.

9) TotalCoinsMined - Текущее предложение конкретного актива.

10) AssetLaunchDate - Дата первого выпуска этого ресурса в формате гггг-мм-дд.

11) MaxSupply - Максимальное предложение конкретного актива.

12) Price - цена
-->
