//Deck of cards objects => card, deck, player
//cards => value, face, name
//deck => 52 cards, shuffle, deal (random), reset
//player => name, deck, discard, takecard

var Card = function(value,face)
{
    this.val = value
    this.face = face
    this.name = this.val + this.face
}

var Deck = function()
{
    var faces = ["h", "d", "s", "c"]
    var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k']
    this.cards = [];

    for(face in faces)
    {
        for(value in values)
        {
            this.cards.push(new Card(values[value], faces[face]))
        }
    }
}

Deck.prototype.shuffle = function()
{
    for(var i = 0; i < this.cards.length; i++)
    {
        var random1 = Math.floor(Math.random() * i) //gets random index

        var temp = this.cards[i] //sets temp to current card

        this.cards[i] = this.cards[random1] //sets current card to random card

        this.cards[random1] = temp //sets the random card to temp/initial current card
        
    }
}

Deck.prototype.deal = function()
{   
    var randomIndex = Math.floor(Math.random() * 52)
    var randomCard = this.cards[randomIndex]

    this.cards.splice(randomIndex, 1)

    return randomCard
}

Deck.prototype.reset = function()
{
    var faces = ["h", "d", "s", "c"]
    var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k']
    this.cards = [];

    for(face in faces)
    {
        for(value in values)
        {
            this.cards.push(new Card(values[value], faces[face]))
        }
    }
}

var Player = function(name)
{
    this.name = name
    this.hand = []; 
}

Player.prototype.takeCard = function(card)
{
    this.hand.push[card]
}

Player.prototype.discard = function()
{
    this.hand.pop()
}


var deck = new Deck();
console.log(deck.cards)
deck.shuffle()
console.log(deck.cards)
deck.deal()
console.log(deck.deal())

var player = new Player("Sam")

for(var i = 0; i < 26; i++) //half the deck
{
    player.takeCard(deck.deal())
}

console.log("_____________Player______________\n\n")
console.log(player)

console.log("\n\n_____________Deck________________")
console.log(deck)







