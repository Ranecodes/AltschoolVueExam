<template>
    <div>
        <slot>
        </slot>
        <div class="pagination-row">
            <button class="pagination-btn" @click="prevPage">Prev</button>
            <span v-for="(item, index) in new Array(7)" :key="index">
                <button class="pagination-btn" >{{ index + 1 }}</button>
            </span>
            <button class="pagination-btn" @click="nextPage">Next</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PaginationNum',
    data() {
        return {
            repos: null,
            recordsPerPage:  axios.get('https://api.github.com/users/Ranecodes/repos?page=1&per_page=2')
            .then(response => {
                this.repos = response.data;
            }),
            page: 1,
        
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

    methods: {
            nextPage() {
                this.page++;
                axios.get('https://api.github.com/users/Ranecodes/repos?page=' + this.page + '&per_page=2')
                .then(response => {
                    this.repos = response.data;
                })
            },
            prevPage() {
                this.page--;
                axios.get('https://api.github.com/users/Ranecodes/repos?page=' + this.page + '&per_page=2')
                .then(response => {
                    this.repos = response.data;
                })
            },
            goToPage(page) {
                this.page = page;
                axios.get('https://api.github.com/users/Ranecodes/repos?page=' + this.page + '&per_page=2')
                .then(response => {
                    this.repos = response.data;
                })
            }
        }
    }
</script>

<style>
.pagination-row {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.pagination-btn{
    background-color: #f5f5f5;
    padding: 15px;
    margin: 7px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
</style>