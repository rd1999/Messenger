import _ from "lodash"
import React, {Component} from "react";
import {View, TextInput, TouchableOpacity, FlatList} from "react-native";
import firebase from "firebase";
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import {CardSection, Header} from "./common";
import {messageSaved, messageChanged, messageFetch} from "../actions/MessageActions"
import Message from "./Message";

class Compose extends Component{

    componentWillMount(){
        const {currentUser} = firebase.auth();
        const {uid} = currentUser;
        const id = this.props.id;
        this.props.messageFetch(uid, id);
    }

    onIconPressed(){
        const text = this.props.text;
        const {currentUser} = firebase.auth();
        const {uid} = currentUser;
        const id = this.props.id;
        this.props.messageSaved(text, uid, id)
    }

    renderIcon(){
        if(this.props.text){
            return(
                <TouchableOpacity onPress={this.onIconPressed.bind(this)}>
                    <Icon name="send" size={25} style={styles.iconStyle} />
                </TouchableOpacity>
            )
        }
    }

    render(){

        const {containerStyle, textInputStyle, cardStyle} = styles;

        return(
            <View style={{flex:4}}>
            <Header headerText={this.props.username} textStyle={{fontSize: 25, fontWeight: 'bold'}} />
                <View style={{flex: 3}}>
                    <FlatList 
                        data={this.props.messages.reverse()}
                        key={(message) => message.senderId}
                        renderItem={({item}) => <Message message={item} />}
                        inverted={true}
                    />
                </View>
                <View style={containerStyle}>
                    <CardSection style={cardStyle}>
                        <TextInput 
                            onChangeText={(text) => this.props.messageChanged(text)} 
                            style={textInputStyle} 
                            placeholder="Enter Message"
                            value={this.props.text}
                        />
                        
                        {this.renderIcon()}
                    </CardSection>
                    
                        
                </View>

            </View>   
        )
    }
    
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
    },
    textInputStyle: {
        fontSize: 18,
        flex: 1
    },
    cardStyle: {
        alignSelf: 'flex-end',
        flex:1,
        marginBottom: 10,
        borderBottomWidth: 0,
        marginHorizontal: 5,
        backgroundColor: '#f5efef',
        marginTop: 10
    },
    iconStyle: {
        paddingTop: 10,
        paddingRight: 10
    }
}


const mapStateToProps = (state) => {
    const messages = _.map(state.messageFetch, (val, uid) => {
        return {...val, uid}
    })

    const {text} = state.message;
    
    return {messages, text};
}

export default connect(mapStateToProps, {messageSaved, messageChanged, messageFetch})(Compose);