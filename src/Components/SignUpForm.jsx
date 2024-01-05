import { useState } from "react"
import InputForm from "../Hooks/InputForm"
import { CreateUser } from "../Services/authenticated-service"

import { useContext } from "react"
import { UserContext } from "../Context/useContext/userContext"


function SignUpForm({toggleUserLogin}) {

    const {setUser} = useContext(UserContext)

    const [signUpData , setSignUpData] = useState({
        email: '',
        first_name: '',
        last_name: '',
        password : ''
    })

    const { email, first_name , last_name , password } = signUpData

    function onChangeInfoCreateUser(event) {

        const { name, value } = event.target

        setSignUpData({ ...signUpData, [name]: value })
    }

    function onSubmitInfoCreateUser(event) {
        event.preventDefault()
        console.log('Datos del formulario:', signUpData);

        CreateUser(email, first_name, last_name, password)
            .then((data) => setUser(data))
            .catch((error) => console.error('Error al crear el usuario', error));  
        }

    return ( 
        <>
            <form onSubmit={onSubmitInfoCreateUser} className=" pt-20 gap-3 w-[350px] flex flex-col justify-center items-center m-auto">

                <h4 className="text-md  text-center mb-3 text-gray-600 font-semibold">Regístrate y disfrutarás de una experiencia de compra más rápida</h4>
                <h5 className="text-md font-bold text-center mb-3">COMPLETA EL SIGUIENTE FORMULARIO</h5>

                <InputForm 
                    label={'Nombre'}
                    type = {'text'}
                    name = {'first_name'}
                    id = {'nameUser'}
                    placeholder={'Ingrese sus nombres'}
                    onChange={onChangeInfoCreateUser}
                    value={first_name}
                />
                
                <InputForm 
                    label={'Apellidos'}
                    type = {'text'}
                    name = {'last_name'}
                    id = {'lastName'}
                    placeholder={'Ingrese sus apellidos'}
                    onChange={onChangeInfoCreateUser}
                    value={last_name}
                />

                <InputForm 
                    label={'Email'}
                    type = {'email'}
                    name = {'email'}
                    id = {'email'}
                    placeholder={'Ingrese su correo'}
                    onChange={onChangeInfoCreateUser}
                    value={email}
                />
                
                <InputForm 
                    label={'Contraseña'}
                    type = {'password'}
                    name = {'password'}
                    id = {'password'}
                    placeholder={'Crea tu contraseña'}
                    onChange={onChangeInfoCreateUser}
                    value={password}
                />

                <p className="ml-auto text-sm mr-6 text-cyan-500 font-semibold underline hover:text-cyan-300 cursor-pointer">Olvidé mi contraseña</p>

                <div className="border-b border-solid border-gray-300 w-[90%] rounded-md"></div>

                <button className="w-[90%] bg-black text-white p-1 rounded-md" type="submit">Registrase</button>

                <p className=" text-sm mr-6 text-cyan-500 font-semibold underline hover:text-cyan-300 cursor-pointer" onClick={toggleUserLogin}>¿Ya tienes cuenta? Ingresa aqui</p>
            </form>
        </>
     );
}

export default SignUpForm;