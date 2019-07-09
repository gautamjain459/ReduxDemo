import {combineReducers } from 'redux';
import addPlayer from "./addPlayer";
import addCaptain from "./addCaptain";


export default combineReducers({
    addPlayer,
    addCaptain
});                                         













































// const intiState ={
//     posts: [
//         {id: 1,name : "Gautam Jain "},
//         {id: 2,name : "Shubham Duhan"},
//         {id: 3,name : "Raghu"},
//         {id: 4,name : "Ravi"},
//         {id: 5,name : "Sandeep Rathi"}
//     ]
// };

// const rootReducer = (state=intiState, action)=>{
//   let newState = {...state};
//      if(action.type==='ADD_NAME'){
//      newState.posts.push({id:state.posts.length+1,name:action.name})   
//     }
//          return newState;
// };

