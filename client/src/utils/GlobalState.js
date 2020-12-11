import React, { createContext, useReducer, useContext } from "react";
import {
  GET_POST,
  UPDATE_POSTS,
  ADD_POST,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case GET_POST:
    return {
      ...state,
      posts: state.posts.filter((post) => {
        return post.id === action.id; 
      })
    };
    
    case UPDATE_POSTS:
      return {
        ...state,
        posts: [...action.posts],
        loading: false
      };

    case ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts],
        loading: false
      };

    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    currentPost: {
      id: 0,
      question: "",
      content: "",
      topic: ""
    },
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
