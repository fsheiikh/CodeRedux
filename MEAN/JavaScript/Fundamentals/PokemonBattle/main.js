// Write code that will add a new player to the game object's players property when a user chooses.
// Create functionality that sets each players' card property to a random Pokemon. 
//Use the Pokemon API (http://pokeapi.co/api/v1/pokemon) to grab this data, taking advantage of jQuery's $.ajax method.
// Display the resulting cards in the browser.
// Add logic that compares the Pokemon cards that each player holds and declares a winner in a battle between them!

var trainer = document.getElementById("trainers")//will get the trainer div on th ehtml
var winner = document.getElementById("winner")

var game = {

  players: [],

  addPlayer: function(name){

    var rand = Math.floor((Math.random() * 150) +  1)//get random pokemon from 1-150
   
        $.ajax({url: "http://pokeapi.co/api/v2/pokemon/"+rand+"/", success: function(result){

            var pokemon = result //pokemon object
            var player; //last player added
            var max; //
            var nameOfWinner;
            
            player = playerConstructor(name) //cerates new playerobejct
            game.players.push(player) //add player to game and populate player object
            player.addCard(pokemon) //give that player the pokemon from the ajax request

            //populate div with new player data 
            trainer.innerHTML += player.name + " has a " + 
                                player.hand[0].name + " with exp " + //[pkemon name]
                                player.hand[0].base_experience + "<br>" //pokemon base exp

            //the following lines of code determine who is the winner of all the trainers added
            max = player.hand[0].base_experience; //make first player winner at first 
            nameOfWinner = player.name

            for(i = 0; i < game.players.length; i++) //loop through all players to get winner
            {
                if(max < game.players[i].hand[0].base_experience)
                {
                    max = game.players[i].hand[0].base_experience
                    nameOfWinner = game.players[i].name
                }
                    
            }

            
            winner.innerHTML = " The winner is : " + nameOfWinner + "!!!"
            console.log(player)
        }});    
    
  }
};

function playerConstructor(name){
  player = {};
  player.name = name;
    player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
};

//this fucntion is envoked from the buttom in html page
function envokeNewTrainer()
{   
    game.addPlayer(document.getElementById("txtBox").value)//calls teh game.addPalyer method and passes in the text from the input tag text
}

