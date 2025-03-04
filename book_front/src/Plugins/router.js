import {createRouter, createWebHistory} from "vue-router";
import {defineAsyncComponent} from "vue";

const routers = [
    {
        path: '/',
        component: () => import('../Pages/HomePage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue')),
        }
    },
    {
        path: '/book_info',
        component: () => import('../Pages/BookInfoPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        }
    },
    {
        path: '/login',
        component: () => import('../Pages/LoginPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/BlankLayout.vue'))
        }
    },
]

export default createRouter({
    history: createWebHistory(),
    routes: routers
})
