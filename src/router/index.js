import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import { useLoginStore }from '../store/index.js'

const routes = [
    { path: '/', name: 'home', component: Home, meta: {requiresAuth:true } },
    { path: '/login', name: 'login', component: Login },
    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


// router.beforeEach((to, from, next) => {
//     const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//       const store = useLoginStore()
//     if (to.meta.requiresAuth && !store.isLoging) {
        
//         return next('/login')
//     }else  next()
 
//   // if the user is not authenticated, `next` is called twice

// })


export default router