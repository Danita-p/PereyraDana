//-------------------------------------------------Ejercicio 1------------------------------------------------------
let botonSaludo=document.getElementById('saludar'); 
botonSaludo.addEventListener('click' , function saludoBienvenida() {
    alert('¡Hola, mundo!'); });      

//-------------------------------------------------Ejercicio 2-------------------------------------------------------
let botonSaludo2=document.getElementById('saludo'); 
botonSaludo2.addEventListener('click', function saludo2() {
    let nombre= document.getElementById('nombre').value; 
    let resultado= document.getElementById('resultado'); 
    if (nombre== "") {resultado.innerText= "Por favor ingresa tu nombre."; } 
    else {resultado.innerText = "¡Hola, " +nombre+ "!"}; }); 

//-------------------------------------------------Ejercicio 3--------------------------------------------------------
let botonAnalisis= document.getElementById('analiza'); 
botonAnalisis.addEventListener('click', function tipoDato() {
    let valor=document.getElementById('valor').value;
    let resultado=document.getElementById('resultado'); 
    let tipo= typeof valor; 
    if (isNaN(valor)== false) {resultado.innerText= "Tipo: "+tipo+ "- Es un numero valido";}
    else {resultado.innerText="Tipo: "+tipo+"- No es un numero"; }}); 

//-------------------------------------------------Ejercicio 4--------------------------------------------------------
let botonCalculo= document.getElementById('calculo'); 
botonCalculo.addEventListener('click', function resultadoConsola() {
    let resultado=document.getElementById('resultado'); 
    let calculo= 25*4-10; 
    resultado.innerText= calculo;
    console.log(calculo); }); 

//-------------------------------------------------Ejercicio 5---------------------------------------------------------
let botonSumar=document.getElementById('sumar'); 
botonSumar.addEventListener('click', function sumar() {
    let numero1 = Number(document.getElementById('n1').value);
    let numero2 = Number(document.getElementById('n2').value); 
    let resultado= document.getElementById('resultado'); 
    if ((numero1 && numero2 == " ") || (numero1== " " && numero2!==" ")) {
        resultado.innerText= 'Error.'}
    else {let calculo= numero1 + numero2; 
        resultado.innerText= 'Resultado: '+calculo; }}); 

//-------------------------------------------------Ejercicio 6----------------------------------------------------------
let botonResta= document.getElementById('resta'); 
botonResta.addEventListener('click', function restar() {
    let numero1= Number(document.getElementById('n1').value); 
    let numero2= Number(document.getElementById('n2').value); 
    let resultado= document.getElementById('resultado'); 
    let calculo= numero1-numero2; 
    if(calculo < 0) {
        resultado.innerText= 'Resultado: '+calculo+' (negativo)'; }
    else if (calculo == 0) {
        resultado.innerText= 'Resultado: '+calculo+' (cero)'; }
    else {resultado.innerText= 'Resultado: '+calculo+' (positivo)'; }}); 

//-------------------------------------------------Ejercicio 7-------------------------------------------------------------
let botonMulti= document.getElementById('multiplicar'); 
botonMulti.addEventListener('click', function multiplicar() {
    let numero1= Number(document.getElementById('n1').value); 
    let numero2= Number(document.getElementById('n2').value); 
    let resultado= document.getElementById('resultado'); 
    cuenta= numero1*numero2; 
    resultado.innerText= cuenta; 
    console.log(numero1+' x 1= '+ (numero1*1)); 
    console.log(numero1+' x 2= '+ (numero1*2)); 
    console.log(numero1+' x 3= '+ (numero1*3));
    console.log(numero1+' x 4= '+ (numero1*4));
    console.log(numero1+' x 5= '+ (numero1*5)); }); 

//-------------------------------------------------Ejercicio 8---------------------------------------------------------
let botonDiv= document.getElementById('dividir'); 
botonDiv.addEventListener('click', function dividir() {
    let dividendo= Number(document.getElementById('n1').value); 
    let divisor= Number(document.getElementById('n2').value); 
    let resultado= document.getElementById('resultado'); 
    let division= dividendo/divisor; 
    if (divisor == 0) { 
        resultado.innerText= 'Error: no se puede dividir por cero.'; }
    else {resultado.innerText= 'Resultado: '+division.toFixed(2); } }); 

//-------------------------------------------------Ejercicio 9-------------------------------------------------------------
let botonClasifica= document.getElementById('clasificar'); 
botonClasifica.addEventListener('click', function queEs() {
    let numero= Number(document.getElementById('num').value); 
    let resultado= document.getElementById('resultado'); 
    if (numero == 0) {
        resultado.innerText= 'El numero ingresado es cero'; }
    else if (numero < 0) {
        resultado.innerText= 'El numero ingresado es negativo'; }
    else {resultado.innerText= 'El numero ingresado es positivo'; }}); 

//-------------------------------------------------Ejercicio 10-----------------------------------------------------------
let botonVerifica= document.getElementById('verificar'); 
botonVerifica.addEventListener('click', function parImpar() {
    let numero= Number(document.getElementById('num').value); 
    let resultado= document.getElementById('resultado'); 
    if (numero % 2 === 0) {
        resultado.innerText= 'El numero es par'; }
    else {resultado.innerText= 'El numero es impar'; }}); 

//-------------------------------------------------Ejercicio 11-------------------------------------------------------------
let botonVerifica= document.getElementById('verificar'); 
botonVerifica.addEventListener('click', function mayorOno() {
    let nombre= document.getElementById('nombre').value;
    let edad= Number(document.getElementById('edad').value); 
    let resultado= document.getElementById('resultado'); 
    let diferencia= 18-edad; 
    if (edad>120 || edad<0) {
        resultado.innerText= 'Error. Ingresa una edad valida'; }
    else if (edad>=18) {
        resultado.innerText= nombre+' es mayor de edad'; }
    else {resultado.innerText= nombre+' es menor de edad, le faltan '+diferencia+' años'; }}); 

//-------------------------------------------------Ejercicio 12--------------------------------------------------------------
let botonComparar= document.getElementById('comparar'); 
botonComparar.addEventListener('click', function numeroMayor() {
    let numero1= Number(document.getElementById('n1').value);
    let numero2= Number(document.getElementById('n2').value); 
    let resultado= document.getElementById('resultado'); 
    if (numero1>numero2) {
        resultado.innerText= 'El mayor es: '+numero1; }
    else if(numero2>numero1) {
        resultado.innerText= 'El mayor es: '+numero2; } 
    else {resultado.innerText= 'Los dos numeros son iguales'; }}); 

//-------------------------------------------------Ejercicio 13-------------------------------------------------------------
let botonCalcular= document.getElementById('calcular'); 
botonCalcular.addEventListener('click', function rectangulo() {
    let base= Number(document.getElementById('base').value); 
    let altura= Number(document.getElementById('altura').value); 
    let resultado= document.getElementById('resultado'); 
    let area= base*altura; 
    let perimetro= 2*(base+altura); 
    if (base<=0 || altura <= 0) {
        resultado.innerText= 'Error. Ingresa numeros positivos'; }
    else {resultado.innerText= 'Area: '+area+'. Perimetro: '+perimetro;  }}); 

//-------------------------------------------------Ejercicio 14------------------------------------------------------------
let botonConvertir= document.getElementById('convertir'); 
botonConvertir.addEventListener('click', function conversor() {
    let temperatura= Number(document.getElementById('celsius').value);
    let resultado= document.getElementById('resultado'); 
    let fahrenheit= temperatura * 1.8 + 32; 
    let kelvin= temperatura + 273.15; 
    if (temperatura < -273.15) {
        resultado.innerText= 'Error de cero absoluto'; }
    else {resultado.innerText= 'Fahrenheit: '+fahrenheit.toFixed(2)+'. Kelvin: '+kelvin.toFixed(2); }}); 

//-------------------------------------------------Ejercicio 15----------------------------------------------------------------
let botonCalcular= document.getElementById('calcular');
botonCalcular.addEventListener('click', function calcularPropina() {
    let monto= Number(document.getElementById('monto').value); 
    let porcentaje= Number(document.getElementById('porcentaje').value); 
    let resultado= document.getElementById('resultado');
    let propina= monto*porcentaje/100; 
    let total= monto+propina; 
    if (porcentaje < 0 || porcentaje>100) {
        resultado.innerText= 'Error.Ingrese un porcentaje valido'; }
    else {resultado.innerText= 'Monto de propina: '+propina.toFixed(2)+'. Monto total: '+total.toFixed(2);}}); 

//-------------------------------------------------Ejercicio 16------------------------------------------------------------
let botonVerificar=document.getElementById('verificar'); 
botonVerificar.addEventListener('click', function rangoNumero() {
    let rangoMinimo= Number(document.getElementById('min').value); 
    let rangoMaximo= Number(document.getElementById('max').value); 
    let numero= Number(document.getElementById('num').value); 
    let resultado= document.getElementById('resultado'); 
    if (rangoMinimo >= rangoMaximo) {
        resultado.innerText= 'Error. El minimo debe ser menor que el maximo'; }
    else if (numero > rangoMaximo || numero < rangoMinimo) {
        resultado.innerText= 'El numero '+numero+' no se encuentra entre los rangos'}
    else if (numero <= rangoMaximo) {
        resultado.innerText= 'El numero '+numero+' se encuentra dentro de los rangos y es mayor al Minimo'; }
    else {resultado.innerText= 'El numero '+numero+' se encuentra dentro de los rangos y es menor al Maximo'; }}) 

//-------------------------------------------------Ejercicio 17-------------------------------------------------------------
let botonCalcular= document.getElementById('calcular'); 
botonCalcular.addEventListener('click', function calculadora() { 
    let operacionElegida= document.getElementById('operacion').value;
    let numero1= Number(document.getElementById('n1').value); 
    let numero2= Number(document.getElementById('n2').value); 
    let resultado= document.getElementById('resultado'); 
    if (operacionElegida == "suma") {
        resultado.innerText = 'Resultado: '+(numero1+numero2); }
    else if (operacionElegida == "resta") {
        resultado.innerText = 'Resultado: '+(numero1-numero2); } 
    else if (operacionElegida == "multi") {
        resultado.innerText = 'Resultado: '+(numero1*numero2); }
    else if (operacionElegida == "div" && (numero2 == 0)) {
        resultado.innerText = 'Error. El divisor no puede ser cero'}
    else {resultado.innerText = 'Resultado: '+(numero1/numero2); }}); 

//-------------------------------------------------Ejercicio 18----------------------------------------------------------------
let botonAplicar= document.getElementById('aplicar'); 
botonAplicar.addEventListener('click', function descuentos() {
    let precio = Number(document.getElementById('precio').value); 
    let descuento = Number(document.getElementById('descuento').value); 
    let resultado = document.getElementById('resultado'); 
    let ahorro = precio*descuento/100; 
    let precioFinal = precio-ahorro; 
    if (descuento == 0) {
        resultado.innerText = 'Sin descuento. El precio final es: '+precioFinal+'. Con un ahorro de: '+ahorro; }
    else if (descuento>= 0 && descuento<=30) {
        resultado.innerText = 'Oferta. El precio final es: '+precioFinal+'. Con un ahorro de: '+ahorro; }
    else {resultado.innerText = '¡Mega oferta!. El precio final es: '+precioFinal+'. Con un ahorro de: '+ahorro; }}); 

//-------------------------------------------------Ejercicio 19---------------------------------------------------------------
let botonVerificar= document.getElementById('verificar'); 
botonVerificar.addEventListener('click', function esBisiesto() {
    let anio= Number(document.getElementById('anio').value); 
    let resultado= document.getElementById('resultado'); 
    if (anio % 4 == 0 && anio % 400 == 0) {
        resultado.innerText= 'Este año es bisiesto' } 
    else {resultado.innerText= 'El año ingresado no es bisiesto'}}); 

//-------------------------------------------------Ejercicio 20-------------------------------------------------------------
let botonCalcular= document.getElementById('calcular'); 
botonCalcular.addEventListener('click', function iva() {
    let precio = Number(document.getElementById('precio').value); 
    let conIVA = document.getElementById('conIva').checked; 
    let resultado = document.getElementById('resultado');
    let aplicoIVA = precio*21/100; 
    let precioIVA = aplicoIVA+precio;  
    if (conIVA == true) { 
        resultado.innerText= 'Se le aplico el IVA del 21% a este precio. Precio final: '+precioIVA; }
    else {resultado.innerText = 'No se aplica el IVA del 21% a este precio. Precio final: '+precio; } }); 

//-------------------------------------------------Ejercicio 21----------------------------------------------------------
let botonConvertir = document.getElementById('convertir');
botonConvertir.addEventListener('click', function convertirSegundos() {
    let segundos= Number(document.getElementById('segundos').value); 
    let resultado= document.getElementById('resultado'); 
    let horas=  Math.floor(segundos/3600); 
    let minutos= Math.floor((segundos%3600)/60); 
    let segundosReales= segundos%60; 
    if (segundos < 0) {
        resultado.innerText= 'Error. No se aceptan numeros negativos.'; }
    else {resultado.innerText = 'Conversion: '+horas+'hs '+minutos+'m '+segundosReales+'s'} });  

//-------------------------------------------------Ejercicio 22-----------------------------------------------------------
let botonValidar = document.getElementById('validar'); 
botonValidar.addEventListener('click', function contraseña() {
    let contra1 = document.getElementById('pass1').value; 
    let contra2 = document.getElementById('pass2').value;
    let resultado = document.getElementById('resultado'); 
    if (contra1.length < 6) {
        resultado.innerText = 'La contraseña debe tener al menos 6 caracteres.'; }
    else if (contra2 !== contra1) {
        resultado.innerText = 'Las contraseñas no coinciden.'; }
    else {resultado.innerText = 'Registro correcto de contraseñas.'} }); 

//-------------------------------------------------Ejercicio 23-----------------------------------------------------------
let botonEvaluar = document.getElementById('evaluar'); 
botonEvaluar.addEventListener('click', function evaluadorNotas() {
    let nota = Number(document.getElementById('nota').value); 
    let resultado = document.getElementById('resultado'); 
    if (nota >= 0 && nota <= 3) {
        resultado.innerText= 'Desaprobado'; }
    else if (nota >= 4 && nota<= 5) {
        resultado.innerText= 'Recuperatorio'; }
    else if (nota >=6 && nota <=7) {
        resultado.innerText= 'Aprobado'; }
    else if (nota >= 8 && nota <= 9) {
        resultado.innerText= 'Muy bueno'; }
    else if (nota == 10) {
        resultado.innerText = 'Sobresaliente'; }
    else {resultado.innerText= 'Ingresa una nota valida' ;} }) 

//-------------------------------------------------Ejercicio 24-------------------------------------------------------------------
let botonCalcular= document.getElementById('calcular'); 
botonCalcular.addEventListener('click', function calcularVuelto() {
    let precio = Number(document.getElementById('precio').value); 
    let montoEntregado = Number(document.getElementById('entregado').value); 
    let resultado = document.getElementById('resultado'); 
    let cuantoFalta = precio-montoEntregado; 
    let vuelto = montoEntregado-precio; 
    if (montoEntregado < precio) {
        resultado.innerText= 'Faltan: '+cuantoFalta.toFixed(2); }
    else if (montoEntregado > precio) {
        resultado.innerText= 'El vuelto es: '+vuelto.toFixed(2); }
    else {resultado.innerText= 'Monto exacto, sin vuelto. '} }); 

//-------------------------------------------------Ejercicio 25------------------------------------------------------------
let botonCalcular= document.getElementById('calcular'); 
botonCalcular.addEventListener('click', function calculos() {
    let numero1 = Number(document.getElementById('n1').value);
    let numero2 = Number(document.getElementById('n2').value);
    let operacion = document.getElementById('op').value;
    let resultado = document.getElementById('resultado');  
    let calculo = 0; 
    if (numero1 == "" || numero2 == "") {
        resultado.innerText= 'Error. Los dos numeros deben estar completos.'; }
    else if (operacion == "suma") {
        calculo = (numero1+numero2).toFixed(2); 
        resultado.innerText = 'Resultado: '+calculo; console.log(calculo); }
    else if (operacion == "resta") {
        calculo = (numero1-numero2).toFixed(2);
        resultado.innerText = 'Resultado: '+calculo; console.log(calculo); } 
    else if (operacion == "multi") {
        calculo = (numero1*numero2).toFixed(2); 
        resultado.innerText = 'Resultado: '+calculo; console.log(calculo); }
    else if (operacion == 'pot') {
        calculo = Math.pow(numero1, numero2).toFixed(2);
        resultado.innerText = 'Resultado: '+calculo; console.log(calculo); }
    else if (operacion == "div" && (numero2 == 0)) {
        resultado.innerText = 'Error. El divisor no puede ser cero'}
    else { calculo = (numero1/numero2).toFixed(2); 
        resultado.innerText = 'Resultado: '+calculo; console.log(calculo); } })
    
let botonLimpiar=document.getElementById('limpiar'); 
botonLimpiar.addEventListener('click', function limpiarTodo() { 
    document.getElementById('n1').value= ""; 
    document.getElementById('n2').value= ""; 
    resultado.innerText= ""; }); 
    