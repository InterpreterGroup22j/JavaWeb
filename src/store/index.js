import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        login: true,
        plan: false,
        id:''
    },
    getters: {
        getLogin(state) {
            return state.login;
        },
        getPlan(state) {
            return state.plan;
        },
        getId(state) {
            return state.id;
        }
    },
    mutations: {
        login(state,id) {
            state.login = true;
            state.id = id;
        },
        logout(state) {
            state.login = false;
            state.id = '';
        },
        plan(state) {
            state.plan = true;
        }
    },
    actions: {
        login(context,id) {
            context.commit('login',id);
        },
        logout(context) {
            context.commit('logout');
        },
        plan(context) {
            context.commit('plan');
        }
    }
});