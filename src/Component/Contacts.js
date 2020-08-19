import _ from "lodash";
import React, { Component } from "react";
import {FlatList, Text, View} from "react-native";
import {connect} from "react-redux";
import {nameFetch} from "../actions/MainActions";
import ListItem from "./ListItem";


class Contact extends Component{

    componentWillMount(){
        this.props.nameFetch();
    }

    renderItem(){
        <ListItem user={item} />
    }

    render(){
        return(
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>Contacts</Text>
                <FlatList 
                    data={this.props.users}
                    keyExtractor={(user) => user.uid}
                    renderItem={({item}) => <ListItem user={item} />}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const users = _.map(state.nameFetch, (val, uid) => {
        return {...val, uid}
    })

    return {users}
}

const styles = {
    textStyle: {
        fontSize: 50,
        fontWeight: 'bold',
        paddingTop: 50,
        paddingBottom: 30,
        paddingLeft: 15
    },
    containerStyle: {
        flex: 1
    }
}

export default connect(mapStateToProps, {nameFetch})(Contact);