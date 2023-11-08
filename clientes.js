const clientes = [
    { id: 1, nombre: "sirius", localidad: "caba" },
    { id: 2, nombre: "sell", localidad: "moreno" },
    { id: 3, nombre: "roxy", localidad: "lujan" },
    { id: 4, nombre: "press", localidad: "entre Rios" },
    { id: 5, nombre: "antt", localidad: "corrientes" },
    { id: 6, nombre: "times", localidad: "la Plata" },
    { id: 7, nombre: "rolls", localidad: "caba" },
    { id: 8, nombre: "reich", localidad: "chubut" },
    { id: 9, nombre: "rrjj", localidad: "chubut" },
    { id: 10, nombre: "parts", localidad: "lujan" },
   
   
];
let client = JSON.parse(localStorage.getItem("transportes")) || [];
const clientesContainers = document.getElementsByClassName("clientes-container");
const clientesContainer = clientesContainers[0];


clientes.forEach((cliente) => {
    const div = document.createElement("div");
    div.classList.add("cliente");
    div.innerHTML = `
        <h3>cliente : ${cliente.id}</h3>
        <p>Nombre: ${cliente.nombre}</p>
        <b>Localidad: ${cliente.localidad}</b>
    `;
    clientesContainer.appendChild(div);
    document.body.className="entrada"
});

//crear nuevos clientes
class Clientes {
    constructor(id, nombre, localidad) {
        this.id = id;
        this.nombre = nombre;
        this.localidad = localidad;
    
    }

}
document.addEventListener("DOMContentLoaded", () => {
    const clienteForm = document.getElementById("clienteForm");
    const clientesContainer = document.getElementsByClassName("clientes-container")[0];
    const clientes = [];

    clienteForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombreInput = document.getElementById("nombre");
        const localidadInput = document.getElementById("localidad");

        const nombre = nombreInput.value;
        const localidad = localidadInput.value;

        if (nombre && localidad) {
            const nuevoCliente = {
                id: clientes.length + 11, 
                nombre: nombre,
                localidad: localidad,
            };

            clientes.push(nuevoCliente);

      
            const div = document.createElement("div");
            div.classList.add("cliente");
            div.innerHTML = `
                <h3>Cliente: ${nuevoCliente.id}</h3>
                <p>Nombre: ${nuevoCliente.nombre}</p>
                <b>Localidad: ${nuevoCliente.localidad}</b>
            `;

            clientesContainer.appendChild(div);

            localStorage.setItem("clientes",JSON.stringify(clientes));
            nombreInput.value = "";
            localidadInput.value = "";
        }
    });
});