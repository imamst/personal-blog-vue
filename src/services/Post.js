import API from './API'

export default {
    getLatest(page = 1) {
        return API.get(`/public/posts?page=${page}`)
    },
    search(data) {
        return API.get('/public/search/posts', data)
    },
}