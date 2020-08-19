import React from "react";
import {Scene, Router} from "react-native-router-flux";
import SignUp from "./Component/SignUp";


const AuthRouter = () => {

    return(
        <Router>
            <Scene key="root" hideNavBar>  
                    <Scene key="auth">
                        <Scene key="signUp" component={SignUp} hideNavBar />
                    </Scene>
            </Scene>
        </Router>
    )
    
}

export default AuthRouter;