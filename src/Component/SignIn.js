import React, { Component } from "react";
import {View, Text, TouchableWithoutFeedback} from "react-native"
import {connect} from "react-redux";
import {authScreenSwitch, signIn} from "../actions/AuthActions"
import {Card, CardSection, Button, Spinner} from "./common";
import SignInForm from "./SignInForm";
import { Actions } from "react-native-router-flux";

class SignIn extends Component{

    onButtonPress(){
        const {email, password} = this.props;

        if(email && password){
            this.props.signIn({email, password});
        }else{
            alert("Please enter your email and password");
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size='large' />
        }

        return(
            
            <Button onPress={this.onButtonPress.bind(this)}>
                Sign in
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
        return(
            <View style={styles.containerStyle}>
                <SignInForm headerText="Please Sign In" />
                <TouchableWithoutFeedback onPress={() => {
                    this.props.authScreenSwitch()
                    Actions.signUp()
                }}>
                    <Text style={styles.textStyle}>Don't have an Account? Sign up instead...</Text>
                </TouchableWithoutFeedback>
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
    const {email, password, loading, error} = state.auth;

    return {email, password, loading, error};
}

export default connect(mapStateToProps, {authScreenSwitch, signIn})(SignIn);