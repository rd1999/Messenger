import React, { Component } from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import {authUpdate} from "../actions/AuthActions"
import {Card, CardSection, Input} from "./common";

class SignInForm extends Component{
    render(){
        return(
            <View>
                <View style={styles.headingStyle}>
                    <Text style={styles.textStyle}>{this.props.headerText}</Text>
                </View>
                <Card>
                    <CardSection>
                        <Input
                            onChangeText={text => this.props.authUpdate({prop: 'username', value: text})} 
                            label="Username" 
                            placeholder="username"
                            value={this.props.username}
                        />
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Input
                            onChangeText={text => this.props.authUpdate({prop: 'email', value: text})} 
                            label="Email" 
                            placeholder="abc@gmail.com"
                            value={this.props.email}
                        />
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Input
                            onChangeText={text => this.props.authUpdate({prop: 'password', value: text})} 
                            label="Password" 
                            placeholder="password" 
                            secureTextEntry
                            value={this.props.password}
                        />
                    </CardSection>
                </Card>
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 30,
        fontWeight: "900"
    },
    headingStyle: {
        alignItems: 'center',
        paddingBottom: 20
    }
}

const mapStateToProps = (state) => {

    const {username, email, password} = state.auth;

    return {username, email, password}

}

export default connect(mapStateToProps, {authUpdate})(SignInForm);

