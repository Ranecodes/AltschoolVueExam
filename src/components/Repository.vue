<template>
    <div class="container">
        <h1>Welcome to Github</h1>

        <div class="github-repos" v-for="repo in repos" :key="repo.id">
            <h2>{{ repo.name }}</h2>
            <p>{{ repo.description }}</p>
            <a :href="repo.html_url" target="_blank">View on Github</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios';



export default {
    name: 'RepositoryGithub',
    data() {
        return {
            repos: null,
        }
    },
    created() {
        axios.get('https://api.github.com/users/Ranecodes/repos')
            .then(response => {
                this.repos = response.data;
            })
    }
}
</script>

<style>
</style>