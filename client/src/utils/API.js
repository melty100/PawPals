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
    searchPosts: function (query) {
        return axios.get("/questions/search/" + query);
    },
    addPost: function (postData) {
        return axios.post("/authenticated/postQuestion", postData);
    },
    getCommentsById: function (id) {
        return axios.get("/comments/getByQuestion/" + id)
    },
    getComments: function () {
        return axios.get("/comments/getAll")
    },
    likeComment: function (id) {
        return axios.post("/comments/liked/" + id)
    },
    dislikeComment: function (id) {
        return axios.post("/comments/disliked/" + id)
    },

    addComment: function (commentData) {
        return axios.post("/authenticated/postComment/", commentData)
    },
    getUser: function (id) {
        return axios.get("/users/" + id)
    },
    addProfile: function () {
        return axios.post("/users/postUser")
    },
    getUserQuestions: function (id) {
        return axios.get("/questions/UserQuestions/" + id)
    },
    getUserComments: function (id) {
        return axios.get("/comments/getUserComments/" + id)
    },
    userLogin: function (loginData) {
        return axios.post("/passport/login/", loginData)
    },
    userRegister: function (registerData) {
        return axios.post("/passport/register/", registerData)
    },
    getMyProfile: function (){
        return axios.get("/users/api/")
    },
    updateProfile: function (username){
        return axios.put("/users/changeUser/", username)
    },
    getMyQuestions: function (userId) {
        return axios.get("/questions/myQuestions/", userId)
    }
};
