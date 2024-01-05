import { useContext, useEffect, useState } from "react";
import LoginForm from "../../Components/LoginForm";
import SignUpForm from "../../Components/SignUpForm";
import { UserContext } from "../useContext/userContext";

import googleIcon from '../../assets/img/google-icon.svg'

function Login() {

    const [userSignUp, setUserSignUp] = useState(true)


    function HandleUserSignUp(){
        setUserSignUp(!userSignUp)
        console.log(userSignUp)
    }

    return (
        
        <div className="h-screen">

            {userSignUp ? (<LoginForm toggleUserLogin={HandleUserSignUp}/>):(<SignUpForm toggleUserLogin={HandleUserSignUp}/>)}
            


            <div className="gap-3 w-[350px] flex flex-col justify-center items-center m-auto mt-10 pb-20">
                <h4 className="text-md font-bold">Escoja una opción para entrar</h4>
                <button className="text-sm w-full bg-black text-white p-2 rounded-sm font-semibold">
                    RECIBIR UN CÓDIGO DE ACCESO POR E-MAIL</button>

                <button className="text-sm w-full p-2 rounded-md border border-solid border-gray-300 hover:border-cyan-300 flex justify-center font-semibold items-center"><img className="w-4 h-4 mr-2" src={googleIcon} />ENTRAR CON GOOGLE </button>
            </div>
        </div>
    );
}

export default Login;