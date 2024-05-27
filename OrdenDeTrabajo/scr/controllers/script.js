import Contact from "./models/OrdenTrabjo.js";
import { bst } from "./dependencies.js";

let btnAdd = document.getElementById("orden-btn");
let btnSearch = document.getElementById("btnSearch");
let btnRouteTree = document.getElementById("btnRouteTree");
let btnMinValue = document.getElementById("btnMinValue");
let btnMaxValue = document.getElementById("btnMaxValue");

//Agregar
btnAdd.addEventListener("click", () => {
    let folio = document.getElementById("folio").value;
    let fallaReportada = document.getElementById("fallaReportada").value;
    let fecha = document.getElementById("fecha").value;
    let operador = document.getElementById("operador").value;
    if (!folio || !fallaReportada || !fecha || !operador) {
        Swal.fire("Rellene todos los campos");
        return;
    }
    let contacto = new Contact(folio, fallaReportada, fecha, operador);
    if (bst.add(contacto)) {
        Swal.fire("Registro exitoso");
    } else {
        Swal.fire("Error al guadar Orden");
    }
});
//buscar por folio
btnSearch.addEventListener("click", () => {
    let searchFolio = document.getElementById("SearchFolio").value;
    let verificar = bst.search(searchFolio);
    if (verificar !== null) {
        Swal.fire({
            title: 'Detalles de la Orden',
            html: `
                <p>Folio: ${verificar.folio}</p>
                <p>Falla Reportada: ${verificar.fallaReportada}</p>
                <p>Fecha: ${verificar.fecha}</p>
                <p>Operador: ${verificar.operador}</p>
            `,
            icon: 'success'
        });
    } else {
        Swal.fire("Orden no encontrada");
    }
});
//recorrido InOrder (izquierda, raiz ,derecha)
btnRouteTree.addEventListener("click", () => {
    let nodos = document.getElementById("treeContent");
    nodos.innerHTML = ""; 
    //lista para guardar los nodos en cada interacion 
    let data = [];
    //callback en uso 
    bst.data(orden => {
        data.push(orden);
    });

    if (data.length === 0) {
        Swal.fire("Registro Vacio");
    } else {
        //por cada elemto guardado se crea un nuevo div para mostrar la informacion
        data.forEach(orden => {
            let ordenInfo = document.createElement("div");
            ordenInfo.classList.add("orden-info");
            ordenInfo.innerHTML = `
                <p>Folio: ${orden.folio}</p>
                <p>Falla Reportada: ${orden.fallaReportada}</p>
                <p>Fecha: ${orden.fecha}</p>
                <p>Operador: ${orden.operador}</p>
                <hr>
            `;
            nodos.appendChild(ordenInfo);
        });
    }
});

btnMinValue.addEventListener("click", () => {
    let minNode = bst.min();
    if (minNode) {
        Swal.fire({
            title: 'Valor Mínimo',
            html: `
                <p>Folio: ${minNode.folio}</p>
                <p>Falla Reportada: ${minNode.fallaReportada}</p>
                <p>Fecha: ${minNode.fecha}</p>
                <p>Operador: ${minNode.operador}</p>
            `,
            icon: 'info'
        });
    }
});

btnMaxValue.addEventListener("click", () => {
    let maxNode = bst.max();
    if (maxNode) {
        Swal.fire({
            title: 'Valor Máximo',
            html: `
                <p>Folio: ${maxNode.folio}</p>
                <p>Falla Reportada: ${maxNode.fallaReportada}</p>
                <p>Fecha: ${maxNode.fecha}</p>
                <p>Operador: ${maxNode.operador}</p>
            `,
            icon: 'info'
        });
    }
});
