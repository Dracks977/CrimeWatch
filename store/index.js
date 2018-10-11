import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({})

// workaround to avoir vuex error (ref: https://github.com/nuxt/nuxt.js/issues/1917)
const strict = false

// plugin that allow to persist store state in local/session storage
const plugins = [vuexLocal.plugin]

const state = () => ({
	user: {
		id: null,
		name: null,
		firstname: null,
		rank: null
	},
})

const mutations = {
  SET_USER: function (state, user) {
    state.user = user
  },
}

const actions = {

}

export { state, mutations, actions, plugins, strict }
