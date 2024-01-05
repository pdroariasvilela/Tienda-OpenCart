import { useEffect, useState } from "react";
import SliderBar from "../../Components/SliderBan";

const base_uri = "https://run.mocky.io/v3/21b7c210-4cba-40ae-b4ef-974834c01545"



function HomeStorePageUN() {
    
    const [ data , setData] = useState([])

    useEffect(()=>{
        fetch(base_uri).then((response)=> response.json()).then((data)=>setData(data)).catch((error)=> console.log(error))
    },[])
    

    return ( 
        <div className="bg-gray-100">

            <div className="pt-[55px]">
            <SliderBar/>
            </div>
            <div className="flex flex-wrap container mx-auto justify-center"> 
            <div className="w-full h-"></div>     
            {data.map((res)=>(
                
                <div key={res.SKU} className=" w-[47%] m-1 max-w-sm border-solid rounded flex flex-col text-sm p-3 bg-white">
                    <img className=" w-52" src={res.imagenes[0]}/>
                    <p className="text-gray-400 font-semibold">{res.marca}</p>
                    <p className="w-full h-20">{res.titulo}</p>
                    <p className="mt-3">Vendido por {res.vendedor}</p>
                    <div className="w-full flex mb-2">
                        <p className="text-gray-400 text-xs">Antes</p>
                        <p className="ml-auto text-gray-400 text-xs line-through" >S/. {res.precio_normal}</p>
                    </div>
                    <div className="w-full flex">
                        <p className="font-semibold">Precio</p>
                        <div className="flex ml-auto mr-1 gap-2 font-semibold">
                            <p>S/{res.precio_descuento}</p>
                            <p className="bg-slate-950 text-white px-1 rounded-md mr-[-8px]" >{res.descuento}%</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
     );
}

export default HomeStorePageUN;