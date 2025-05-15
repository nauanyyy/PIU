import "./Escopo.css"

function Escopo (){
    const label = "Clique aqui"
    function handleClick(){
        return (
            alert("Alerta")
        )
    }
    return (
        <>
        <div>
            <h2>Teste de Componentes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam minima veniam iure, autem provident dolores. Ut, corporis officia voluptatum molestias fugiat, iure esse animi consequuntur sed eveniet totam maxime quae.</p>
        </div>
        <div>
            <button onClick = {()=>console.log("você clicou aqui")}>{label}</button>
        </div>
        <div>
            <button onClick = {handleClick}>{label}</button>
        </div>
        </>
    )
}

export default Escopo