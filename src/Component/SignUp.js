import React, { Component } from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import {authScreenSwitch, signUp} from "../actions/AuthActions"
import {Card, CardSection, Button, Spinner} from "./common";
import SignInForm from "./SignInForm";

class SignUp extends Component{

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
        return(
            <View style={styles.containerStyle}>
                <SignInForm headerText="Please Sign Up" />
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