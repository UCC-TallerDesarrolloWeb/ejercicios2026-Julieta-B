/**
 * Conversión de unidades de metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - El id de los metros, yardas, pies y pulgadas
 * @param {number} valor - El valor de los metros, yardas, pies y pulgadas
 * @return 
 */

const cambiarUnidadesR = (id, valor) => {
    let metro, pulgada, pie, yarda;
    const form = document.lasUnidades;

    if (isNaN(valor)) {
        alert("Se introdujo un caracter inválido");
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    } else {
        if (id === "metro") {
            metro = valor;
            pulgada = valor * 39.3701;
            pie = valor * 3.28084;
            yarda = valor * 1.09361;
        } else if (id === "pulgada") {
            metro = valor * 0.0254;
            pulgada = valor;
            pie = valor * 0.083333;
            yarda = valor * 0.027778;
        } else if (id === "pie") {
            metro = valor * 0.3048;
            pulgada = valor * 12;
            pie = valor;
            yarda = valor * 0.333333;
        } else if (id === "yarda") {
            metro = valor * 0.9144;
            pulgada = valor * 36;
            pie = valor * 3;
            yarda = valor;
        }
    }

    form.unid_metro.value = metro;
    form.unid_pulgada.value = pulgada;
    form.unid_pie.value = pie;
    form.unid_yarda.value = yarda;
};

function cambiarUnidades(id,valor){
    if(isNaN(valor)){
        alert("Se introdujo un caracter inválido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }
    else if(id=="metro"){
        document.lasUnidades.unid_metro.value = valor;
        document.lasUnidades.unid_pulgada.value = valor * 39.3701;
        document.lasUnidades.unid_pie.value = valor * 3.28084;
        document.lasUnidades.unid_yarda.value = valor * 1.09361;

    }else if(id=="pulgada"){
        document.lasUnidades.unid_metro.value = valor * 0.0254;
        document.lasUnidades.unid_pulgada.value = valor;
        document.lasUnidades.unid_pie.value = valor * 0.083333;
        document.lasUnidades.unid_yarda.value = valor * 0.027778;
    }
    else if(id=="pie"){
        document.lasUnidades.unid_metro.value = valor * 0.3048;
        document.lasUnidades.unid_pulgada.value = valor * 12;
        document.lasUnidades.unid_pie.value = valor;
        document.lasUnidades.unid_yarda.value = valor * 0.333333;
    }
    else if(id=="yarda"){
        document.lasUnidades.unid_metro.value = valor * 0.9144;
        document.lasUnidades.unid_pulgada.value = valor * 36;
        document.lasUnidades.unid_pie.value = valor * 3;
        document.lasUnidades.unid_yarda.value = valor;
    }
}

function convertirGR(id){
    var grad, rad;
    if(id=="grados"){
        grad= document.getElementById(id).value;
        document.getElementById("radianes").value=(grad*Math.PI)/180;
    }
    if(id=="radianes"){
        grad= document.getElementById(id).value;
        document.getElementById("grados").value=(rad*180)/Math.PI;
    }
}


function mostrar_ocultar(valor){
    if (valor=="val_mostrar"){
        document.getElementById("divMo").style.display = 'block';
    }else if (valor== "val_ocultar") {
        document.getElementById("divMo").style.display = 'none';
    }
}


function suma() {
    var n1, n2;
    n1=Number(document.getElementsByName("sum_num1")[0].value);
    n2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value = n1 + Number(n2);
}
