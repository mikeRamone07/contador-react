const Contador=() =>{
const [contador,setContador]=React.useState(0);
const disminuir=()=>setContador(contador-1);
    return (
    <div>
    <h1 className={contador<0 ?"menor" :"mayor"} >Contador:{contador}</h1>
     <hr/>
     <button onClick={()=>setContador(contador+1)}>Aumentar</button>
    <button onClick={disminuir}>Disminuir</button>
    </div>);
}