import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import plugins from './plugins';

import router from './router/router';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(plugins)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
