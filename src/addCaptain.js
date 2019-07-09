export default function addCaptain(state = [], action) {
    // console.log(state)cd redux npm start
    
    // console.log("this is add player num")
    switch (action.type) {
      case 'ADD_CAPTAIN':
        return state.concat([action.Captain])
      default:
        return state
    }
  
  }