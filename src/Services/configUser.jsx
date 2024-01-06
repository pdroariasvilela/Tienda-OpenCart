import { useState } from "react";

export const configUser = () =>{

    const [user, setUser] = useState(() => {
        const storedUser = sessionStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });


    return {
        user , 
        setUser
    }
    
}
