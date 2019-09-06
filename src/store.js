import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [
      createPersistedState({
        paths: [
          "locale"
        ]
      })
    ],
    state: {
        locale: 'fr'
    },
    mutations: {
      setLocale: function (state, locale) {
        if (state.locale === locale) {
          return;
        }
        state.locale = locale;
        location.reload();
      },
    },
    actions: {
      setLocale: function (action, locale) {
        action.commit('setLocale', locale);
      }
    }
})
