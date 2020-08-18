import React, { Component } from "react";
import {View, Text, TouchableWithoutFeedback} from "react-native";
import firebase from "firebase";
import {CardSection} from "./common";
import { Actions } from "react-native-router-flux"; 

class ListItem extends Component{

    renderList(){
        const {currentUser} = firebase.auth();
        const {name, id} = this.props.user;

        if(currentUser.uid !== id){
            return(
                <TouchableWithoutFeedback onPress={() => Actions.composeMessage({id})}>
                <View>
                    <CardSection style={{backgroundColor: '#e1f2fb', paddingVertical: 15, paddingLeft: 10}}>
                        <View style={styles.circle}>
                            <Text style={styles.textStyle}>{name.substring(0,2)}</Text>
                        </View>
                        <Text style={{fontSize: 24, paddingLeft: 15, paddingTop: 5}}>{name}</Text>
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
        borderColor: '#000',
        height: 50,
        width: 50,
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 24,
        paddingTop: 5
    }
}

export default ListItem;