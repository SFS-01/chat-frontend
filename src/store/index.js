import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: '',
      external_id: '',
      email: '',
      firstname: '',
      lastname: '',
      username: '',
      organization: '',
      organization_email: '',
      roles: [],
      permissions: [],
    },
    selectedType: ''
  },
  mutations: {
    setUser(state, user) {
      state.user.id = user.id;
      state.user.external_id = user.external_id;
      state.user.firstname = user.firstname;
      state.user.lastname = user.lastname;
      state.user.email = user.email;
      state.user.username = user.username;
      state.user.organization = user.organization;
      state.user.organization_email = user.organization_email;
      state.user.roles = user.roles;
      state.user.permissions = user.permissions;
    },
    clearUser(state) {
      for (const property in state.user) {
        state.use[property] = "";
      }
    },
    setSelectedType(state, type) {
      state.selectedType = type;
    },
    clearSelectedType(state,) {
      state.selectedType = "";
    },
  },
  actions: {

  },
  modules: {

  }
})
