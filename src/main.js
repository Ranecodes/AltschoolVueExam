import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import RepoDetails from './components/RepoDetails.vue'
import RepositoryGithub from './components/Repository.vue'
import NotFound from './components/NotFound.vue'
import HomePage from './components/HomePage.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)
library.add(fas)

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

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')






