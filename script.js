function handleKeyPress(event) {
    if (event.key === 'Enter') {
        searchPokemon();
    }
}

async function searchPokemon() {
    const name = document.getElementById('pokemonName').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    try{
        const response = await fetch(url);
        if(!response.ok) throw new Error('Pokémon not found!');

        const data = await response.json();
        const imgUrl = data.sprites.front_default

        document.getElementById('pokemonImage').src = imgUrl;
        document.getElementById('pokemonImage').style.display = 'block';
        errorMessage.style.display = 'none';
    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.style.display = 'block';
        document.getElementById('pokemonImage').style.display = 'none'
    }
}


