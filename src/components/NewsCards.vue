<template>
  <v-container class="fill-height">
    <h1 class="white--text text-center mb-6 mt-4">
      Актуальные финансовые новости:
    </h1>
    <v-row>
      <v-expansion-panels class="d-flex justify-start">
        <v-col md="2" xs="6" v-for="(news, index) in allNews" :key="index">
          <v-expansion-panel class="mb-4">
            <v-img height="250" :src="news.imageurl"></v-img>
            <v-expansion-panel-header>
              <h4>{{ news.title }}</h4>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="pb-4">
                {{ news.body }}
              </div>
              <hr />
              <div class="pt-2">
                <p class="mb-0">
                  Источник
                  <span class="font-weight-bold">{{ news.source }}</span>
                </p>
                <a target="_blank" :href="news.url" class="text-decoration-none"
                  >Перейти к источнику</a
                >
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-col>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      allNews: [],
    };
  },
  methods: {
    getApiNewsData() {
      fetch(
        'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=4b9a4ab5d678d62a4f000c38fafcdbee2fde445e9e3bd06f875e46b6a4ae53ff'
      )
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          this.allNews.push(...result.Data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    console.log(this.allNews);
    this.getApiNewsData();
  },
};
</script>
