import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import './plugins/vuetify-money.js';
import router from './router';
import InputFacade from 'vue-input-facade';

Vue.config.productionTip = false;

Vue.use(InputFacade, { name: 'mask' });

new Vue({
    vuetify,
    router,
    render: (h) => h(App),
}).$mount('#app');
