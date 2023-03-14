<template>
  <ul class="paginationMain">
    <li class="pagination-item">
      <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">First</button>
    </li>

    <li class="pagination-item">
      <button type="button" @click="onClickPage(page.name)">Previous</button>
    </li>

    <!-- Visible buttons start -->
    <li v-for="page in pages" :key="page.name" class="pagination-item">
      <button type="button" :disabled="page.isDisabled">{{ page.name }}</button>
    </li>

    <!-- ... -->

    <!-- Visible buttons end -->

    <li class="pagination-item">
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage">Next</button>
    </li>

    <li class="pagination-item">
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage">Last</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
        //when on the first page
        if (this.currentPage === 1) {
            return 1;
        }
        //when on the last page
        if (this.currentPage === this.totalPages) {
            return this.totalPages - this.maxVisibleButtons;
        }
        //when on the middle pages
        return this.currentPage - 1;
    },
    pages() {
        const range = [];
        for (
            let i = this.startPage;
            i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
            i++
        ) {
            range.push({
                name: i,
                isDisabled: i === this.currentPage,
            });
        }
        return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit('page-changed', 1);
    },
    onClickPreviousPage(){
        this.$emit('page-changed', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('page-changed', page);
    },
    onClickNextPage() {
      this.$emit('page-changed', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('page-changed', this.totalPages);
    },
    isPageActive(page) {
      return page === this.currentPage;
    },
  }
};
</script>

<style>
.paginationMain {
  list-style-type: none;
}
.pagination-item {
  display: inline-block;
}

.active {
  background-color: #4CAF50;
  color: white;
}
</style>
