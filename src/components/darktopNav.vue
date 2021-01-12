<template>
  <nav
    class="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg"
    color-on-scroll="100"
    id="sectionsNav"
  >
    <div class="container-fluid">
      <div class="navbar-translate">
        <!--<router-link to="/">-->
        <!--<img-->
        <!--src="../../public/assets/img/atv_logo.png"-->
        <!--class="img-fluid ml-sm-4"-->
        <!--style="width:70px"-->
        <!--alt-->
        <!--/>-->
        <!--</router-link>-->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/schedules"
              >Schedules</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ml-auto pt-2">
          <li
            class="dropdown nav-item profile_nav"
            v-if="$store.state.userInfo"
          >
            <!--<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false">-->
            <!--&lt;!&ndash;<img src="#" alt="" style="height: 30px;width: 30px;"&ndash;&gt;-->
            <!--&lt;!&ndash;class="rounded-circle img fluid">&ndash;&gt;-->
            <!--&lt;!&ndash;<span class="text-capitalize">&nbsp;{{($store.state.userInfo ||{}).first_name}}</span>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="ripple-container"></div>&ndash;&gt;-->
            <!--</a>-->
            <div class="dropdown-menu dropdown-with-icons">
              <!--<router-link to="/account" class="dropdown-item text-dark">-->
              <!--Profile-->
              <!--</router-link>-->
              <!--<router-link to="/logout" class="dropdown-item text-dark">-->
              <!--Logout-->
              <!--</router-link>-->
            </div>
          </li>
          <li class="pl-5"></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "darknavigation",
  data() {
    return {
      userInfo: this.$store.state.userInfo
    };
  }
};
</script>

<style scoped>
/* navbar */
/*.navbar.navbar-transparent {*/
/*background: rgba(255, 255, 255, 0.12) !important;*/
/*}*/

.nav-item a {
  color: white;
  font-size: 17px !important;
  text-transform: none !important;
}

.navbar-transparent .nav-item a {
  color: white;
}

.navbar {
  /*box-shadow: none !important;*/
  background: #1c212e !important;
}

@media (max-width: 991px) {
  .navbar.navbar-transparent .navbar-toggler .navbar-toggler-icon {
    background-color: white;
  }

  .navbar-collapse .navbar-nav .nav-item .nav-link {
    color: black !important;
    margin: 5px 15px;
  }
}

.dropdown-item:hover .material-icons {
  color: white !important;
}

.router-link-exact-active {
  color: #a88d30 !important;
}
</style>
