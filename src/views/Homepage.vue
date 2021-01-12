<template>
    <div class="text-light">
        <topnav></topnav>
        <div class="main main-raised" style="margin: 0px; background-color: #1C212E;">
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
                    <div class="row mb-5" style="margin-top:6rem;">
                        <div class="col-md-4 offset-md-4">
                            <div class="card">
                                <div
                                    class="card-header card-header-primary text-center"
                                >
                                    <h6>Add Task to schedules</h6>
                                </div>
                                <form @submit.prevent="submit">
                                    <div class="card-body mt-4">
                                        <div class="form-group">
                                            <div class="error text-danger mb-3 hidden"></div>
                                            <label>Owner</label>
                                            <select class="form-control m-0" v-model="taskData.owner" required>
                                                <option :value="o.name" v-for="(o,i) in owner" :key="i">{{o.name}}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Task </label>
                                            <textarea rows="7" class="form-control"  v-model="taskData.task" required
                                                      style="resize: vertical; height: 60px;"></textarea>
                                        </div>
                                        <!--<div class="form-group">-->
                                        <!--<label class="pull-left">Date</label>-->
                                        <!--<input type="text" class="form-control datetimepicker" v-model="taskData.date_created"-->
                                        <!--:value="getTodaysDate()" required>-->
                                        <!--</div>-->
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="pull-left">Start Time</label>
                                                    <input type="text" class="form-control datetimepicker1" id="datetimepicker1"
                                                           required
                                                           onkeydown="event.preventDefault()">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="pull-left">End Time</label>
                                                    <input type="text" class="form-control datetimepicker2" id="datetimepicker2"
                                                           required
                                                           onkeydown="event.preventDefault()">
                                                </div>
                                            </div>
                                        </div>
                                        <!--<hr>-->
                                        <div class="text-center mt-4 mb-3">
                                            <button type="submit" class="cover-edit-btn btn btn-green px-5">
                                                Add Task
                                            </button>
                                        </div>

                                    </div>
                                </form>
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
        name: "Home",
        data() {
            return {
                isLoading: false,
                fullPage: true,
                height: 128,
                width: 128,
                userInfo: this.$store.state.userInfo,
                owner: [{name: 'Samuel Agyekum'}, {name: "Daniel Danso"}],
                taskData: {
                    owner: '',
                    task: '',
                    date_created: moment().format('MM/DD/YYYY'),
                    start_time: '',
                    end_time: ''
                },
                disableTimes: [],
                allData:[]
            };
        },
        methods: {
            submit() {
                this.taskData.start_time = document.getElementById('datetimepicker1').value;
                this.taskData.end_time = document.getElementById('datetimepicker2').value;
                db.firestore.collection("task_manager").add(this.taskData).then(() => {
                    this.taskData = {};
                    Swal.fire({
                        title: "Success!",
                        text: "Task has been added successfully...",
                        icon: "success",
                        confirmButtonText: "close"
                    }).then((res) => {
                        if (res) {
                            this.$router.push('/schedules')
                        }
                    });
                }).finally(() => {
                    this.isLoading = false;
                })
            },
            getTodaysDate() {
                return moment().format('MM/DD/YYYY');
            },

            getTasks() {
                var me = this;
                this.isLoading = true;
                db.firestore.collectionGroup('task_manager').onSnapshot(function (querySnapshot) {
                    me.disableTimes = [];
                    querySnapshot.forEach(function (doc) {
                        let data = doc.data()
                        let arr = [];
                        arr.push(moment(data.start_time, 'DD/MM/YYYY, h:mm:ss a'), moment(data.end_time, 'DD/MM/YYYY, h:mm:ss a'));
                        me.disableTimes.push(arr);
                        me.allData.push(data)
                    });
                    me.isLoading = false;
                    datePicker(me.disableTimes,me.allData);
                });
            },

        },
        components: {
            topnav: () => import('@/components/darktopNav'),
            footernav: () => import('@/components/footer'),
            Loading: () => import('vue-loading-overlay'),
        },
        created() {
            document.title = 'Home';
            this.getTodaysDate();
            this.$loadScript("/assets/js/bootstrap-datetimepicker.js")
                .then(() => {
                    this.getTasks();
                })


        },
    };
</script>

<style scoped>
    .card {
        margin-bottom: 0px !important;
        margin-top: 10px !important;
        border-radius: 10px !important;
    }

    .category_list li {
        margin-bottom: 1.2rem;
    }
</style>
