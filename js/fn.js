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

//-------------------------------------------------Ejercicio 3--------------------------------------------
let botonAnalisis= document.getElementById('analiza'); 
botonAnalisis.addEventListener('click', function analisis() {
    let valor=document.getElementById('valor').value;
    let resultado=document.getElementById('resultado'); 
    let tipo= typeof valor; 
    if (isNaN(valor)== false) {resultado.innerText= "Tipo: "+tipo+ "- Es un numero valido";}
    else {resultado.innerText="Tipo: "+tipo+"- No es un numero"; }}); 

//-----------------------------------------------Ejercicio 4-----------------------------------------------
let botonCalculo= document.getElementById('calculo'); 
botonCalculo.addEventListener('click', function calcular() {
    let resultado=document.getElementById('resultado'); 
    let calculo= 25*4-10; 
    resultado.innerText= calculo;
    console.log(calculo); }); 

//-----------------------------------------------Ejercicio 5-----------------------------------------------
let botonSumar=document.getElementById('sumar'); 
botonSumar.addEventListener('click', function suma() {
    let numero1 = Number(document.getElementById('n1').value);
    let numero2 = Number(document.getElementById('n2').value); 
    let resultado= document.getElementById('resultado'); 
    if ((numero1 && numero2 == " ") || (numero1== " " && numero2!==" ")) {
        resultado.innerText= 'Error.'}
    else {let calculo= numero1 + numero2; 
        resultado.innerText= 'Resultado: '+calculo; }}); 

//------------------------------------------------Ejercicio 6----------------------------------------------
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

