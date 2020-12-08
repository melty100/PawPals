import axios from "axios";

export default {
    getPosts: function () {
        return axios.get("/questions/getAll");
    },
    getPost: function(id) {
        return axios.get("/questions/question/" + id);
      },
    // searchPosts : function(query) {
    //     return axios.get("", { params: { q: query } })
    // },
    addPost: function (postData) {
        return axios.post("/questions/postQuestion", postData);
    }
};
