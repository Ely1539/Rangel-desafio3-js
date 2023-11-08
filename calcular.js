const calcularIVA= (precioFinal) => precioFinal * 0.21;
const calcularComisionTrans= (precioFinal) => precioFinal * 0.30;
const calcularGananciaNetaTrans= (precioFinal, iva, comision) => precioFinal - iva - comision;
document.body.className="entrada"

const simuladorForm = document.getElementById("simuladorForm");
const kilosInput = document.getElementById("kilos");
const precioPorKiloInput = document.getElementById("precioPorKilo");
const calcularButton = document.getElementById("calcularButton");
const resultadosDiv = document.getElementById("resultados");
const precioFinalTrans = document.getElementById("precioFinal");
const ivaTrans = document.getElementById("iva");
const comisionTrans= document.getElementById("comision");
const gananciasTrans= document.getElementById("ganancias");

calcularButton.addEventListener("click", () => {
    const kilos = Number(kilosInput.value);
    const precioPorKilo = Number(precioPorKiloInput.value);
    const precioFinal = kilos * precioPorKilo;
    const iva = calcularIVA(precioFinal);
    const comision = calcularComisionTrans(precioFinal);
    const ganancias = calcularGananciaNetaTrans(precioFinal, iva, comision);

    precioFinalTrans.textContent = `$${precioFinal}`;
    ivaTrans.textContent = `$${iva}`;
    comisionTrans.textContent = `$${comision}`;
    gananciasTrans.textContent = `$${ganancias}`;
    resultadosDiv.style.display = "block";
});