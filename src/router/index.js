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
    },
    {
        path: '/profile/account',
        component: () => import('@/views/ProfileAccount.vue'), 
    },
    {
        path: '/profile/membership',
        component: () => import('@/views/ProfileMembership.vue'), 
    }, 
    {
        path: '/bookInfo',
        component: () => import('@/views/BookingInformation.vue'), 
    },
    {
        path: '/logout',
        component: () => import('@/views/Logout.vue'), 
    },
    ], 
}); 

export default router; 


