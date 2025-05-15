import { useState } from "react"

function ChangeValue (){
    let valor = 1

    let [valor2, setValor2] = useState(1)

    return(
        <>
            <div>
                <button onClick={() => {valor+1}}>Valor1: {valor}</button>
            </div>
            <br />
            <div>
                <button onClick={() => setValor2(valor2+1)}>Valor2: {valor2}</button>
            </div>
        </>
    )

}

export default ChangeValue