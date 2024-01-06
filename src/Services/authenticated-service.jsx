
import { base_url } from "./pokeConfig"

export const AuthenticatedUser = async (email , password)=>{

    const response = await fetch(base_url + '/login' , {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify({
            email : email,
            password : password
        })
    })

    const data = await response.json()

    return data

}

export const CreateUser = async(email, first_name, last_name , password)=>{
    const response = await fetch(base_url + '/signup',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            email: email,
            first_name: first_name,
            last_name: last_name,
            password : password
        })
    })

    const data = await response.json()

    return data;
}
