import { createStore } from 'vuex';
import axios from 'axios';


export default createStore({
    state: () => ({
        matches: [],
        details: [],
        isMatchLoading: false,
    }),
    getters: {},
    mutations: {
        setDetails(state, details) {
            state.details = details;
        },
        setMatches(state, matches) {
            state.matches = matches;
        },
        setIsMatchLoading(state, isMatchLoading) {
            state.isMatchLoading = isMatchLoading;
        }
    },
    actions: {
        fetchMatches({ commit }) {
            try {
                commit('setIsMatchLoading', true);
                setTimeout(async () => {
                    const response = await axios.get(
                        "https://api.opendota.com/api/proMatches"
                    );
                    commit('setMatches', response.data)

                }, 100);
            } catch (e) {
                alert("Ошибка");
            } finally {
                commit('setIsMatchLoading', false);
            }
        },
        detailMatch({ state, commit }) {
            try {
                setTimeout(async () => {
                    const response = await axios.get(
                        `https://api.opendota.com/api/matches/${state.match.match_id}`
                    );
                    commit('setDetails', response.data);

                }, 10);
            } catch (e) {
                alert("Ошибка");
            }
        },

    },
    modules: {},

})