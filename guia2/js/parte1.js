const url = 'https://thesimpsonsapi.com/api/characters'; 
//--------------------------------------------------Ejercicio 1-------------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => document.getElementById('resultado').innerHTML= data.results[0].name); 

//--------------------------------------------------Ejercicio 2-----------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => {
    const primerosCinco= data.results.slice(0, 5); 
    primerosCinco.forEach(personaje => {
        document.getElementById('resultado2').innerHTML +=
        `<p> ${personaje.name} </p>` })}); 

//--------------------------------------------------Ejercicio 3----------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => {
    const soloMujeres= data.results.filter(personaje => personaje.gender === 'Female'); 
    const cantidadMujer= soloMujeres.length;
    document.getElementById('resultado3').innerHTML += 
    `<p> Se encontraron ${cantidadMujer} personajes femeninos </p>`; 
    soloMujeres.forEach(mujer => {
        document.getElementById('resultado3').innerHTML +=
        `<p> ${mujer.name} </p>`;}); });

//--------------------------------------------------Ejercicio 4-----------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => {
    data.results.forEach(personaje => {
        document.getElementById('resultado4').innerHTML +=
        `<p> ${personaje.name} - ${personaje.occupation} </p>`; }); }); 

//--------------------------------------------------Ejercicio 5--------------------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => {
    const mayorEdad= data.results.reduce((primera, actual) => {
        if (primera.age > actual.age) {
            return primera; }
        else {return actual; }}, data.results[0]); 
    document.getElementById('resultado5').innerHTML +=
    `<p> El personaje mas viejo es ${mayorEdad.name} con ${mayorEdad.age} años </p> ` }); 

//--------------------------------------------------Ejercicio 6-----------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => {
    let botonBusca= document.getElementById('busca'); 
    botonBusca.addEventListener('click', function buscar() {
        let personaje= document.getElementById('personaje').value.toLowerCase(); 
        const encontrado = data.results.find(p => p.name.toLowerCase() === personaje); 
        let resultado = document.getElementById('resultado6');
        if (encontrado) {
        resultado.innerHTML= `<p> ${encontrado.name} es ${encontrado.occupation} y tiene ${encontrado.age} años </p> `}
        else {resultado.innerHTML= `<p> El personaje no existe </p> `}});  }); 

//--------------------------------------------------Ejercicio 7------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => {
    let botonVerifica= document.getElementById('verifica'); 
    botonVerifica.addEventListener('click', function verificar() {
        let ocupacionIngresada = document.getElementById('ocupacion').value.toLowerCase(); 
        const existe = data.results.some(ocupacion => ocupacion.occupation.toLowerCase() === ocupacionIngresada); 
        let respuesta = document.getElementById('resultado7'); 
        if (existe) {
            respuesta.innerHTML = `<p> Si existe un personaje con esa ocupacion </p>`; }
        else {respuesta.innerHTML = `<p> No se encontro ninguno </p> `; }}) }); 

//--------------------------------------------------Ejercicio 8----------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => {
    const personajes = data.results.filter(p => p.age !== null); 
    const ordenados = personajes.sort((menor, mayor) => menor.age - mayor.age); 
    const primeros5= ordenados.slice(0, 5);
    primeros5.forEach(personaje => document.getElementById('resultado8').innerHTML +=
    `<p> ${personaje.name} : ${personaje.age} </p> ` )}); 

//--------------------------------------------------Ejercicio 9---------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => {
    const primeros8= data.results.slice(0, 8); 
    primeros8.forEach(personaje => {
        document.getElementById('resultado9').innerHTML += `
        <div style="border: 1px solid gray; padding: 10px; margin: 5px; display: inline-block; ">
        <div class="tarjeta">
            <img src= "https://cdn.thesimpsonsapi.com/api/characters${personaje.portrait_path}">
            <div class="info">
                <h3> ${personaje.name} </h3>
                <p> ${personaje.occupation} </p>
                <p> Edad: ${personaje.age} </p> 
            </div>
        </div> 
        </div> `; 
    }); 
}); 

//--------------------------------------------------Ejercicio 10----------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => {
    const cantidades= data.results.reduce((conteo, genero) => {
        if(genero.gender === 'Female') {
            conteo.femenino += 1; }
        else {conteo.masculino +=1; } 
        return conteo; }, {femenino: 0, masculino: 0} ); 
    document.getElementById('resultado10').innerHTML += 
    `<p> Masculino: ${cantidades.masculino} </p>
    <p> Femenino: ${cantidades.femenino} </p> `; }); 