import Vue from 'vue';
import App from './App.vue';
import router from './router';

import JuneUI from '../library';
import '../library/style/index.less';

Vue.config.productionTip = false;

Vue.use(JuneUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
