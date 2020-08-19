import React from "react";
import {Scene, Router} from "react-native-router-flux";
import Contact from "./Component/Contacts";
import Account from "./Component/Account";
import Compose from "./Component/Compose";

const MainRouter = () => {

    return(
        <Router>
            <Scene key="root" hideNavBar>  
                <Scene key="chatFlow" hideNavBar tabs={true} tabBarStyle={{paddingBottom: 15}} >
                    <Scene key="contacts" component={Contact} hideNavBar tabBarLabel="contacts" />
                    <Scene key="account" component={Account} title="Settings" tabBarLabel="account" />
                </Scene>
                <Scene key="composeMessage" hideNavBar > 
                    <Scene key="compose" component={Compose} hideNavBar tabs={false} />
                </Scene>
            </Scene>
        </Router>
    )
    
}

export default MainRouter;