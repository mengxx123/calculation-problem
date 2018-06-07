import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Exam = resolve => require(['@/views/Exam'], resolve)
const QuickHome = resolve => require(['@/views/QuickHome'], resolve)
const QuickExam = resolve => require(['@/views/QuickExam'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/exam/:type',
        component: Exam
    },
    {
        path: '/quick',
        component: QuickHome
    },
    {
        path: '/quickExam/:type',
        component: QuickExam
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
