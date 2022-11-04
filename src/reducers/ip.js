const initState = {
  ip: '0.0.0.0',
  messages: []
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case 'setIP':
      return {
        ...state,
        ip: action.payload.ip
      }
    case 'addErrorIP':
      const {message, type} = action.payload
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            message: message,
            type: type
          }
        ]
      }
    default:
      return state
  }
}

export default reducer
