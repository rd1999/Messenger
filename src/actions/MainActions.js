import firebase from "firebase"
import { Actions } from "react-native-router-flux";

export const nameChanged = (text) => {
    return{
        type: 'name_changed',
        payload: text
    }
}

export const nameSave = (name) => {

    const {currentUser} = firebase.auth();
    const id = currentUser.uid;

    return (dispatch) => {
        firebase.database().ref(`/users`)
            .push({name, id})
            .then(() => {
                dispatch({type: 'usernameCreated'})
                Actions.chatFlow();
            })
    }
}

export const nameFetch = () => {
    return (dispatch) => {
        firebase.database().ref(`/users`)
            .on('value', snapshot => {
                dispatch({type: 'name_fetch', payload: snapshot.val()})
            })
    }
}