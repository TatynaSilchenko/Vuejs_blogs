import Vue from 'vue'import Vuex from 'vuex'import apiSdk from "../api/api";Vue.use(Vuex)export default new Vuex.Store({    state: {        characters: {},        pages: 0    },    mutations: {        setCharacters(state, {page, characters}) {            state.characters[page] = characters        },        setPages(state, pages) {            state.pages = pages        }    },    actions: {        fetchCharacters({commit}, page) {            return apiSdk.getCharacters(page).then(res => {                const {info, results} = res;                commit('setCharacters', {page, characters: results})                commit('setPages', {pages: info.pages})            })                .catch(err => console.log(err))        }    },    getters: {        getCaractersByPage: (state) => (page) => {          const pageCharacters=state.characters[page]            if (pageCharacters){                return pageCharacters            }        }    }})