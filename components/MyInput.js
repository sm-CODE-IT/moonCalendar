import React from "react"

const MyInput=({id,type,name,value,onChange,placeholder})=>{
    return(
    <div>
        
        <input 
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        />
        
    </div>
    )

}
export default MyInput;