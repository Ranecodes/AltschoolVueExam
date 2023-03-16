import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'RepositoryGithub',
            component: () => import('./components/Repository.vue')
        },
        {
            path: '/repo/:id',
            name: 'RepoDetails',
            component: () => import('./components/RepoDetails.vue')
        },
        // {
        //     path: '/external/:url',
        //     name: 'External',
        //     beforeEnter(to) {
        //       window.location = decodeURIComponent(to.params.url);
        //     }
        // }
    ]
})

createApp(App).use(router).mount('#app')





