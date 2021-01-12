import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
/* eslint-disable */


export default new Vuex.Store({
    state: {
        token: localStorage.getItem("atv_token") || null,
        userInfo: JSON.parse(localStorage.getItem("atv_userInfo")) || null,
        redirectPathLink: JSON.parse(localStorage.getItem("redirectPathLink")) || null,
        declaration: localStorage.getItem("intern_declaration") || false,
    },
    mutations: {
        retrieveToken(state, data) {
            console.log(data.access_token,data.data)
            state.token = data.access_token;
            state.userInfo = data.data;
        },
        updateUserInfo(state, data) {
            state.userInfo = data.data;
        },

        storeRedirectPath(state, data) {
            state.redirectPathLink = data;
        },

        destroyToken(state) {
            state.token = null;
            state.userInfo = null;
            state.socketInfo = null;
        }
    },
    getters: {
        loggedIn(state) {
            return state.token !== null;
        }
    },
    actions: {
        destroyToken(context) {
            if (context.getters.loggedIn) {
                return new Promise(resolve => {
                    localStorage.removeItem("atv_token");
                    localStorage.removeItem("atv_userInfo");
                    localStorage.removeItem("redirectPathLink");
                    context.commit("destroyToken");
                    resolve({
                        success: true
                    });
                });
            }
        },
        updateInfo(context, data) {
            return new Promise((resolve, reject) => {
                localStorage.setItem(
                    "atv_userInfo",
                    JSON.stringify(data.data)
                );
                context.commit("updateUserInfo", {
                    data: data.data,
                });
                resolve(data.data);

            });
        },
        login(context, data) {
            return new Promise((resolve, reject) => {
                axios.post(`https://api.aukiss.tv/api/web_login`, data).then((res) => {
                    if (res.data.success) {
                        const token = res.data.data.access_token;
                        localStorage.setItem("atv_token", token);
                        localStorage.setItem(
                            "atv_userInfo",
                            JSON.stringify(res.data.data.data)
                        );
                        context.commit("retrieveToken", {
                            data: res.data.data.data,
                        });
                        resolve(res.data.data);
                    } else {
                        reject(res)
                    }
                }).catch((err) => {
                    reject(err);
                })
            });
        },
        storeRedirectPath(context, data) {
            return new Promise((resolve, reject) => {
                localStorage.setItem(
                    "redirectPathLink",
                    JSON.stringify(data)
                );
                resolve(context.commit("storeRedirectPath", data));
            });
        },
        retrieveToken(context, credentials) {
            return new Promise((resolve, reject) => {
                axios
                    .post(
                        "https://api.aukiss.tv/api/web_register", credentials
                    )
                    .then(res => {
                        if (res.data.success) {
                            const token = res.data.access_token;

                            localStorage.setItem("atv_token", token);
                            localStorage.setItem(
                                "atv_userInfo",
                                JSON.stringify(res.data.data)
                            );
                            context.commit("retrieveToken", res.data);
                            resolve(res.data.data);

                        } else {
                            reject(res)
                        }
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        },
    },
    modules: {}
});