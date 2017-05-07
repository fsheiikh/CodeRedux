
// Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers.
// Then complete the following tasks:

// Each vehicle should have a makeNoise method Using the constructor, 
// create a Bike Redefine the Bike’s makeNoise method to print “ring ring!” 
// Create a Sedan Redefine the Sedan’s makeNoise method to print “Honk Honk!”
//  Using the constructor, create a Bus Add a method to 
//     Bus that takes in the number of passengers to pick up and adds them to the passenger count​

function VehicleConstructor(vehicleName, numberOfWheels, numberOfPassengers){
    
    var vehicle = {};

    vehicle.name = vehicleName
    vehicle.wheels = numberOfWheels
    vehicle.passengers = numberOfPassengers

    vehicle.makeNoise = function()
    {
        console.log("Vroom")
    }

    return vehicle
}

var car = VehicleConstructor("toyota", 4, 10)
console.log("name of car: " + car.name, 
            "\nnumber of wheels is: " + car.wheels,
            "\nnumber of passengers: " + car.wheels)


var bike = VehicleConstructor("harley", 2, 1)
bike.makeNoise = "ring, ring"
console.log(bike.makeNoise)

var Bus = VehicleConstructor("GreyHound", 10, 100)
console.log("Bus passenger count is: " + Bus.passengers)

Bus.AddPassengers = function(number) {Bus.passengers += number}
Bus.AddPassengers(9)
console.log("Bus pasenger count is now: " + Bus.passengers)
