import React from "react";
import {AsyncStorage} from "react-native"
import {Scene, Router} from "react-native-router-flux";
import SignUp from "./Component/SignUp";
import SignIn from "./Component/SignIn";
import Home from "./Component/Home";
import Contact from "./Component/Contacts";
import Account from "./Component/Account";
import Compose from "./Component/Compose";

const AuthRouter = () => {

    return(
        <Router>
            <Scene key="root" hideNavBar>  
                    <Scene key="auth">
                        <Scene key="signUp" component={SignUp} hideNavBar />
                    </Scene>

                {/* <Scene key="main" hideNavBar>
                    <Scene key="home" component={Home} hideNavBar />
                </Scene> */}
                {/* <Scene key="chatFlow" hideNavBar tabs={true} tabBarStyle={{paddingBottom: 15}} >
                    <Scene key="contacts" component={Contact} hideNavBar tabBarLabel="contacts" />
                    <Scene key="account" component={Account} title="Settings" tabBarLabel="account" />
                </Scene>
                <Scene key="composeMessage" hideNavBar > 
                    <Scene key="compose" component={Compose} hideNavBar tabs={false} />
                </Scene> */}
            </Scene>
        </Router>
    )
    
}

export default AuthRouter;