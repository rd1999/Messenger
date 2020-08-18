import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";
import {nameSave} from "../actions/MainActions";
import React, { Component } from "react";
import { CardSection, Button } from "./common";

class StoreUser extends Component{

    componentWillMount(){
        if(this.props.username !== ""){
            this.props.nameSave(this.props.username);
        }
        Actions.chatFlow();
    }

    render(){
        return <View>
            {/* <CardSection>
                <Button onPress=>

                </Button>
            </CardSection> */}
        </View>
    }
}

const mapStateToProps = (state) => {
    const {username} = state.auth;

    return {username};
}

export default connect(mapStateToProps, {nameSave})(StoreUser);