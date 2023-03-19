<template>
  <div class="container">
    <!-- Seaching the repository feature -->
    <div class="search-bar">
      <input type="text" placeholder="Find a repository..." v-model="search" />
      <button class="search-btn" @click="searchRepo">Search</button>
    </div>

    <div v-if="loading">
      <LoaderMain />
    </div>
    <div class="repo-box" v-if="repos.length">
      <div class="each-repo" v-for="repo in repos" :key="repo.id">
        <hr />
        <RouterLink :to="{ name: 'RepoDetails', params: { id: repo.id } }">
          <div class="each-repo-text">
            <h2>{{ repo.name }}</h2>
            <p>{{ repo.description }}</p>
            <p>{{ repo.language }}</p>
          </div>
        </RouterLink>
      </div>
      <hr>
    </div>

    <!-- Searching the repository feature -->
    <div class="pag-btn-row">
      <button class="pag-btn" @click="prevPage" :disabled="page === 1">Prev</button>
      

      <div class="num-row">
        <button
          class="pag-btn" 
          v-for="pageNumber in pageCount"
          :key="pageNumber"
          @click="goToPage(pageNumber)"
        >
          1
        </button>
        <button
          class="pag-btn" 
          v-for="pageNumber in pageCount"
          :key="pageNumber"
          @click="goToPage(pageNumber + 1)"
        >
          2
        </button>
        <button
          class="pag-btn" 
          v-for="pageNumber in pageCount"
          :key="pageNumber"
          @click="goToPage(pageNumber + 2)"
        >
          3
        </button>
        <button
          class="pag-btn" 
          v-for="pageNumber in pageCount"
          :key="pageNumber"
          @click="goToPage(pageNumber + 3)"
        >
          4
        </button>
        <button
          class="pag-btn" 
          v-for="pageNumber in pageCount"
          :key="pageNumber"
          @click="goToPage(pageNumber + 4)"
        >
          5
        </button>
      </div>
      <button class="pag-btn"  @click="nextPage" :disabled="page === 5">Next</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { RouterLink } from "vue-router";
import LoaderMain from "../actions/loader.vue";
import searchRepositories from "@/services/searchRepositories";

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
    async searchRepo() {
      this.loading = true;
      this.repos = await searchRepositories(this.search, "Ranecodes");
      this.loading = false;
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
.container {
  background-color: #24292e;
  padding: 100px 200px;
  border-radius: 5px;
}
input[type="text"] {
  font-family: "DM Sans", sans-serif;
  padding: 10px 10px 10px 15px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  width: 100%;
  font-size: 1rem;
  color: #24292e;
}
.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-btn {
  font-family: "DM Sans", sans-serif;
  background-color: #7e12ff;
  color: #fff;
  border: none;
  padding: 0.6rem 3rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
}
hr {
  width: 100%;
  border: 1px solid #e7e6e6;
}
.repo h2 {
  font-size: 18px;
  margin-bottom: 5px;
}

.repo p {
  margin-bottom: 5px;
  font-size: 14px;
}
.each-repo {
  padding-top: 2.1875rem;
}
.repo-box {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.each-repo-text {
  padding-left: 1.5rem;
  padding-top: 10px;
  font-size: 1rem;
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
}
.each-repo-text:hover {
  color: #7e12ff;
}
.num-row{
  border: none;
}
.pag-btn-row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
}
.pag-btn{
  font-family: "DM Sans", sans-serif;
  background-color: #7e12ff;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-left: 23px;
}
.pag-btn:hover{
  background-color: #A76BFF;
}
.pag-btn:disabled{
  background-color: #A76BFF;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .container {
    padding: 50px;
  }
  
  input[type="text"] {
    font-size: 0.9rem;
  }
  
  .search-btn {
    padding: 0.6rem 2rem;
  }
  
  .each-repo-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 425px) {
  .container {
    padding: 50px;
  }
  
  input[type="text"] {
    font-size: 0.8rem;
  }
  
  .search-btn {
    padding: 0.5rem 1.5rem;
  }
  
  .each-repo-text {
    font-size: 0.8rem;
  }
  .num-row{
    display: none;
  }
}

</style>
