/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

const convertirUnidades = (id, valor) => {
    // Se crean las variables al principio
    let met, pul, pie, yar;

    // Si el valor ingresado tiene una coma, la reemplazamos por un punto
    if (typeof valor === 'string' && valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    // Validación
    if (isNaN(valor) || valor === "") {
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    } else if (id === "metro") {
        met = valor;
        pul = valor * 39.3701;
        pie = valor * 3.28084;
        yar = valor * 1.09361;
    } else if (id === "pulgada") {
        met = valor * 0.0254;
        pul = valor;
        pie = valor * 0.083333;
        yar = valor * 0.027778;
    } else if (id === "pie") {
        met = valor * 0.3048;
        pul = valor * 12;
        pie = valor;
        yar = valor * 0.333333;
    } else if (id === "yarda") {
        met = valor * 0.9144;
        pul = valor * 36;
        pie = valor * 3;
        yar = valor;
    }

    // Asignación de los valores a los campos de la interfaz de usuario al final
    document.lasUnidades.unid_metro.value = met;
    document.lasUnidades.unid_pulgada.value = pul;
    document.lasUnidades.unid_pie.value = pie;
    document.lasUnidades.unid_yarda.value = yar;
}

function convertirgr(id){
    var grad, rad;
    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI) / 180;
    }
    if (id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180) / Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}
function mostrar_ocultar(value){
    if (value=="val_mostrar"){
        document.getElementById("divMo").style.display = 'block';
    }else if (value == "val_ocultar") {
        document.getElementById("divMo").style.display = 'none';
    }
}