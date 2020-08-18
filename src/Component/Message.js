import React, {Component} from "react";
import {View, Text} from "react-native";
import firebase from "firebase";

class Message extends Component{

    renderMessage(){
        const {text, senderId, recieverId} = this.props.message;
        const {currentUser} = firebase.auth();

        return(
            <View style={currentUser.uid === senderId ? styles.senderMessageStyle : styles.recieverMessageStyle}>
                <Text style={currentUser.uid === senderId ? styles.senderTextStyle : styles.recieverTextStyle}>{text}</Text>
            </View>
        )
    }

    render(){
        return(
            <View>
                {this.renderMessage()}
            </View>
        )
    }
}

const styles = {
    senderMessageStyle: {
        backgroundColor: '#318fb5',
        borderRadius: 7,
        paddingVertical: 8,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 3,
        marginRight: 10,
        maxWidth: 250
    },
    recieverMessageStyle: {
        backgroundColor: '#eeeeee',
        borderRadius: 7,
        paddingVertical: 8,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 3,
        marginLeft: 10,
        maxWidth: 250
    },
    senderTextStyle: {
        fontSize: 16,
        color: '#fff',
    },
    recieverTextStyle: {
        fontSize: 16,
        color: '#000'
    }
}

export default Message;