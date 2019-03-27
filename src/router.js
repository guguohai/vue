import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from './layout/MainLayout.vue';
import Home from './views/home/Home.vue';
import Eval1 from './views/evaluation/Eval1.vue';
import Eval2 from './views/evaluation/Eval2.vue';
import Table from './views/sort/Table.vue';
import Settings from './views/profile/Settings.vue';
import Account from './views/profile/Account.vue';
import Login from './views/Login.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'mainLayout',
            component: MainLayout,
            children: [
                {
                    path: '/',
                    name: 'home',
                    redirect: '/home'
                },
                {
                    path: '/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/account',
                    name: 'account',
                    component: Account
                },
                {
                    path: '/settings',
                    name: 'settings',
                    component: Settings
                },
                {
                    path: '/about',
                    name: 'about',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/home/About.vue')
                }, {
                    path: '/table',
                    name: 'table',
                    component: Table
                }, {
                    path: '/eval1/:id',
                    name: 'eval1',
                    component: Eval1
                }, {
                    path: '/eval2',
                    name: 'eval2',
                    component: Eval2
                }

            ],
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ]
})
