function ButtonAccount({children , onclick}) {
    return ( 
        <button onClick={onclick} className=" p-4 flex cursor-pointer w-[90%] text-gray-600 hover:text-black ">{children}</button>
     );
}

export default ButtonAccount;