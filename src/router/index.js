import { createRouter, createWebHistory } from 'vue-router'; 

const router = createRouter({
    history: createWebHistory('/vue/dist'),
    routes: [
    {
        path: '/',
        component: () => import('@/views/Home.vue'), 
    },
    {
        path: '/signup',
        component: () => import('@/views/SignUp.vue'), 
    }, 
    {
        path: '/login',
        component: () => import('@/views/Login.vue'), 
    }, 
    {
        path: '/search',
        component: () => import('@/views/Search.vue'), 
    }, 
    {
        path: '/booking',
        component: () => import('@/views/Booking.vue'), 
    }, 
    {
        path: '/profile',
        component: () => import('@/views/Profile.vue'), 
        path: '/about',
        component: () => import('@/views/About.vue'), 
    },
    ], 
}); 

export default router; 


