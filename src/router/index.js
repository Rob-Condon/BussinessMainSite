import Vue from 'vue'
import HomePage from '@/components/Home/HomePage'
import Router from 'vue-router'

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        }
    ]
})