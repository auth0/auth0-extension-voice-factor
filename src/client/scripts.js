(function () {
    var ResponseCode = {
        SUCCESS: "SUC"
    };

    function record(callback) {
        var constraints = { audio: true };

        navigator.getUserMedia(constraints, onMediaSuccess, onMediaError);

        function onMediaSuccess(stream) {
            var mediaRecorder = new MediaStreamRecorder(stream);

            mediaRecorder.mimeType = "audio/wav";
            mediaRecorder.start(4000);
            mediaRecorder.ondataavailable = function (blob) {
                mediaRecorder.stop();

                callback(null, blob);
            };
        }

        function onMediaError(error) {
            callback(error);
        }
    }

    Vue.component('animated-recording-button', {
        template: '<div class="btn btn-primary" v-on:click="start">{{label}}</div>',
        data: function () {
            return {
                label: "START RECORDING"
            }
        },
        methods: {
            start: function () {
                var vm = this;

                function animate(time) {
                    requestAnimationFrame(animate);
                    TWEEN.update(time);
                }

                this.$emit('start');

                new TWEEN.Tween({ counter: 4 })
                    .to({ counter: 0 }, 4000)
                    .onUpdate(function () {
                        if (this.counter > 0) {
                            vm.label = "RECORDING (" + this.counter.toFixed(0) + "s)";
                        } else {
                            vm.label = "START RECORDING";
                        }
                    })
                    .start();

                animate()
            }
        }
    });

    var EnrollmentViewModel = {
        template: "#tpl-enrollment",
        data: function () {
            return {
                alert: null,
                recording: false,
                recordings: [],
                enrollments: 0,
                previewRecordingUrl: null
            };
        },
        watch: {
            previewRecordingUrl: function () {
                this.$refs.player.load();
            }
        },
        methods: {
            start: function (event) {
                var vm = this;

                vm.alert = null;
                vm.recording = true;

                record(function (error, blob) {
                    vm.recording = false;

                    if (error) {
                        console.log(error);
                        vm.alert = "An unknown error occurred.";

                        return;
                    }

                    vm.recordings.push(blob);
                    vm.previewRecordingUrl = URL.createObjectURL(blob);
                });
            },
            submit: function (event) {
                var vm = this;

                var formData = new FormData();
                formData.append('audio-blob', vm.recordings[vm.recordings.length - 1]);

                $.ajax({
                    url: './api/web/enroll',
                    headers: {
                        "X-CSRF-Token": $("#csrf_token").val()
                    },
                    data: formData,
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    success: function (result) {
                        vm.previewRecordingUrl = null;

                        switch (result.ResponseCode) {
                            case ResponseCode.SUCCESS:
                                vm.enrollments += 1;

                                if (vm.enrollments >= 4) {
                                    vm.$root.$data.route = window.location.hash = "#/authentication";
                                }
                                break;

                            default:
                                vm.recordings.pop();
                                vm.alert = result.Result;
                                break;
                        }

                    },
                    error: function (error) {
                        console.log(error);
                        vm.alert = "An unknown error occurred.";
                    }
                });
            },
            cancel: function (event) {
                $("#continue").submit();
            }
        }
    };

    var WebAuthenticationViewModel = {
        template: "#tpl-web-authentication",
        data: function () {
            return {
                alert: null,
                recording: false
            };
        },
        methods: {
            start: function (event) {
                var vm = this;

                vm.alert = null;
                vm.recording = true;

                record(function (error, blob) {
                    if (error) {
                        console.log(error);
                        vm.alert = "An unknown error occurred.";

                        return;
                    }

                    var formData = new FormData();
                    formData.append('audio-blob', blob);

                    $.ajax({
                        url: './api/web/authenticate',
                        headers: {
                            "X-CSRF-Token": $("#csrf_token").val()
                        },
                        data: formData,
                        processData: false,
                        contentType: false,
                        type: 'POST',
                        success: function (result) {
                            switch (result.ResponseCode) {
                                case ResponseCode.SUCCESS:
                                    $("#continue").submit();
                                    break;

                                default:
                                    vm.recording = false;
                                    vm.alert = result.Result;
                                    break;
                            }
                        },
                        error: function (error) {
                            console.log(error);
                            vm.recording = false;
                            vm.alert = "An unknown error occurred.";
                        }
                    });
                });
            },
            cancel: function (event) {
                $("#continue").submit();
            }
        }
    };

    var routes = {
        "#/enrollment": EnrollmentViewModel,
        "#/web/authentication": WebAuthenticationViewModel,
    };

    var app = new Vue({
        el: "#app",
        data: {
            route: window.location.hash
        },
        computed: {
            getView: function () { return routes[this.route] || WebAuthenticationViewModel; }
        },
        render: function (createElement) { return createElement(this.getView); }
    });
})();
