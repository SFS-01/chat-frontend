import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import storage from './utils/storage'

import './registerServiceWorker'

Vue.config.productionTip = false


window.axios = require('axios');
window.axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

window.axios.interceptors.request.use(function (config) {
  const AUTH_TOKEN = storage.get('token');
  if (AUTH_TOKEN) {
    config.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

window.axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;

}, function (error) {
  if (error.response.status == 401) {
    toastr["error"]("Session expired or invalid credentials, please sign in again to continue.");
    //storage.remove('current_user');
    storage.remove('token');
    //storage.remove('token_type');
    storage.remove('refresh_token');
    storage.remove('expires_in');
    //router.push({ name: 'login' });
    return 0;
  }
  // Do something with response error
  return Promise.reject(error);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
