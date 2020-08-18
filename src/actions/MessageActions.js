import firebase from "firebase";

export const messageChanged = (text) => {
    return {
        type: 'message_changed',
        payload: text
    }
}

export const messageSaved = (text, senderId, recieverId) => {

    function setUid(uid1, uid2){
        if(uid1 <uid2){
            return uid1+uid2;  
        }else{
            return uid2+uid1;
        }
    }

    return (dispatch) => {
        const uid = setUid(senderId, recieverId);
        firebase.database().ref(`/chats/${uid}`)
            .push({text, senderId, recieverId})
            .then(() => dispatch({
                type: 'message_saved'
            }))
    }

}

export const messageFetch = (senderId, recieverId) => {

    function setUid(uid1, uid2){
        if(uid1 <uid2){
            return uid1+uid2;  
        }else{
            return uid2+uid1;
        }
    }

    return (dispatch) => {
        const uid = setUid(senderId, recieverId);
        firebase.database().ref(`/chats/${uid}`)
            .on('value', snapshot => {
                dispatch({type: 'message_fetch', payload: snapshot.val()})
            })
    }
}