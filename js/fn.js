//-------------------------------------------------Ejercicio 1------------------------------------------------------
let botonSaludo=document.getElementById('saludar'); 
botonSaludo.addEventListener('click' , function saludoBienvenida() {
    alert('¡Hola, mundo!'); }); 

//-------------------------------------------------Ejercicio 2-------------------------------------------------------
let saludo=document.getElementById('saludo'); 
saludo.addEventListener('click', function saludo() {
    string(document.getElementById('saludo').value)=nombre; 
    let resultado= 'Hola ${nombre}';  
})
