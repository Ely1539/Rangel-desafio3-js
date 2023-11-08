const transportes = [
    { id: 1, nombre: "transporte2011", localidad: "corrientes" },
    { id: 2, nombre: "transporteLopez", localidad: "chubut" },
    { id: 3, nombre: "transNew", localidad: "caba" },
    { id: 4, nombre: "Transglobal", localidad: "lujan" }
];
let transport = JSON.parse(localStorage.getItem("transportes")) || [];
const transportesContainers = document.getElementsByClassName("transportes-container");
const transportesContainer = transportesContainers[0];


transportes.forEach((transp) => {
    const div = document.createElement("div");
    div.classList.add("transporte");
    div.innerHTML = `
        <h3>cliente : ${transp.id}</h3>
        <p>Nombre: ${transp.nombre}</p>
        <b>Localidad: ${transp.localidad}</b>
    `;
    transportesContainer.appendChild(div);
    document.body.className="entrada"
});

//crear nuevos transportes
class Transportes{
    constructor(id, nombre, localidad) {
        this.id = id;
        this.nombre = nombre;
        this.localidad = localidad;
    
    }

}
document.addEventListener("DOMContentLoaded", () => {
    const transporteForm = document.getElementById("transporteForm");
    const transportesContainer = document.getElementsByClassName("transportes-container")[0];
    const transportes = [];

    transportesForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombreInput = document.getElementById("nombre");
        const localidadInput = document.getElementById("localidad");

        const nombre = nombreInput.value;
        const localidad = localidadInput.value;

        if (nombre && localidad) {
            const nuevoTransporte = {
                id: transportes.length + 5, 
                nombre: nombre,
                localidad: localidad,
            };

            transportes.push(nuevoTransporte);

      
            const div = document.createElement("div");
            div.classList.add("transporte");
            div.innerHTML = `
                <h3>Transporte: ${nuevoTransporte.id}</h3>
                <p>Nombre: ${nuevoTransporte.nombre}</p>
                <b>Localidad: ${nuevoTransporte.localidad}</b>
            `;

            transportesContainer.appendChild(div);
            localStorage.setItem("transportes",JSON.stringify(transportes));
           
            nombreInput.value = "";
            localidadInput.value = "";0
        }  

        
    });  
});