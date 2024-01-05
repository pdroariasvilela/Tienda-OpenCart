// import { useState } from "react"
// import AuthenticatedUser from "../Services/authenticated-service"

import { UserContext } from "../Context/useContext/userContext";

import { useContext, useEffect } from "react";

function LoginForm({toggleUserLogin}) {


    const {formData , onChangeInfo , onSubmitInfo } = useContext(UserContext)

    const { email , password} = formData

    
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: ''
    // })

    // const { email, password } = formData

    // function onChangeInfo(event) {

    //     const { name, value } = event.target

    //     setFormData({ ...formData, [name]: value })
    // }

    // function onSubmitInfo(event) {
    //     event.preventDefault()
    //     AuthenticatedUser(email, password).then((data) => console.log(data))
    // }

    return (
        <>
            <form onSubmit={onSubmitInfo} className=" pt-40 gap-3 w-[350px] flex flex-col justify-center items-center m-auto">

                <h4 className="text-md font-bold">Entrar con e-mail y contraseña</h4>

                <input
                    className="border border-solid border-gray-500 px-3 py-1 w-[90%] rounded-md"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@example.com"
                    onChange={onChangeInfo}
                    value={email} />

                <input
                    className="border border-solid border-gray-500 px-3 py-1 w-[90%] rounded-md"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Ingrese su contraseña"
                    onChange={onChangeInfo}
                    value={password} />

                <p className="ml-auto text-sm mr-6 text-cyan-500 font-semibold underline hover:text-cyan-300 cursor-pointer">Olvidé mi contraseña</p>

                <div className="border-b border-solid border-gray-300 w-[90%] rounded-md"></div>

                <button className="w-[90%] bg-black text-white p-1 rounded-md" type="submit">Entrar</button>

                <p className=" text-sm mr-6 text-cyan-500 font-semibold underline hover:text-cyan-300 cursor-pointer" onClick={toggleUserLogin}>¿No tienes cuenta? Registrese</p>
            </form>
        </>
    );
}

export default LoginForm;