<template>
    <div class="preloader">
        <img :src="require('/src/assets/1474.gif')" alt="preloader gif">
    </div>
</template>

<script>
export default {
    name: "preloaderVue",
    
};
</script>

<style>
.preloader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #24292e;
}
</style>