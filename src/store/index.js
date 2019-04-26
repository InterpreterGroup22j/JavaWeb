import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        login: false,
        plan:false
    },
    getters: {
        getLogin(state) {
            return state.login;
        },
        getPlan(state) {
            return state.plan;
        }
    },
    mutations: {
        login(state) {
            state.login = true;
        },
        logout(state) {
            state.login = false;
        },
        plan(state) {
            state.plan = true;
        }
    },
    actions: {
        login(context) {
            context.commit('login');
        },
        logout(context) {
            context.commit('logout');
        },
        plan(context) {
            context.commit('plan');
        }
    }
});