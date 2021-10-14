<template>
  <v-container class="fill-height">
    <h1 class="titleText mb-6 mt-4">
      Актуальные финансовые новости:
    </h1>
    <v-row>
      <v-expansion-panels class="d-flex justify-center" v-model="autoСlose">
        <v-col
          md="2"
          xs="6"
          v-for="(news, index) in newsCurretnPage"
          :key="index"
        >
          <v-expansion-panel class="mb-4 expansion-panel">
            <v-img height="250" :src="news.imageurl"></v-img>
            <v-expansion-panel-header class="expansion-title pa-1 text-center">
              <h4>{{ news.title }}</h4>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="expansion-body">
              <div class="pb-4">
                {{ normalizeNewsText(news.body) }}
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
    <div class="pagination" v-if="allNews.length">
      <v-pagination
        v-model="pageNumber"
        :length="pages"
        total-visible="8"
        circle
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      allNews: [],
      newsPerPage: 12,
      pageNumber: 1,
      showCardBody: false,
      autoСlose: [],
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
    normalizeNewsText(text) {
      return text.replace(/(\[?&#.\d+;\]?)/g, '');
    },
    nullifyАutoСlose() {
      this.autoСlose = [];
    },
  },
  mounted() {
    this.getApiNewsData();
  },
  computed: {
    pages() {
      return Math.floor(this.allNews.length / this.newsPerPage);
    },
    newsCurretnPage() {
      this.nullifyАutoСlose();
      let from = (this.pageNumber - 1) * this.newsPerPage;
      let to = from + this.newsPerPage;
      return this.allNews.slice(from, to);
    },
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
.pagination {
  margin: 0 auto;
  cursor: pointer;
}
.expansion-title {
  align-items: center;
  font-weight: normal;
  text-transform: uppercase;
  min-height: 150px;
  line-height: 24px;
  overflow: hidden;
}
.expansion-panel {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>
