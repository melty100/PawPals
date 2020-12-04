import axios from "axios";

export default {
    getPosts: function () {
        return axios.get("/question/getAll");
    },
    
    addPost: function (postData) {
        return axios.post("/questions/postQuestion", postData);
    }
};
