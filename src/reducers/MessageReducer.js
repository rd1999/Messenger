const INITIAL_STATE = {
    text: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'message_changed':
            return {...state, text: action.payload}
        case 'message_saved': 
            return INITIAL_STATE;
        default: 
            return state;
    }
}