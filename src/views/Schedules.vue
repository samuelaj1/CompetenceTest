<template>
  <div class="text-light">
    <topnav></topnav>
    <div
      class="main main-raised"
      style="margin: 0px; background-color: #1C212E;"
    >
      <loading
        :active.sync="isLoading"
        :can-cancel="false"
        loader="dots"
        :is-full-page="fullPage"
        :height="height"
        :width="width"
        background-color="#6b6969"
      ></loading>
      <div class="section mt-5" style="min-height: 87vh">
        <div class="custom-container-fluid">
          <div class="row mt-5 mb-5">
            <div class="col-md-12">
              <div
                class="card"
                style="box-shadow: 0px 3px 80px rgba(0, 0, 0, 0.05); border-radius: 20px;"
              >
                <div class="card-body">
                  <div class="card-calendar">
                    <div class="ps-child">
                      <div id="fullCalendar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footernav></footernav>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
    import axios from "axios";
    import "vue-loading-overlay/dist/vue-loading.css";
    import {db} from "@/firebaseConfig";
    import Swal from "sweetalert2";

    export default {
        name: "Schedules",
        data() {
            return {
                isLoading: false,
                fullPage: true,
                height: 128,
                width: 128,
                userInfo: this.$store.state.userInfo,
                taskData: {
                    owner: '',
                    task: '',
                    date_created: moment().format('MM/DD/YYYY'),
                    start_time: '',
                    end_time: ''
                }
            };
        },
        methods: {
            getTasks() {
                var me = this;
                this.isLoading = true;
                db.firestore.collectionGroup('task_manager').onSnapshot(function (querySnapshot) {
                    var events = [];
                    querySnapshot.forEach(function (doc) {
                        let data = doc.data();
                        data.id = doc.id;
                        events.push({
                            title: doc.data().task,
                            start: moment(doc.data().start_time, 'DD/MM/YYYY, h:mm:ss a'),
                            end: moment(doc.data().end_time, 'DD/MM/YYYY, h:mm:ss a'),
                            allDay: false,
                            className: 'event-green'
                        });
                    });
                    initFullCalendar(events);
                    me.isLoading = false;
                })
            },

        },
        components: {
            topnav: () => import('@/components/darktopNav'),
            footernav: () => import('@/components/footer'),
            Loading: () => import('vue-loading-overlay'),
        },
        created() {
            document.title = 'Home';
            this.$loadScript("/assets/js/fullcalendar.min.js")
                .then(() => {
                    this.getTasks();
                });
        },
    };
</script>

<style scoped>
    .card {
        margin-bottom: 0px !important;
        margin-top: 10px !important;
        border-radius: 10px !important;
    }
</style>
