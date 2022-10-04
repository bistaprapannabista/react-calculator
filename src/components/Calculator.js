import Input from "./Input";
import Button from "./Button";
import {useState} from "react";

const Calculator = () =>{
    const[input,setInput]=useState('');
    return(
        <>
        <Input input={input} setInput={setInput}/>  
        <br></br>  
        <Button onClick={()=>setInput(input+'(')} className="non-final" value="("/>  
        <Button onClick={()=>setInput(input+')')} className="non-final" value=")"/>  
        <Button onClick={()=>setInput(input+'%')} className="non-final" value="%"/>  
        <Button onClick={()=>setInput(input.slice(0,-1))} className="non-final" value="CE"/>  
        <br></br> 
        <Button onClick={()=>setInput(input+'7')} className="non-final" value="7"/>  
        <Button onClick={()=>setInput(input+'8')} className="non-final" value="8"/>  
        <Button onClick={()=>setInput(input+'9')} className="non-final" value="9"/>  
        <Button onClick={()=>setInput(input+'/')} className="non-final" value="/"/>  
        <br></br>
        <Button onClick={()=>setInput(input+'4')} className="non-final" value="4"/>  
        <Button onClick={()=>setInput(input+'5')} className="non-final" value="5"/>  
        <Button onClick={()=>setInput(input+'6')} className="non-final" value="6"/>  
        <Button onClick={()=>setInput(input+'*')} className="non-final" value="x"/> 
        <br></br>
        <Button onClick={()=>setInput(input+'1')} className="non-final" value="1"/>  
        <Button onClick={()=>setInput(input+'2')} className="non-final" value="2"/>  
        <Button onClick={()=>setInput(input+'3')} className="non-final" value="3"/>  
        <Button onClick={()=>setInput(input+'-')} className="non-final" value="-"/>
        <br></br>
        <Button onClick={()=>setInput(input+'0')} className="non-final" value="0"/>  
        <Button onClick={()=>setInput(input+'.')} className="non-final" value="."/>  
        <Button onClick= {()=>setInput(eval(input).toString())} className="final" value="="/>  
        <Button onClick={()=>setInput(input+'+')} className="non-final" value="+"/> 
        </>
    );
}

export default Calculator;