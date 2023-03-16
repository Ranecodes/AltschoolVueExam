<template>
    <div>
        <h1>Home</h1>
        <p>Search for a repository</p>
        <input type="text" v-model="search" />
        <button @click="searchRepo">Search</button>
        <div v-if="loading">
        <LoaderMain />
        </div>
        <div v-if="repos.length">
        <div v-for="repo in repos" :key="repo.id">
            <RouterLink :to="{name: 'RepositoryGithub', params: {id: repo.id}}">
            <div>
                <h2>{{ repo.name }}</h2>
                <p>{{ repo.description }}</p>
                <p>{{ repo.language }}</p>
            </div>
            </RouterLink>
        </div>
        </div>
    </div>
</template>

<script>

import searchRepositories from "/src/services/searchRepositories.js";

export default {
    name: "HomePage",
    data() {
        return {
            search: "",
            repos: [],
            loading: false,
        };
    },
    async created() {
        this.loading = true;
        this.repos = await searchRepositories("Ranecodes")
        this.loading = false;
    },
    methods: {
        async searchRepo() {
            this.loading = true;
            this.repos = await searchRepositories(this.search, "Ranecodes")
            this.loading = false;
        },
    },
    computed: {
        filteredRepo() {
            return this.repos.filter((repo) => {
                const nameMatch = repo.name
                    .toLowerCase()
                    .includes(this.search.toLowerCase());
                const descriptionMatch = repo.description
                    .toLowerCase()
                    .includes(this.search.toLowerCase());
                return nameMatch || descriptionMatch;
            });
        },
    }
};
</script>