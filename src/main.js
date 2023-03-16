import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import RepoDetails from './components/RepoDetails.vue'
import RepositoryGithub from './components/Repository.vue'
import NotFound from './components/NotFound.vue'
import HomePage from './components/HomePage.vue'

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/repos',
            name: 'RepositoryGithub',
            component: RepositoryGithub
        },
        {
            path: '/repo/:id',
            name: 'RepoDetails',
            component: RepoDetails,
            props: true
        },
        {
            path: '/:notFound(.*)',
            name: 'NotFound',
            component: NotFound
        }
    ]
})

createApp(App).use(router).mount('#app')





