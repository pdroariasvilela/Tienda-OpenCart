import { useEffect, useState } from "react";

import { UserContext } from "./userContext";
import { AuthenticatedUser } from "../../Services/authenticated-service";
import { token_key, list_cart } from "../../confing";
import { base_url } from "../../Services/authenticated-service";


export const UserProvider = ({ children }) => {
    
    // Guardado en SessionStorage
    
    const [user, setUser] = useState(() => {
        const storedUser = sessionStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });
    
    useEffect(() => {
        if (user) {
            sessionStorage.setItem("user", JSON.stringify(user));
        }
    }, [user]);


    //LOGIN FUNCTIONS
    
    const [formData, setFormData] = useState({
        email: 'pedroar@mail.com',
        password: 'pedro1998'
    })

    const { email, password } = formData

    function onChangeInfo(event) {

        const { name, value } = event.target

        setFormData({ ...formData, [name]: value })
    }

    function onSubmitInfo(event) {
        event.preventDefault()
        AuthenticatedUser(email, password).then(data => 
            setUser(data));
    }


    //TOKEN

    let token;
    if (user) {
        token = user.token;
    }

    // LOCALSTORAGE

    function LocalStorageSetItem(listProducts) {
        localStorage.setItem(list_cart, JSON.stringify(listProducts))
    }

    function LocalStorageGetItem() {
        const data = localStorage.getItem(list_cart)

        return data ? JSON.parse(data) : []
    }

    // LOGOUT 

     const LogoutSession = async ()=>{

        const dataUser = sessionStorage.getItem('user');
    
        if(dataUser){
            
        const response = await fetch(base_url + '/logout' , {
            method : 'DELETE',
            headers : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer${dataUser.token}`
            }
        })

        sessionStorage.removeItem('user');
        setUser('')
        const data = await response.json()
    
        return data 
    
        } else {
            console.log('No hay un token almacenado en sessionStorage.')
        }
    
    }


    // CCREATE USER /SIGNUP





    return (
        <UserContext.Provider value={{ formData, setFormData, onChangeInfo, onSubmitInfo, token, LocalStorageSetItem, LocalStorageGetItem , LogoutSession , setUser }}>
            {children}
        </UserContext.Provider>
    )

}