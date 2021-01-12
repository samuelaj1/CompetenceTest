<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    /* eslint-disable */
    import {db} from "@/firebaseConfig";
    import axios from "axios";


    export default {
        name: "App",
        data() {
            return {
                userInfo: this.$store.state.userInfo,
                subscription: {}
            };
        },
    };
</script>

<style>


    :root {
        --orange: #f26526;
        --blue: #059ca6;
        --black: #000000;
        --grey: rgba(0, 0, 0, 0.4);
        --gotham: "gothamLight", sans-serif;
        --gothamBold: "gotham", sans-serif;
        --gothamMedium: "gothamMedium", sans-serif;
        --deep-grey: rgba(15, 61, 71, 0.9);
        --deeper-grey: #0f3d47;
        --light-grey: #e5e5e5;
    }

    body {
        /*font-family: var(--gotham);*/
        background-color: #1C212E;
        color: white;
    }
</style>
