<template>
  <div>
    <div class="wrapper">
      <preloaderVue class="preloader" v-if="loading
      "/>
      <NavBar />
    </div>
    <RouterView/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import preloaderVue from '@/actions/preloader.vue';



export default {
  name: 'App',
  components: {
    NavBar,
    preloaderVue,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #24292e;
}
.wrapper {
  position: relative;
}
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #24292e;
}
</style>