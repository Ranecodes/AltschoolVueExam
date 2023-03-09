<template>
    <div class="container">
    <h1>Welcome to Github</h1>
    <PaginationNum>
        <div class="github-repos" v-for="repo in repos" :key="repo.id" >
            <h2>{{ repo.name }}</h2>
            <p>{{ repo.description }}</p>
            <a :href="repo.html_url" target="_blank">View on Github</a>

        </div>
    </PaginationNum>
    </div>
    
</template>

<script>
import axios from 'axios';
import PaginationNum from '/src/actions/paginationNum.vue';






export default {
    name: 'RepositoryGithub',
    components: {
    PaginationNum,
},
    data() {
        return {
            repos: null,
        
        }
    },
    created() {
        axios.get('https://api.github.com/users/Ranecodes/repos')
            .then(response => {
                this.repos = response.data;
            }),
            axios.get('https://api.github.com/users/Ranecodes/repos?page=1&per_page=2')
            .then(response => {
                this.repos = response.data;
            })
    },
    
}
</script>

<style>
.github-repos{
    background-color: #f5f5f5;
    padding: 20px;
    margin: 20px;
    border-radius: 5px;
}
</style>