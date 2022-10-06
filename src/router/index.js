import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/login/main'),
    },
    {
        path: '/',
        name: 'base',
        component: () => import(/* webpackChunkName: "base" */ '../views/containerPage'),
        children: [
            {
                path: '/calculadora/:tipoCalculo',
                name: 'calculadora',
                component: () => import(/* webpackChunkName: "calculadora" */ '@/views/calculadora/main'),
            },
            {
                path: '/home',
                name: 'dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Dashboard'),
            },
        ]
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
