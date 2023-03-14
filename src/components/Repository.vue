<template>
  <div class="container">
    <h1>Welcome to Github</h1>
    <ul>
      <li v-for="repo in repos" :key="repo.id">{{ repo.name }}</li>
    </ul>
    <button @click="page--;" :disabled="page===1" >Previous</button>
    <span>{{ page }}</span>
    <button @click="page++;" :disabled="page===5">Next</button>

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
