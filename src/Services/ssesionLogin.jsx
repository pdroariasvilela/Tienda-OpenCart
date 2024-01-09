
import { useEffect, useState } from "react";
import { AuthenticatedUser } from "./authenticated-service";
import { base_url } from "./pokeConfig";

import { configUser } from "./configUser";

    
const sessionLogin = ()=>{

    // const [user, setUser] = useState(() => {
    //     const storedUser = sessionStorage.getItem("user");
    //     return storedUser ? JSON.parse(storedUser) : null;
    // });

    const {user , setUser} = configUser()
    
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


    let token;
    if (user) {
        token = user.token;
    }


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

    return {
        user,
        setUser,
        formData,
        onChangeInfo,
        onSubmitInfo,
        token,
        LogoutSession

    }
}

export default sessionLogin