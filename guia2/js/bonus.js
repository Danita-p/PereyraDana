const resultado = document.getElementById('resultado'); 
async function mostrarPersonajes() {
    const promesas = [
        fetch(`https://thesimpsonsapi.com/api/characters`)
        .then(response => response.json())
        .then(data => data.results), 
        fetch(`https://rickandmortyapi.com/api/character`)
        .then(response => response.json())
        .then(data => data.results)
    ]; 
    const [dataSimpsons, dataRickMorty] = await Promise.all(promesas);
    const simpsonsAleatorio = Math.floor(Math.random() * dataSimpsons.length); 
    const rickMortyAleatorio = Math.floor(Math.random() * dataRickMorty.length);
    const simpsons = dataSimpsons[simpsonsAleatorio]; 
    const rickMorty = dataRickMorty[rickMortyAleatorio];  
    resultado.innerHTML= `
    <div style="display: inline-block; width: 180px; margin: 10px; border: 1px solid; padding: 10px;">
        <div class="tarjeta"> 
            <img src="https://thesimpsonsapi.com${simpsons.portrait_path}" style="width: 100%; height: auto;"> 
            <h3> ${simpsons.name} </h3> 
            <p> ${simpsons.gender} </p> 
            <p> ${simpsons.occupation} </p> 
        </div>
    </div>
    <h1 style="display: inline-block; margin: 20px;"> VS </h1>
    <div style="display: inline-block; width: 180px; margin: 10px; border: 1px solid; padding: 10px;">
        <div class="tarjeta"> 
            <img src="${rickMorty.image}" style="width: 100%; height: auto;"> 
            <h3> ${rickMorty.name} </h3> 
            <p> ${rickMorty.gender} </p> 
            <p> ${rickMorty.status} </p> 
        </div>
    </div>
    `
}
mostrarPersonajes(); 
