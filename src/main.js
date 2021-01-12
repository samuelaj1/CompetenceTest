import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LoadScript from 'vue-plugin-load-script';


Vue.use(LoadScript);

Vue.config.productionTip = false;

// For authentication
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         // this route requires auth, check if logged in
//         // if not, redirect to login page.
//         if (!store.getters.loggedIn) {
//             store
//                 .dispatch("storeRedirectPath", {
//                     path: to
//                 })
//                 .then(() => {
//                     next({
//                         name: "Login"
//                     });
//                 });
//         } else {
//             next();
//         }
//     } else if (to.matched.some(record => record.meta.requiresVisitor)) {
//         // this route requires auth, check if logged in
//         // if not, redirect to login page.
//         if (store.getters.loggedIn) {
//             next({
//                 path: "/home"
//             });
//         } else {
//             next();
//         }
//     } else {
//         next(); // make sure to always call next()!
//     }
// });


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
