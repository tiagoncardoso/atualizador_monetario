import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/login/main'),
    },
    {
        path: '/calculadora',
        name: 'calculadora',
        component: () => import(/* webpackChunkName: "calculadora" */ '@/views/calculadora/main'),
    },
    {
        path: '/indices/Inpc',
        name: 'indices',
        component: () => import(/* webpackChunkName: "indices" */ '@/views/indices/IndicesInpc'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
