import Vue from 'vue'
import I18n from '@/I18n';
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Panel from '@/components/Panel'

Vue.config.productionTip = false;

const vueI18nExt = I18n.setup();

Vue.component('panel', Panel)

new Vue({
  i18n: vueI18nExt,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
