import ButtonAccount from "../../Components/ButtonAccount";
import { BsPersonCircle } from "react-icons/bs";

import { useContext } from "react";
import { UserContext } from "../useContext/userContext";



function AccountPageAU() {
    
    const {LogoutSession} = useContext(UserContext)


    return (
        <div className="bg-white pt-28 h-screen flex justify-center gap-8">
            <div className=" w-[90%] shadow-2xl flex flex-col items-center gap-2 md:w-[20%] rounded-lg">
                <div className="h-16 w-[90%]  flex items-center gap-3">
                    <BsPersonCircle className=" mx-2 text-[50px] text-gray-600" />
                    <h1>Hola! Pedro</h1>
                </div>
                <ButtonAccount children={'Perfil'}/>
                <ButtonAccount children={'Mis favoritos'}/>
                <ButtonAccount children={'Direcciones'}/>
                <ButtonAccount children={'Pedidos'}/>
                <ButtonAccount children={'Tarjetas de créditos'}/>
                <ButtonAccount children={'Atenticación'}/>
                <ButtonAccount onclick={LogoutSession} children={'Salir'}/>
            </div>
            <div className="shadow-xl flex-col items-center gap-2 md:block hidden md:w-[60%]">
                <h1 className="w-[90%]"></h1>
            </div>
        </div>
     );
}

export default AccountPageAU;