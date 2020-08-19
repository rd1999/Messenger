import firebase from "firebase"

export const nameChanged = (text) => {
    return{
        type: 'name_changed',
        payload: text
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