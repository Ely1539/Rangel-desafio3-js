let transportes = document.getElementById("operadores");
let formulario = document.getElementById("formulario");
let operadorInput = document.getElementById("operadorInput");

document.body.className="entrada";
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let operador =operadorInput.value;
    if(operador==="pedro perez"){
        transportes.innerHTML ="<h1>Operador Autorizado Bienvenido a World Distribution` Sr Pedro Perez`</h1>";
        transportes.className = "positivo"
        document.body.className="entrada"
    }else if(operador === "luisa andrade"){
    transportes.innerHTML ="<h1>Operador Autorizado Bienvenido a World Distribution `Srta Luisa Andrade.`</h1>";
    transportes.className = "positivo"
    document.body.className="entrada"
    }else {
        transportes.innerHTML = "<h1>Operador no Autorizado `ALERTA`</h1>";
        transportes.className = "alarma" ;
        document.body.className="entrada";
        setTimeout(() => {
            window.location.reload();}, 700);
 }
     }    
 );

