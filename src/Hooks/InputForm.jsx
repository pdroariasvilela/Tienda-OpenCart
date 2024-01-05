

function InputForm({type ,name, id, placeholder , label}) {
    return ( 
        <>  
        <div>
            <label className="text-sm font-semibold">{label}</label>
            <input
                className="border border-solid border-gray-500 px-3 py-1 w-[320px] rounded-md"
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
            />
        </div>
        </>
     );
}

export default InputForm;