import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('../views/Homepage.vue'),
    },
    {
        path: "/schedules",
        name: "Schedules",
        component: () => import('../views/Schedules.vue'),
    },
    {
        path: "/404", component: () => import('../views/errorPage.vue'),
    },
    {
        path: "*",
        redirect: "/404"
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
