<template>
  <div class="container">
    <h1>Welcome to Github</h1>

    <!-- Seaching the repository feature -->
    <p>Search for a repository</p>
    <input type="text" v-model="search" />
    <button @click="searchRepo">Search</button>
    <div v-if="loading">
      <LoaderMain />
    </div>
    <div v-if="repos.length">
      <div v-for="repo in repos" :key="repo.id">
        <RouterLink :to="{ name: 'RepositoryGithub', params: { id: repo.id } }">
          <div>
            <h2>{{ repo.name }}</h2>
            <p>{{ repo.description }}</p>
            <p>{{ repo.language }}</p>
          </div>
        </RouterLink>
      </div>
    </div>

    <!-- Searching the repository feature -->

    <!-- <div v-for="repo in repos" :key="repo.id">
      <RouterLink :to="{ name: 'RepoDetails', params: { id: repo.id } }">
        <div class="github-repos">
          <h3>{{ repo.name }}</h3>
          <p>{{ repo.description }}</p>
          <p>{{ repo.language }}</p>
          <a :href="repo.html_url" target="_blank" v-on:click.stop
            >View on Github</a
          >
        </div>
      </RouterLink>
    </div>
    <div v-if="loading">
      <LoaderMain />
    </div> -->
    <button @click="prevPage" :disabled="page === 1">Previous</button>
    <button @click="nextPage" :disabled="page === 5">Next</button>

    <div>
      <button
        v-for="pageNumber in pageCount"
        :key="pageNumber"
        @click="goToPage(pageNumber)"
      >
        1
      </button>
      <button
        v-for="pageNumber in pageCount"
        :key="pageNumber"
        @click="goToPage(pageNumber + 1)"
      >
        2
      </button>
      <button
        v-for="pageNumber in pageCount"
        :key="pageNumber"
        @click="goToPage(pageNumber + 2)"
      >
        3
      </button>
      <button
        v-for="pageNumber in pageCount"
        :key="pageNumber"
        @click="goToPage(pageNumber + 3)"
      >
        4
      </button>
      <button
        v-for="pageNumber in pageCount"
        :key="pageNumber"
        @click="goToPage(pageNumber + 4)"
      >
        5
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { RouterLink } from "vue-router";
import LoaderMain from "../actions/loader.vue";


export default {
  name: "RepositoryGithub",
  components: {
    LoaderMain,
    RouterLink,
  },
  data() {
    return {
      loading: false,
      page: 1,
      perPage: 6,
      repos: [],
    };
  },
  created() {
    this.fetchRepos();
  },

  methods: {
    async fetchRepos() {
      this.loading = true;
      axios
        .get(
          `https://api.github.com/users/Ranecodes/repos?page=${this.page}&per_page=${this.perPage}`
        )
        .then((response) => {
          this.repos = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goToPage(page) {
      this.page = page;
      window.scrollTo(0, 0);
      this.fetchRepos();
    },
    nextPage() {
      this.page++;
      window.scrollTo(0, 0);
      this.fetchRepos();
    },
    prevPage() {
      this.page--;
      window.scrollTo(0, 0);
      this.fetchRepos();
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.repos.length / this.perPage);
    },
  },

  watch: {
    page() {
      this.fetchRepos();
    },
  },
};
</script>

<style>
.github-repos {
  background-color: #f5f5f5;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
}
</style>
