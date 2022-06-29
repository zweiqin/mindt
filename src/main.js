import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// import './utils/CryptoJS v3.1.2/rollups/aes.js'
// import './utils/CryptoJS v3.1.2/components/mode-ecb.js'
// import './utils/CryptoJS v3.1.2/components/pad-nopadding.js'

axios.defaults.baseURL = 'https://6cxx9pggi4.execute-api.us-east-1.amazonaws.com/prod/mock'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
