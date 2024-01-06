import { UserContext } from "./userContext";
import { list_cart } from "../../confing";
import { base_url } from "../../Services/pokeConfig";
import sessionLogin from "../../Services/ssesionLogin";
import { configUser } from "../../Services/configUser"; 


// import axios from 'axios';
// import { useEffect } from "react";



export const UserProvider = ({ children }) => {

    const {user , setUser} = configUser()

    const {
        formData,
        onChangeInfo,
        onSubmitInfo,
        setFormData,
        token ,
        LogoutSession} = sessionLogin()
    

    // LOCALSTORAGE

    function LocalStorageSetItem(listProducts) {
        localStorage.setItem(list_cart, JSON.stringify(listProducts))
    }

    function LocalStorageGetItem() {
        const data = localStorage.getItem(list_cart)

        return data ? JSON.parse(data) : []
    }



    return (
        <UserContext.Provider value={{ formData, setFormData, onChangeInfo, onSubmitInfo, token, LocalStorageSetItem, LocalStorageGetItem , LogoutSession , setUser }}>
            {children}
        </UserContext.Provider>
    )

}