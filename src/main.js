import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './filters/filters.js'
import { BootstrapVue } from 'bootstrap-vue'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSearch, faChevronRight, faUser, faSignOutAlt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// firebase
import './firebase';

// estilos app
import './styles/main.scss';

// registro del serviceWorker
import './registerServiceWorker'

// libreria spinners
import { SquareSpinner } from 'vue-spinners'
Vue.component('square', SquareSpinner)

// después de las importaciones, le decimos a Vue que las use:
library.add(faBars, faSearch, faChevronRight, faUser, faSignOutAlt, faExclamationTriangle) // añade iconos de fontawesome a libreria
Vue.component('fa-icon', FontAwesomeIcon) // definimos el componente <fa-icon> para usar los iconos en los templates

Vue.use(BootstrapVue) // instala BootstrapVue
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')