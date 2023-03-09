<template>
<!-- Pagination Component -->
    <ul class="paginationContainer">
        <li class="pagination-item">
            <a href="#" @click.prevent="onClickFirstPage" :class="isInFirstPage? 'disabled':''" :disabled="isInFirstPage">First</a>
        </li>
        <li :key="page.id" v-for="page in pages" class="pagination-item">
            <a href="#" @click.prevent="onClickPage(page.name)" :disabled="page.isDisabled" :class="{ active: isPageActive(page.name) }">{{ page.name }}</a>
        </li>
        <li class="pagination-item">
            <a href="#" @click.prevent="onClickLastPage" :class="isInLastPage? 'disabled':''" :disabled="isInLastPage">Last</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'PaginationHelp',
    props: {
        total: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        }
    },
    computed: {
        pages() {
            let pages = [];
            let totalPages = Math.ceil(this.total / this.perPage);
            let startPage = 1;
            let endPage = totalPages;
            let isMaxSized = false;

            if (totalPages > 7) {
                isMaxSized = true;
                startPage = Math.max(this.currentPage - 3, 1);
                endPage = Math.min(startPage + 6, totalPages);
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push({
                    name: i,
                    isDisabled: false
                });
            }

            if (isMaxSized && startPage > 1) {
                pages.unshift({
                    name: '...',
                    isDisabled: true
                });
                pages.unshift({
                    name: 1,
                    isDisabled: false
                });
            }

            if (isMaxSized && endPage < totalPages) {
                pages.push({
                    name: '...',
                    isDisabled: true
                });
                pages.push({
                    name: totalPages,
                    isDisabled: false
                });
            }

            return pages;
        },
        isInFirstPage() {
            return this.currentPage === 1;
        },
        isInLastPage() {
            return this.currentPage === Math.ceil(this.total / this.perPage);
        }
    },
    methods: {
        onClickPage(page) {
            if (page === '...') {
                return;
            }
            this.$emit('page-changed', page);
        },
        onClickFirstPage() {
            if (this.isInFirstPage) {
                return;
            }
            this.$emit('page-changed', 1);
        },
        onClickLastPage() {
            if (this.isInLastPage) {
                return;
            }
            this.$emit('page-changed', Math.ceil(this.total / this.perPage));
        },
        isPageActive(page) {
            return this.currentPage === page;
        }
    }
}
</script>

<style>
.paginationContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
}
.pagination-item {
    margin: 0 5px;
}
</style>