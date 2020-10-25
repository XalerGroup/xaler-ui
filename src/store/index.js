import Vue from 'vue';
import Vuex, { createLogger } from 'vuex';

import auth from '@/store/modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  },
  plugins: [createLogger()],
});
