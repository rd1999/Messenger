import firebase from "firebase";
import {AsyncStorage} from "react-native";
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
    return (dispatch) => {
        dispatch({type: 'login_user'})
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user)
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => {
                        loginUserSuccess(dispatch, user)
                        // firebase.database().ref(`/users`)
                        //     .push({username, id})
                        //     .then(() => {
                        //         dispatch({type: 'usernameCreated'})
                        //         Actions.chatFlow();
                        //     })
                    })
                    .catch(() => loginUserFail(dispatch));
            })  
    }
}

// export const signIn = ({email, password}) => {
//     return (dispatch) => {
//         dispatch({type: 'login_user'})
//         firebase.auth().signInWithEmailAndPassword(email, password)
//             .then(user => {
//                 const {currentUser} = firebase.auth();
//                 // AsyncStorage.setItem("loggedIn", "yes");
//                 loginUserSuccess(dispatch, user)
//                 Actions.chatFlow();
//             })
//             .catch(() => loginUserFail(dispatch));
//     }
// }

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