// import { useState } from "react";
// import { BsX } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";





function Sidebar({ closeSidebar }) {

    return (
        <div className="mt-[-50px] flex">
            <div className=" flex absolute w-full">
                <div className="bg-black w-[60%] h-screen">
                    <div className="flex justify-between font-semibold p-5 items-center border-b-2 border-s-white">
                        <h1 className="text-white">Hola!</h1>
                        <BsXLg className=" text-white text-2xl cursor-pointer" onClick={closeSidebar} />
                    </div>
                </div>
                <div className="w-[40%] bg-black opacity-50"></div>
            </div>
        </div>
    );
}

export default Sidebar;