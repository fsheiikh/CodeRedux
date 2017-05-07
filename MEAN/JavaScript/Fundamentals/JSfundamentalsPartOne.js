//Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value.
var  x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]

for(i in x)
{
    console.log(x[i])
}

//Add a new value (100) in the array x using a push method
x.push(100);
x.push(["hello", "world", "JavaScript is Fun"])

for(i in x)
{
    console.log(x[i])
}

var pokemon = {
    name: "MewTwo",
    type: "Psychic",
    level: 100,
    moves: ["Psychic", "Kamehameha", "Scracth", "Tackle"]

}

for(key in pokemon)
{
    console.log(pokemon[key]);
}

console.log(pokemon.moves)