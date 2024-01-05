import AuthenticatedApp from "./AuthenticatedApp/AuthenticatedApp";

import UnAuthenticatedApp from "./UnAuthenticated/UnAuthenticated";
import { useContext } from "react";
import { UserContext } from "./useContext/userContext";


function MainApp() {

    const {token} = useContext(UserContext)

    return ( 
        <>
            {token ? (<AuthenticatedApp/>):(<UnAuthenticatedApp/>)}
        </>
     );
}

export default MainApp;