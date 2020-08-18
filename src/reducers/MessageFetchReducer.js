const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'message_fetch':
            return action.payload
        default:
            return state
    }
}