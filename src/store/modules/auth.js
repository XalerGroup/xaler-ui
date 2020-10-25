import http from '@/api';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT,
} from '@/store/mutation-types';

const initState = {
  statusLoading: false,
  token: '',
  errors: {},
  user: {},
  isAuthenticated: false,

};
const actions = {
  login({ commit }, data) {
    commit(LOGIN_REQUEST);
    http.post('/auth/login/', data)
      .then((resp) => {
        const { token, user } = resp.data.payload;
        localStorage.setItem('token', token);
        http.defaults.headers.common.Authorization = `Token ${token}`;
        initState.user = {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
        };
        console.log(initState.user);
        commit(LOGIN_SUCCESS, token, initState.user);
      })
      .catch((err) => {
        commit(LOGIN_FAILURE, err.response.data.errors);
        localStorage.removeItem('token');
      });
  },
  register() {
  },
  update() {
  },
  logout() {
  },

};
const mutations = {
  [LOGIN_REQUEST](state) {
    state.statusLoading = true;
  },
  [LOGIN_SUCCESS](state, token, user) {
    state.token = token;
    state.user = user;
    state.isAuthenticated = true;
    state.statusLoading = false;
  },
  [LOGIN_FAILURE](state, errors) {
    state.errors = errors;
    state.statusLoading = false;
  },
  [LOGOUT](state) {
    state.statusLoading = false;
    state.token = '';
  },
};
const getters = {
  authUserErrors(state) {
    return state.errors;
  },
  isAuthenticatedUser(state) {
    return state.isAuthenticated;
  },
};

export default {
  state: initState,
  actions,
  mutations,
  getters,
};
