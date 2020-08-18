const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'name_fetch':
            return action.payload
        default:
            return state
    }
}