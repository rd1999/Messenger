const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    error: '',
    loading: false,
    user: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'auth_update':
            return {...state, [action.payload.prop]: action.payload.value}
        case 'auth_screen_switch':
            return INITIAL_STATE
        case 'login_user':
            return {...state, error: '', loading: true}
        case 'login_user_success':
            return {...state, loading: false, email: '', password: '', user: action.payload, error: ''}
        case 'login_user_fail':
            return {...state, loading: false, password: '', error: 'Authentication Failed'}
        default:
            return state;
    }    

}