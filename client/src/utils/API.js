import axios from "axios";

export default {
    getPosts: function () {
        return axios.get("/questions/getAll");
    },
    getPost: function (id) {
        return axios.get("/questions/" + id);
    },
    getTopic: function (topic) {
        return axios.get("/questions/topic/" + topic);
    },
    // searchPosts : function(query) {
    //     return axios.get("", { params: { q: query } })
    // },
    addPost: function (postData) {
        return axios.post("/questions/postQuestion", postData);
    },
    getCommentsById: function (id) {
        return axios.get("/comments/getByQuestion/" + id)
    },
    getComments: function () {
        return axios.get("/comments/getAll")
    },
    addComment: function (commentData) {
        return axios.post("/comments/postComment", commentData)
    }
};
