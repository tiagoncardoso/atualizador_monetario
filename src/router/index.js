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
            {
                path: '/usuario/novo',
                name: 'usuario novo',
                component: () => import(/* webpackChunkName: "usuario novo" */ '@/views/usuario/novo/main'),
            },
            {
                path: '/usuario',
                name: 'usuario',
                component: () => import(/* webpackChunkName: "usuario" */ '@/views/usuario/indexPage'),
            },
            {
                path: 'usuario/edit/:id',
                name: 'usuario edicao',
                component: () => import(/* webpackChunkName: "usuario novo" */ '@/views/usuario/novo/main'),
            },
        ],
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
