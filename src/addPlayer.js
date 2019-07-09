export default function addPlayer(state = [], action) {
    switch (action.type) {
      case 'ADD_NAME':
        return state.concat([action.name])
      default:
        return state
    }
  }