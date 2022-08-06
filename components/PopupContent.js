import React from 'react';

const PopupContent=(props)=>{
    
    return(
        <div className='background'>
       
        <div className='popupbox'>
        <img  className="signin_logo"src=".././assets/Logo.png"/>
        <span className='line'></span>
            <button className="close" onClick={props.handleclose}>x</button>
            {props.content}  
        </div>
        </div>
    )
}

 
export default PopupContent;