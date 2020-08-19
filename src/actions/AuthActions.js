import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const authUpdate = ({prop, value}) => {
    return{
        type: 'auth_update',
        payload: {prop, value}
    }
}

export const authScreenSwitch = () => {
    return{
        type: 'auth_screen_switch'
    }
}

export const signUp = ({email, password, username}) => {
    return async (dispatch) => {
        dispatch({type: 'login_user'})
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user)
            })
            .catch(async () => {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => {
                        loginUserSuccess(dispatch, user)
                        firebase.database().ref(`/users`)
                            .push({username, id: firebase.auth().currentUser.uid})
                            .then(() => {
                                dispatch({type: 'usernameCreated'})
                                Actions.chatFlow();
                            })
                    })
                    .catch(() => loginUserFail(dispatch));
            })  
    }
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: 'login_user_success',
        payload: user
    })

}

const loginUserFail = (dispatch) => {
    dispatch({
        type: 'login_user_fail'
    })
}