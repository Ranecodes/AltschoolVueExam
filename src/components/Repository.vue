<template>
  <div class="container">
    <h1>Welcome to Github</h1>
    <ul>
      <li v-for="repo in repos" :key="repo.id">{{ repo.name }}</li>
    </ul>
    <button @click="page--" :disabled="page === 1">Previous</button>
    <button @click="page++" :disabled="page === 5">Next</button>

    <div>
      <button
        v-for="pageNumber in pageCount"
        :key="pageNumber"
        @click="page = pageNumber"
      >
        1
      </button>
      <button
        v-for="pageNumber in pageCount"
        :key="pageNumber"
        @click="page = pageNumber + 1"
      >
        2
      </button>
      <button
        v-for="pageNumber in pageCount"
        :key="pageNumber"
        @click="page = pageNumber + 2"
      >
        3
      </button>
      <button
        v-for="pageNumber in pageCount"
        :key="pageNumber"
        @click="page = pageNumber + 3"
      >
        4
      </button>
      <button
        v-for="pageNumber in pageCount"
        :key="pageNumber"
        @click="page = pageNumber + 4"
      >
        5
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RepositoryGithub",
  data() {
    return {
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
      const url = `https://api.github.com/users/Ranecodes/repos?page=${this.page}&per_page=${this.perPage}`;
      const response = await axios.get(url);
      this.repos = response.data;
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
