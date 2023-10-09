async function getPokemon() {
    let fetchapi = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000");
    let toJson = await fetchapi.json();
    console.log(toJson.results);
    let fetchapi2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*100)}/`)
    let toJson2 = await fetchapi2.json();
    console.log(toJson2);
    console.log(toJson2.sprites.front_default);

}

getPokemon();