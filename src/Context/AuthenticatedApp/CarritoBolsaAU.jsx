import { UserContext } from "../useContext/userContext";
import { useContext, useEffect, useState } from "react";

function CarritoBolsa() {

    const { LocalStorageGetItem } = useContext(UserContext)

    const [dataBolsa, setDataBolsa] = useState(LocalStorageGetItem() || [])

    useEffect(() => {
        console.log(dataBolsa)
    })

    return (
        <div className="py-16 border-2 w-full m-auto">

            <h1 className="w-[95%] m-auto my-5 sm:w-[500px]">Carrito de Compras</h1>
            {
                dataBolsa.map((data) => (

                    <div>
                        <section className="border-2 w-[95%] m-auto my-5 sm:w-[500px] md:w-[600px]">
                            <div className="border-2 my-5 mx-1">
                                <div className="flex h-12 my-2">
                                    <div className="border-2 w-[80px] mx-2 flex items-center">
                                        <img className="w-full h-full object-cover" src={data.imagenes[0]} alt="" />
                                    </div>

                                    <div className=" flex  flex-col w-[70%] overflow-hidden h-24">
                                        <h1>{data.marca}</h1>
                                        <h1 className="truncate">{data.titulo}</h1>
                                    </div>
                                </div>

                                <div className="flex justify-between px-2 my-3">
                                    <h1>S/130</h1>

                                    <div className="flex border border-solid border-black">
                                        <button className="px-2">-</button>
                                        <p className="px-3 border border-solid border-black">2</p>
                                        <button className="px-2">+</button>
                                    </div>

                                    <h1>S/321</h1>
                                    <button>Eliminar</button>
                                </div>
                            </div>
                        </section>
                    </div>

                ))
            }

                        <section>

                            <div className="w-[95%] border m-auto h-56 my-5 sm:w-[500px]">
                                <h1>Resumen de compra</h1>

                                <div className="flex justify-between mx-5 my-6">
                                    <h1>Subtotal</h1>
                                    <p>S/.318.89</p>
                                </div>

                                <div className="flex justify-between mx-5 my-6">
                                    <h1>Total</h1>
                                    <p>S/.318.89</p>
                                </div>

                                <div className="flex flex-col w-[90%] border m-auto gap-2">
                                    <p className="text-end">Los precios incluyen IGV 18%</p>
                                    <div className="">
                                        <form className="flex justify-between" action="">
                                            <input className="w-[70%] border border-solid border-black rounded-lg " type="text" name="" id="" placeholder="codigo" />
                                            <button className="px-2 border border-solid border-black rounded-md">Aplicar</button>
                                        </form>
                                    </div>
                                </div>

                            </div>

                        </section>
        </div>
    );

}

export default CarritoBolsa;