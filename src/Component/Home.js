import React, { Component } from "react";
import {Text, TextInput, View, TouchableWithoutFeedback} from "react-native";
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/AntDesign"
import {nameChanged, nameSave, nameFetch} from "../actions/MainActions";
import {Card, CardSection} from "./common";

class Home extends Component{

    onIconPress(){

        const {name} = this.props;

        if(name){
            this.props.nameSave(name)
        }else{
            alert("Please enter username");
        }

    }

    render(){

        return(
            <View style={styles.containerStyle}>
            <Card>
                <Text style={styles.headerStyle}>Enter Your Username</Text>
                <CardSection>
                    <TextInput 
                        style={styles.textStyle} 
                        placeholder="Enter Username" 
                        onChangeText={(text) => this.props.nameChanged(text)} 
                        value={this.props.name} 
                    />
                </CardSection>
            </Card>
            <TouchableWithoutFeedback onPress={this.onIconPress.bind(this)}>
                <Icon name="rightcircle" size={50} style={styles.iconStyle} />
            </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        flex: 1
    },
    containerStyle: {
        backgroundColor: '#e1f2fb',
        flex: 1,
        paddingTop: 150,
        paddingHorizontal: 15
    },
    headerStyle: {
        paddingBottom: 20,
        fontSize: 30,
        fontWeight: "900"
    },
    iconStyle:{
        alignSelf: 'flex-end',
        paddingTop: 50,
        paddingRight: 20
    }
}

const mapStateToProps = (state) => {
    const {name} = state.main;

    return {name};
}

export default connect(mapStateToProps, {nameChanged, nameSave, nameFetch})(Home);