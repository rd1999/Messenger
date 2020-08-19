import _ from "lodash";
import React, { Component } from "react";
import {View} from "react-native";
import firebase from "firebase";
import {connect} from "react-redux";
import {nameFetch} from "../actions/MainActions";
import {Button, CardSection} from "./common";

class Chats extends Component{

    state = {uid: ''}

    componentWillMount(){
        this.props.nameFetch();
        this.getId();
    }

    getId(){
        this.props.users.forEach((user) => {
            if(firebase.auth().currentUser.uid === user.id){
                this.setState({uid: user.uid})
            }
        })
    }

    render(){
        return(
            <View>
                <CardSection>
                    <Button onPress={() => {
                        const uid = this.state.uid;
                        firebase.database().ref(`/users/${uid}`)
                            .remove();
                        firebase.auth().currentUser.delete()
                            .catch(console.log("reauthenticate"))
                        firebase.auth().signOut()
                    }}>
                        Delete Account
                    </Button>
                </CardSection>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const users = _.map(state.nameFetch, (val, uid) => {
        return {...val, uid}
    })

    return {users};
}

export default connect( mapStateToProps, {nameFetch})(Chats);