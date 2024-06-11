// receber resposta da API
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonName = document.querySelector(".pokemon_name")
const pokemonImag = document.querySelector(".pokemonimg")
const pokemonForm = document.querySelector("form")
const pokemoni

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {

        const data = await APIResponse.json();
        return data;
    }
};

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);

    alert(data.id)
    console.log(data);
    
};


renderPokemon(8);