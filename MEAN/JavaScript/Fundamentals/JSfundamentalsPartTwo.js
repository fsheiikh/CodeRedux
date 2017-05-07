//Create a simple for loop that sums all the integers between x and y (inclusive). 
//Have it console log the final sum.

function sumBetween(x, y)
{   
    var sum = 0;
    var start = (x > y) ? y : x //if x is greater than y, then the start point is y, otherwise start point is x
    var end = (start == y) ? x : y //if start point is y, end point is x, or vice versa

    for(i = start; i <= end; i ++)
    {
        sum += i
    }
    return sum
}
console.log(sumBetween(2, 7)) //==27
console.log(sumBetween(7, 2)) //==27



//Write a loop that will go through an array, 
//find the minimum value, and then return it

function loopThroughArray(arr)
{
    var min = arr[0]

    for(i = 0; i < arr.length; i++)
    {
        min = (arr[i] < min) ? arr[i] : min //if minimum is greater than that array element, reset minimum, else, min is still min
    }
     return min
}

console.log("Minimum is: ", loopThroughArray([1, 2, 3, 4, 5, 0]))




//Write a loop that will go through an array, 
//find the average of all of the values, and then return it

function averageOfValues(arr)
{
    var sum = 0;

    for(i in arr)
    {
        sum += arr[i]
    }

    //as above so below
    // for(i = 0; i < arr.length; i++)
    // {
    //     sum += arr[i]
    // }

    return sum/arr.length
}

console.log("Average is : ", averageOfValues([1, 10, 1, 10, 1, 10]))




// Rewrite these 3 as anonymous functions assigned to variables.

var sumBetween = function(x, y)
                {   
                    var sum = 0;
                    var start = (x > y) ? y : x //if x is greater than y, then the start point is y, otherwise start point is x
                    var end = (start == y) ? x : y //if start point is y, end point is x, or vice versa

                    for(i = start; i <= end; i ++)
                    {
                        sum += i
                    }
                    return sum
                }
//repeat for other functions...


// Rewrite these as methods of an object

var myObject = {
    sum : function(x, y)
                {   
                    var sum = 0;
                    var start = (x > y) ? y : x //if x is greater than y, then the start point is y, otherwise start point is x
                    var end = (start == y) ? x : y //if start point is y, end point is x, or vice versa

                    for(i = start; i <= end; i ++)
                    {
                        sum += i
                    }
                    return sum
                },
    average : function(arr)
                {
                    var sum = 0;

                    for(i in arr)
                    {
                        sum += arr[i]
                    }

                    return sum/arr.length
                }
    
}

console.log(myObject.average([2, 3, 4, 5, 6]))

// Create a JavaScript object called person with the following properties/methods
// Properties
// name - set this as your own name  distance_traveled - set this initially as zero

// Methods

// say_name - should alert the object’s name property

// say_something - have it accept a parameter. 
//     This function should then say for example “{{your name}} says ‘I am cool’” 
//     if you pass ‘I am cool’ as an argument to this method.

// walk - have it alert for example “{{your name}} is walking” 
//     and increase distance_traveled by 3

// run - have it alert for example “{{your name}} is running” and
//     increase distance_traveled by 10

// crawl - have it alert for example “{{your name}} is crawling” and 
//     increase distance_traveled by 1

var person = {
    name: "Vegeta",
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

console.log("\n\n\n", person.name, " traveled: ", person.distance_traveled)
person.say_name()
person.say_something("I am the prince of all Namekians!")
person.run()
person.walk()
person.crawl()
console.log(person.name, " traveled: ", person.distance_traveled)