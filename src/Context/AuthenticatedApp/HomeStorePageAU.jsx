import { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";

import { useContext } from "react";
import { UserContext } from "../useContext/userContext";

import SliderBar from "../../Components/SliderBan";


const base_uri = "https://run.mocky.io/v3/21b7c210-4cba-40ae-b4ef-974834c01545"

function HomeStorePageAU() {

    const { LocalStorageGetItem, LocalStorageSetItem } = useContext(UserContext)

    const [data, setData] = useState([])

    const [listLiked, setListLiked] = useState(LocalStorageGetItem())

    useEffect(() => {
        fetch(base_uri).then((response) => response.json()).then((data) => setData(data)).catch((error) => console.log(error))
    }, [])

    function updateLikedProduct(newListLike) {
        setListLiked(newListLike)
        LocalStorageSetItem(newListLike)
    }

    function toggleLikedProduct(idCard) {

        const likedata = data[idCard]

        const isAlreadyLiked = listLiked.some(product => product.SKU === likedata.SKU)

        if (!isAlreadyLiked) {
            const newLiked = [...listLiked, likedata]
            updateLikedProduct(newLiked)

        } else {
            const newListRemove = listLiked.filter(item => item.SKU !== likedata.SKU)

            updateLikedProduct(newListRemove)
        }

    }


    // useEffect(() => {
    //     console.log(listLiked)
    // }, [listLiked])



    return (
        <div className="bg-gray-100">
            <div className="pt-[55px]">
                <SliderBar />
            </div>
            <div className="flex flex-wrap container mx-auto justify-center">
                <div className="w-full "></div>
                {data.map((res, index) => (

                    <div key={index} className=" w-[47%] m-1 max-w-sm border-solid rounded flex flex-col text-sm p-3 bg-white">
                        <img className=" w-52" src={res.imagenes[0]} />
                        <p className="text-gray-400 font-semibold">{res.marca}</p>
                        <p className="w-full h-20">{res.titulo}</p>

                        {listLiked.some((product) => product.SKU === res.SKU) ? (
                            <BsHeartFill
                                key={index}
                                onClick={() => toggleLikedProduct(index)}
                                className="ml-auto text-lg cursor-pointer text-red-600"
                            />
                        ) : (
                            <BsHeart
                                key={index}
                                onClick={() => toggleLikedProduct(index)}
                                className="ml-auto text-lg cursor-pointer text-gray-600"
                            />
                        )}

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

export default HomeStorePageAU;