import Post from "@/services/Post.js";

export default {
    namespaced: true,
    state: {
        posts: []
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts;
        }
    },
    actions: {
        fetchPosts({ commit }) {
            return Post.getLatest()
                .then(response => {
                    commit('SET_POSTS', response.data.data);
                })
                .catch(error => {
                    throw error;
                })
        }
    }
}