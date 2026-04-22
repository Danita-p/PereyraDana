const url="https://rickandmortyapi.com/api/character"; 
//--------------------------------------------------Ejercicio 1---------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => document.getElementById('resultado1').innerHTML= data.results[0].name); 

//--------------------------------------------------Ejercicio 2---------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => {
    const primeros5= data.results.slice(0, 5); 
    primeros5.forEach(personaje => {
        document.getElementById('resultado2').innerHTML += `
        <p> ${personaje.name} - ${personaje.status} </p> `; 
    });
}); 

//--------------------------------------------------Ejercicio 3---------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => {
    const vivos = data.results.filter(personaje => personaje.status === 'Alive'); 
    const cantidadVivos= vivos.length; 
    document.getElementById('resultado3').innerHTML += `
    <p> Personajes vivos en esta pagina: ${cantidadVivos} </p>`; 
    vivos.forEach(personaje => {
        document.getElementById('resultado3').innerHTML += `
        <p> ${personaje.name} </p> `; 
    }); 
}); 

//--------------------------------------------------Ejercicio 4---------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => {
    const humanos = data.results.filter(personaje => personaje.species === 'Human'); 
    const totalHumanos= humanos.length; 
    document.getElementById('resultado4').innerHTML += `
    <p> Encontre ${totalHumanos} humanos </p> `; 
    humanos.forEach(personaje => {
        document.getElementById('resultado4').innerHTML += `
        <p> ${personaje.name} - ${personaje.species} </p> `; 
    }); 
}); 

//--------------------------------------------------Ejercicio 5---------------------------------------------------------------
const botonMostrar= document.getElementById('mostrar'); 
botonMostrar.addEventListener('click', function objetoPersonaje() {
    const id= document.getElementById('idPersonaje').value;
    const resultado = document.getElementById('resultado5'); 
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
        if (response.ok !== true) {
            throw new Error('El personaje no existe'); }
        return response.json(); 
    })
    .then(objetoPersonaje => {
        resultado.innerHTML += `
        <p> ${objetoPersonaje.name} - ${objetoPersonaje.status} - 
        <img src= "${objetoPersonaje.image}"> </p> `; 
    })
    .catch(error => {
        resultado.innerHTML= "<p> El personaje no existe </p>"; 
    }); 
}); 

//--------------------------------------------------Ejercicio 6-------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => {
    const personajes= data.results;
    const ordenados= personajes.sort((menor, mayor) => mayor.episode.length - menor.episode.length); 
    ordenados.forEach(personaje => {
        document.getElementById('resultado6').innerHTML += `
        <p> ${personaje.name} : ${personaje.episode.length} </p> `; 
    }); 
}); 

//--------------------------------------------------Ejercicio 7--------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => {
    const personajes= data.results; 
    const tieneImagen= personajes.every(personaje => personaje.image !== ""); 
    const resultado= document.getElementById('resultado7'); 
    if (!tieneImagen) {
        resultado.innerHTML= "Hay personajes sin imagen" }
    else {resultado.innerHTML= "Todos los personajes tienen imagen" }
}); 

//--------------------------------------------------Ejercicio 8------------------------------------------------------------
const botonBuscar= document.getElementById('buscar'); 
botonBuscar.addEventListener('click', function mostrar() {
    const nombre= document.getElementById('nombre').value.toLowerCase(); 
    const resultado= document.getElementById('resultado8');
    resultado.innerHTML= "";  
    fetch(`https://rickandmortyapi.com/api/character?name=${nombre}`)
    .then(response => response.json())
    .then(data => {
        const personajes= data.results; 
        personajes.forEach(personaje => {
            resultado.innerHTML += `
            <div style="border: 1px solid gray; padding: 10px; margin: 5px; display: inline-block; ">
                <div class="info">
                    <img src="${personaje.image}">
                    <h3> ${personaje.name} </h3>
                    <p> ${personaje.status} </p> 
                </div>
            </div> `; 
        }); 
    }); 
}); 

//--------------------------------------------------Ejercicio 9-----------------------------------------------------------
fetch (url)
.then(response => response.json())
.then(data => {
    const personajes = data.results
    const especies= personajes.reduce((conteo, personaje) => { 
        const tipoEspecie= personaje.species; 
        if (!conteo[tipoEspecie]) { //usamos como objeto tipoEspecie
            conteo[tipoEspecie]= 0; } 
        conteo[tipoEspecie] += 1; 
        return conteo; }, {} //esto es el contador vacio 
    );
    const resultado = document.getElementById('resultado9'); 
    Object.entries(especies).forEach(([clave, valor]) => {
        resultado.innerHTML += `
        <p> ${clave} : ${valor} </p> `; 
    }); 
}); 

//--------------------------------------------------Ejercicio 10-----------------------------------------------------------------
fetch(url)
.then(response => response.json())
.then(data => {
    const personajes= data.results; 
    const totalPersonajes= personajes.length; 
    const vivos = personajes.filter(personaje => personaje.status === 'Alive').length; 
    const desconocido= personajes.filter(personaje => personaje.status === 'unknown').length; 
    const muertos= personajes.filter(personaje => personaje.status === 'Dead').length; 
    const masMenos= personajes.sort((menor, mayor) => mayor.episode.length - menor.episode.length); 
    const todasEspecies= personajes.map(personaje => personaje.species); 
    const especiesUnicas= [...new Set(todasEspecies)]; 
    const resultado= document.getElementById('resultado10'); 
    resultado.innerHTML += `
    <p> Total de personajes en la primera pagina: ${totalPersonajes} </p>
    <p> Estan vivos: ${vivos} </p>
    <p> Estan muertos: ${muertos} </p>
    <p> Desconocidos: ${desconocido} </p> 
    <p> El personaje con mas episodios es: ${masMenos[0].name} con ${masMenos[0].episode.length} episodios </p> 
    <p> El personaje con menos episodios es: ${masMenos[19].name} con ${masMenos[19].episode.length} episodios </p> 
    <p> Las especies encontradas son: ${especiesUnicas.join(', ')}`
}); 