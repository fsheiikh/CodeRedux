var person;

function setObjectName(newName)
{
    person = {
        name: newName,
        distance_traveled: 0,

        say_name : function()
                {
                    console.log("MY NAME IS", person.name)
                },

        say_something: function(statement)
            {
                console.log(person.name, " says ", statement)
            },

        walk: function()
            {
                console.log(person.name, " is walking")
                person.distance_traveled += 3
            },
        run: function()
            {
                console.log(person.name, " is running")
                person.distance_traveled += 10
            },
        crawl: function()
            {
                console.log(person.name, "is crawling")
                person.distance_traveled += 1
            }
    }
}

setObjectName("Goku")


console.log("\n\n\n", person.name, " traveled: ", person.distance_traveled)
person.say_name()
person.say_something("I am the prince of all Namekians!")
person.run()
person.walk()
person.crawl()
console.log(person.name, " traveled: ", person.distance_traveled)