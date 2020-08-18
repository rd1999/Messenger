import React, { Component } from "react";
import {View, Text, TouchableWithoutFeedback, AsyncStorage} from "react-native";
import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";
import {authScreenSwitch, signUp} from "../actions/AuthActions"
import {Card, CardSection, Button, Spinner} from "./common";
import SignInForm from "./SignInForm";

class SignUp extends Component{

    // async renderLogin(){
    //     if(await AsyncStorage.getItem("loggedIn")){
    //         Actions.chatFlow();
    //     }
    // }

    onButtonPress(){
        const {username, email, password} = this.props;
        if(username && email && password){
            this.props.signUp({email, password, username});
        }else{
            alert(email)
        } 
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size='large' />
        }

        return(
            
            <Button onPress={this.onButtonPress.bind(this)}>
                Sign Up
            </Button>
        )
    }

    renderError(){
        if(this.props.error){
            return(
                <Text style={styles.errorStyle}>{this.props.error}</Text>
            )
        }
    }

    render(){
        // {this.renderLogin()}
        return(
            <View style={styles.containerStyle}>
                <SignInForm headerText="Please Sign Up" />
                {/* <TouchableWithoutFeedback onPress={() => {
                    this.props.authScreenSwitch()
                    Actions.signIn()
                }}>
                    <Text style={styles.textStyle}>Already have an account? Sign in instead...</Text>
                </TouchableWithoutFeedback> */}
                <Card>
                    {this.renderError()}
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#e1f2fb',
        paddingTop: 150,
        paddingHorizontal: 20
    },
    textStyle: {
        paddingTop: 10,
        color: 'blue',
        fontSize: 15,
        paddingLeft: 5
    },
    errorStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = (state) => {
    const {username, email, password, loading, error} = state.auth;

    return {username, email, password, loading, error};
}

export default connect(mapStateToProps, {authScreenSwitch, signUp})(SignUp);