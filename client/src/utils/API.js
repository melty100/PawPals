import axios from "axios";

export default {
    getPosts: function () {
        return axios.get("/questions/getAll");
    },
    getPost: function(id) {
        return axios.get("/questions/question" + id);
      },
    addPost: function (postData) {
        return axios.post("/questions/postQuestion", postData);
    }
};
