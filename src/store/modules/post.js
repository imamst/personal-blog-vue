import Post from "@/services/Post.js";

export default {
    namespaced: true,
    state: {
        posts: [],
        pagination_meta: {
            current_page: 1,
            last_page: null,
        },
    },
    getters: {
        posts: (state, getters) => {
            return getters.posts
        },
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts
        },
        SET_PAGINATION_META(state, meta) {
            state.pagination_meta.current_page = meta.current_page
            state.pagination_meta.last_page = meta.last_page
        },
    },
    actions: {
        fetchPosts({ commit }, page = 1) {
            return Post.getLatest(page)
                .then((response) => {
                    commit('SET_POSTS', response.data.data)
                    commit('SET_PAGINATION_META', response.data.meta)
                })
                .catch((error) => {
                    throw error
                })
        },
        searchPosts({ commit }, data) {
            return Post.search(data)
                .then((response) => {
                    commit('SET_POSTS', response.data.data)
                    commit('SET_PAGINATION_META', response.data.meta)
                })
                .catch((error) => {
                    throw error
                })
        },
    }
}