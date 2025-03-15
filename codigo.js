function ejecutar(){
    let arreglo ="";
    let rta="";
    arreglo = document.getElementById("letra").value;
    let variable = 0;
    variable = arreglo.charCodeAt(0);
    for (let i=7;i>=0;i--){
        if (variable>=2**i){
            rta=rta + "1";
            variable = variable - 2**i;
        }else{
            rta=rta +"0";

        }

    }
    document.getElementById("texto1").innerHTML = "Salida es " + rta;

}
function ejecutar1(){
   
    let entrada = document.getElementById("binario").value;
    let caracter="";
    let suma = 0;
    
    for (let vc = 7; vc>= 0; vc--) {
        if (entrada[7-vc]== "1" ) {
            suma = suma + 2 **vc;
        
        }
    }
    caracter = String.fromCharCode(suma);
    document.getElementById("texto2").innerHTML = "Salida es " + caracter;
}
