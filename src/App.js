import React, { Component } from "react";
import firebase from "firebase";
import {Provider} from "react-redux";
import {View} from "react-native"
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk"
import reducers from "./reducers";
import MainRouter from "./MainRouter";
import AuthRouter from "./AuthRouter";
import {Spinner} from "./Component/common"

class App extends Component{

    state = {loggedIn: null}

    componentWillMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyBw8YnJb7mH89wJXqijhHVSqahzckKDrVg",
            authDomain: "messenger-6c837.firebaseapp.com",
            databaseURL: "https://messenger-6c837.firebaseio.com",
            projectId: "messenger-6c837",
            storageBucket: "messenger-6c837.appspot.com",
            messagingSenderId: "339496025672",
            appId: "1:339496025672:web:c066c69efe93ca1a38e27d",
            measurementId: "G-YZ7B2P3CZS"
          };
          if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
          }

          firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true})
            }else{
                this.setState({loggedIn: false})
            }
        })
    }

    renderContent() {
        switch(this.state.loggedIn){
            case true:
                return(
                    <MainRouter />
                ) 
            case false:
                return <AuthRouter />
            default:
                return(
                    <View style={{alignSelf: 'center'}}>
                        <Spinner size='large' />
                    </View>
                ) 
        }
    }

    render(){

        const store = createStore(reducers, [], applyMiddleware(ReduxThunk));

        return(
            <Provider store={store}>
                {this.renderContent()}
            </Provider>
            
        )
    }
}

export default App;