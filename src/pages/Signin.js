import { useState } from "react";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";

const Signin =()=>{
    const [input,setInput] = useState("");
    
    return(
        <div className="background">
           <div className="popupbox">
           <h1>Welcome Back!</h1>
               <div className="inputfield">
               <div className="input_text"><p>Email</p></div>
            <img className="input_img" src=".././assets/Email.png"/>

        <MyInput
        className="MyInput"
            id="input"
            type="text"
            name="input"
            value={input}
            placeholder="Email"
            > 
       
        
        </MyInput>
        
            <div className="input_text"><p>Email</p></div>
            <img className="input_img" src=".././assets/Email.png"/>
            
        <MyInput
        className="MyInput"
            id="input"
            type="text"
            name="input"
            value={input}
            placeholder="Email"
            > 
       
        
        </MyInput>
        </div>

        </div>
       <MyButton type={"submit"} text={"Submit"}/>
       <span className="line_2"></span>OR<span className="line_3"></span>
       <div className="social">
       <img className="google" src=".././assets/Google.png"/>
       <img className="naver" src=".././assets/NavorIcon.png"/>
       </div>
       <img/>
        </div>
    )
}

    export default Signin;
