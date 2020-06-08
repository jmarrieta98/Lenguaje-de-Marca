debugger
function suma() {
    var numero1 = Number($("#a").val());
    var numero2 = Number($("#b").val());
    var sumar = numero1 + numero2;
    var resultado = $("#r").val(sumar);
 }
 
 function resta() {
    var numero1 = Number($("#a").val());
    var numero2 = Number($("#b").val());
    var restar = numero1 - numero2;
    var resultado = $("#r").val(restar);
 }
 
 function multiplicacion() {
    var numero1 = Number($("#a").val());
    var numero2 = Number($("#b").val());
    var multiplicar = numero1 * numero2;
    var resultado = $("#r").val(multiplicar);
 }
 
 function division() {
    var numero1 = Number($("#a").val());
    var numero2 = Number($("#b").val());
    var dividir = numero1 / numero2;
    var resultado = $("#r").val(dividir);
 }
 function exponente() {
    var numero1 = Number($("#a").val());
    var numero2 = Number($("#b").val());
    var exponente= numero1 ** numero2;
    var resultado = $("#r").val(exponente);
 }
 function raiz() {
    var numero1 = Number($("#a").val());
    var raiz = Math.sqrt(numero1);
    var resultado = $("#r").val(raiz);
 }
 function porcent() { 
    var numero1= Number($("#a").val());
    var numero2 = Number($("#b").val());
    var porcent = numero1/100*numero2;
    var resultado = $("#r").val(porcent);
    }
 function borrar(){
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("r").value = "";
 }
 function mostrar_datos(){
    var resultado = document.getElementById("r").value
    var ventana = window.open("", "ventana", "width=200,height=100");
    ventana.document.write("<p> Resultado: </p>");
    ventana.document.write(resultado);
    ventana.document.title = 'Resultados';
    ventana.document.url = 'r.es';
 }

