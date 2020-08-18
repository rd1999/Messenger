const INITIAL_STATE = {
    name: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'name_changed':
            return {...state, name: action.payload}
        case 'usernameCreated':
            return INITIAL_STATE         
        default: 
            return state
    }
}