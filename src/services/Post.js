import API from "./API"

export default {

    getLatest(page) {
        return API.get(`/public/posts?page=${page}`);
    }

}