<template>
  <div class="container" id="contentItem">
    <div class="row text-center">
      <div
        class="col-lg-10 offset-lg-1 col-sm-6 offset-sm-3 col-12 p-3 error-main"
      >
        <div class="row">
          <div class="col-lg-8 col-12 col-sm-10 offset-lg-2 offset-sm-1">
            <img src="../../public/assets/img/404.png" class="img-fluid" alt="">
            <p class="text-atvyellow mb-4" style="font-size: 25px">
              Whoops Something Went Wrong...
            </p>
            <p>Sorry the page your looking for cannot be found. </p>
            <router-link to="/" class="btn btn-atvyellow pl-5 pr-5 pt-3 pb-3 mt-5" style="border-radius: 10px;">GO HOME</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#contentItem {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
