import React, { createContext, useReducer, useContext } from "react";
import {
  ADD_POST,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
  
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
        // content: "",
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
  