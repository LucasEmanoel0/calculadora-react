import { useState } from "react"
import Button from "./Button"
import './styles/Calcula.css'
import './styles/button.css'
import './styles/result.css'
export default function Calculadora(){
    const[num,setNum] = useState("")
    const[operador,setOperador]=useState("")
    const[numAnterior,setNumAnterior] = useState("")

    function inputNum(n){
        if(num==0){
            setNum(String(n))
        }else{
            setNum( num + String(n))
        }
    }

    function clear(){
        setNum(0)
    }
    function porcentage(){
        setNum(num/100)
    }

    function operadorhandle(){
        if(num>0){
            setNum(-num)
        }else{
            setNum(Math.abs(num))
        }
    }

    function result(){
        if(operador == "+"){
            setNum(Number(numAnterior) + Number(num))
        }
        else if(operador=="-"){
            setNum(Number(numAnterior) - Number(num))
    }
        else if(operador=="x"){
           setNum(Number(numAnterior) * Number(num))
}
        else{
           setNum(Number(numAnterior) / Number(num))

}
}

    function handleOperador(x){
        setOperador(x)
        setNumAnterior(num)
        setNum("")
    }
    return(
        <>
           <div className="result">
           <h1>{num}</h1>
           </div>
            <div className="Calculadora">
            <Button number="AC" onClick={clear}></Button>
            <Button number="+/-" onClick={operadorhandle}></Button>
            <Button number="%" onClick={porcentage}></Button>
            <Button className="orange"  number="/" onClick={()=>handleOperador("/")}></Button>
            <Button number={7} onClick={()=>inputNum(7)}></Button>
            <Button number={8} onClick={()=>inputNum(8)} ></Button>
            <Button number={9}  onClick={()=>inputNum(9)} ></Button>
            <Button className="orange"  number='X' onClick={()=>handleOperador("x")}></Button>
            <Button number={4} onClick={()=>inputNum(4)} ></Button>
            <Button number={5} onClick={()=>inputNum(5)} ></Button>
            <Button number={6} onClick={()=>inputNum(6)} ></Button>
            <Button className="orange"  number='-'onClick={()=>handleOperador("-")}></Button>
            <Button number={1} onClick={()=>inputNum(1)} ></Button>
            <Button number={2} onClick={()=>inputNum(2)} ></Button>
            <Button number={3} onClick={()=>inputNum(3)} ></Button>
            <Button className="orange"  number="+" onClick={()=>handleOperador("+")}></Button>
            <Button number={0} onClick={()=>inputNum(0)} ></Button>
            <Button number="," onClick={()=>inputNum(",")}></Button>
            <Button  style={{visibility:"hidden"}} number=","></Button>
            <Button number="=" onClick={result}></Button>
        </div>

        </>
        
        
    )
}
