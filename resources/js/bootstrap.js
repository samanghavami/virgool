// window._ = require("lodash");

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.withCredentials = true;

//

//

// import Echo from "laravel-echo";

// window.io = require("socket.io-client");

// window.Echo = new Echo({
//     broadcaster: "socket.io",
//     host: process.env.MIX_APP_URL + ":6001"
// });

import Echo from "laravel-echo";
window.Pusher = require("pusher-js");
window.Echo = new Echo({
    broadcaster: "pusher",
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    forceTLS: true
});
