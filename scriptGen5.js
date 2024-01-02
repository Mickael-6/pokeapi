pokemoninfo = document.querySelector("#card")
   
async function myfunction() {
      let number = 494
      
      for (let index = 1; index < 156; index++) {
        number = number + 1
        let reponse = await fetch("https://pokeapi.co/api/v2/pokemon/"+ number );
        const pokemon = await reponse.json();
       
        let pokemondiv= document.createElement("div");
        pokemondiv.classList.add('pokediv')
        let pokeName = document.createElement('p' )
        pokeName.classList.add('pokemonName')
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
          // console.log(type.type);
          pokemondiv.appendChild(typeName);

// POKEMON TYPE BACKGROUND COLOR////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       
function pokemonBackgroundColor() {
         
  if (pokemon.types[0].type.name === "grass" ) {
    pokemondiv.style.background= "#EFF9DA"
  }

  if (pokemon.types[0].type.name === "water" ) {
    pokemondiv.style.background= "#CBE4F9"
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

  if (pokemon.types[0].type.name  === "dark"  ) {
    pokemondiv.style.backgroundColor = "#666a6d"
  }
  
  if (pokemon.types[0].type.name  === "steel"  ) {
    pokemondiv.style.backgroundColor = "#dae4ee"
  }

  if (pokemon.types[0].type.name  === "dragon"  ) {
    pokemondiv.style.backgroundColor = "#ccdfdc"
  }

}
pokemonBackgroundColor()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// POKEMON TYPE COLOR////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        function pokemonTypeColor() {
          
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
            typeName.style.background = "#d0fefe"
          }

          if (type.type.name === "bug" ) {
            typeName.style.background = "#bdcaa8"
          }

          if (type.type.name === "normal" ) {
            typeName.style.background = "#b5ced4"
          }

          if (type.type.name === "ground" ) {
            typeName.style.background = "#C8A796"
          }

          if (type.type.name === "fairy" ) {
            typeName.style.background = "#E0C1C1"
          }
    
          if (type.type.name === "fighting" ) {
            typeName.style.background = "#EEA988"
          }

          if (type.type.name === "psychic" ) {
            typeName.style.background = "#C2A5CC"
          }

          if (type.type.name === "rock" ) {
            typeName.style.background = "#d6e0e6"
          }
    
          if (type.type.name === "ghost" ) {
            typeName.style.background = "#b790d4"
          }

          if (type.type.name === "ice" ) {
            typeName.style.background = "#ffffff"
          }
          if (type.type.name === "dragon" ) {
            typeName.style.background = "#89cff0"
          }

          if (type.type.name === "steel" ) {
            typeName.style.background = "#d2d3e1"
          }
          
          if (type.type.name === "dark" ) {
            typeName.style.background = "#7e8d9f"
          }
    
    
        }
        pokemonTypeColor()   
  

        
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
        
   
