import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import RepoDetails from './components/RepoDetails.vue'
import RepositoryGithub from './components/Repository.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: RepositoryGithub },
    { path: '/repo/:id', component: RepoDetails, props: true }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

createApp(App).use(router).mount('#app')
createApp(App).mount('#app')
