//  let img = document.querySelector("#test");
pokemoninfo = document.querySelector("#test")
    async function myfunction() {
      let number = 0
      for (let index = 1; index < 152; index++) {
        number = number +1
        let reponse = await fetch("https://pokeapi.co/api/v2/pokemon/"+ number );
        const pokemon = await reponse.json();
       
        
          
        let pokemondiv= document.createElement("div");
       pokemondiv.classList.add('pokediv')
        let pokeName = document.createElement('p' )
        pokeName.textContent = (pokemon.name)
        let img = document.createElement('img');
       
   
   
      
     
        
        img.setAttribute('src',pokemon['sprites']['other']['dream_world'].front_default);
      
        pokemoninfo.appendChild(pokemondiv)
        pokemondiv.appendChild(img)
        pokemondiv.appendChild(pokeName);
        
       
        
        pokemon.types.forEach(type => {
          
          const typeName = document.createElement('p');
          typeName.classList.add('type-name')
          typeName.textContent = type.type.name;
          console.log(type.type);
          pokemondiv.appendChild(typeName);

// POKEMON TYPE BACKGROUND COLOR////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       
          if (pokemon.types[0].type.name === "grass" ) {
            pokemondiv.style.background= "#EFF9DA"
          }
      
          if (pokemon.types[0].type.name === "ground" ) {
            pokemondiv.style.background= "#ead2a2"
          }

          if (pokemon.types[0].type.name === "electric" ) {
            pokemondiv.style.background= "#ffe3c0"
          }

          if (pokemon.types[0].type.name === "fairy" ) {
            pokemondiv.style.background= "#fde1f0"
          }

          if (pokemon.types[0].type.name === "fighting" ) {
            pokemondiv.style.background= "#ddadaf"
          }

          if (pokemon.types[0].type.name === "fire") {
             pokemondiv.style.backgroundColor = "#F9D8D6"
          }

          if (pokemon.types[0].type.name === "bug") {
             pokemondiv.style.backgroundColor = "#b8e0d2"
          }
          
          if (pokemon.types[0].type.name === "normal") {
             pokemondiv.style.backgroundColor = "#f0efeb"   
          }
          
          if (pokemon.types[0].type.name  === "poison"  ) {
            pokemondiv.style.backgroundColor = "#9d9fb6"
          }

          if (pokemon.types[0].type.name  === "psychic"  ) {
            pokemondiv.style.backgroundColor = "#c1c6fc"
          }

          if (pokemon.types[0].type.name  === "rock"  ) {
            pokemondiv.style.backgroundColor = "#bc987e"
          }

          if (pokemon.types[0].type.name  === "ghost"  ) {
            pokemondiv.style.backgroundColor = "#dcd0ff"
          }

          if (pokemon.types[0].type.name  === "ice"  ) {
            pokemondiv.style.backgroundColor = "#d0fefe"
          }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// POKEMON TYPE COLOR////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

          if (type.type.name === "poison" ) {
            typeName.style.background = "#bf9cfc"
          }
    
          if (type.type.name === "grass" ) {
            typeName.style.background = "#82cbb2"
          }
          
          if (type.type.name === "electric" ) {
            typeName.style.background = "#fdde6c"
          }
          
          if (type.type.name === "fire" ) {
            typeName.style.background = "#F6958E"
          }
    
          if (type.type.name === "flying" ) {
            typeName.style.background = "#dddddd"
          }
          
          if (type.type.name === "water" ) {
            typeName.style.background = "#dddddd"
          }
    
        
        });
      
       
       
        
    }
 
      console.log(number)  
    }

    function afficherpokemon(){
      return myfunction()
    }

    (async() => {
      await afficherpokemon() 
    })();
      
 
   
   
      
       