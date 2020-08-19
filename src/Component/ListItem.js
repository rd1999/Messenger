import React, { Component } from "react";
import {View, Text, TouchableWithoutFeedback} from "react-native";
import firebase from "firebase";
import {CardSection} from "./common";
import { Actions } from "react-native-router-flux"; 

class ListItem extends Component{

    renderList(){
        const {currentUser} = firebase.auth();
        const {username, id} = this.props.user;

        if(currentUser.uid !== id){
            return(
                <TouchableWithoutFeedback onPress={() => Actions.composeMessage({id, username})}>
                <View>
                    <CardSection style={styles.cardStyle}>
                        <View style={styles.circle}>
                            <Text style={styles.textStyle}>{username.substring(0,2)}</Text>
                        </View>
                        <Text style={{fontSize: 24, paddingLeft: 15, paddingTop: 5}}>{username}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
            )
        }
    }

    render(){
        return(
            <View>
                {this.renderList()}
            </View>
        )
    }
}

const styles = {
    circle: {
        borderWidth: 2,
        borderRadius: 100,
        borderColor: '#838383',
        height: 50,
        width: 50,
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 24,
        paddingTop: 5
    },
    cardStyle: {
        marginHorizontal: 10,
        paddingVertical: 10, 
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#838383',
        backgroundColor: '#eeeeee'
    }
}

export default ListItem;