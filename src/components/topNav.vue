<template>
  <nav
    class="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg p-0"
    color-on-scroll="100"
    id="sectionsNav"
  >
    <div class="container-fluid">
      <div class="navbar-translate">
        <router-link to="/">
          <img
            src="../../public/assets/img/atv_logo.png"
            class="img-fluid ml-sm-4"
            style="width:70px"
            alt
          />
        </router-link>
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
            <router-link class="nav-link" to="/home" v-if="userInfo"
              >Home</router-link
            >
            <router-link class="nav-link" to="/" v-else>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/movies">Movies</router-link>
          </li>
          <li class="dropdown nav-item">
            <a
              href="#"
              class="dropdown-toggle nav-link"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons"></i> TV
              <div class="ripple-container"></div
            ></a>
            <div class="dropdown-menu dropdown-with-icons">
              <router-link to="/live-tv" class="dropdown-item text-dark">
                <i class="material-icons">tv</i> Live TV
              </router-link>
              <router-link to="/series" class="dropdown-item text-dark">
                <i class="material-icons">movie</i> Series List
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/magazine">Magazine</router-link>
          </li>
          <!--<li class="nav-item">-->
          <!--<router-link class="nav-link" to="/store">Store</router-link>-->
          <!--</li>-->
          <li class="nav-item">
            <router-link class="nav-link" to="/live-radio"
              >Live Radio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/help">Help</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto pt-2">
          <li
            class="dropdown nav-item profile_nav"
            v-if="$store.state.userInfo"
          >
            <a
              href="#"
              class="dropdown-toggle nav-link"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                v-lazy="
                  $store.state.userInfo.photo
                    ? $store.state.userInfo.photo
                    : '../../../assets/img/blank_profile.png'
                "
                alt=""
                style="height: 30px;"
                class="rounded-circle img fluid"
              />
              <span class="text-capitalize"
                >&nbsp;{{ ($store.state.userInfo || {}).first_name }}</span
              >
              <div class="ripple-container"></div>
            </a>
            <div class="dropdown-menu dropdown-with-icons">
              <router-link to="/account" class="dropdown-item text-dark">
                Profile
              </router-link>
              <router-link to="/logout" class="dropdown-item text-dark">
                Logout
              </router-link>
            </div>
          </li>
          <li class="p-2" v-if="!$store.state.userInfo">
            <router-link class="nav-link btn btn-outline-atvyellow" to="/login"
              >Login</router-link
            >
          </li>
          <li class="p-2" v-if="!$store.state.userInfo">
            <router-link class="nav-link btn btn-atvyellow" to="/register"
              >Register</router-link
            >
          </li>
          <li class="pl-5"></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      userInfo: this.$store.state.userInfo
    };
  }
};
</script>

<style scoped>
/* navbar */
.navbar.navbar-transparent {
  background: #00000036 !important;
}

.nav-item a {
  color: white;
  font-size: 17px !important;
  text-transform: none !important;
}

.navbar-transparent .nav-item a {
  color: white;
}

.navbar {
  box-shadow: none !important;
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
