// Have the Vehicle constructor also take in a “speed” Store the speed as an attribute 
// Create a private variable called distance_travelled that starts at 0 
// Create a private method called updateDistanceTravelled that increments distance traveled by speed 
// Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise 
// Add a method called checkMiles that console.logs the distance_travelled

function VehicleConstructor(vehicleName, numberOfWheels, numberOfPassengers, vehicleSpeed){
    
    
    var self = this;
    this.name = vehicleName
    this.wheels = numberOfWheels
    this.passengers = numberOfPassengers
    this.speed = vehicleSpeed; //newly added

    this.distance_travelled = 0; //private variable | newly added
}
VehicleConstructor.prototype.updateDistanceTravelled = function()
    {
        this.distance_travelled += this.speed; //refer to speed using self in provate method
        
    }

VehicleConstructor.prototype.makeNoise = function()
    {
        console.log("Vroom")
    }

VehicleConstructor.prototype.move = function()
    {
        this.updateDistanceTravelled()
        this.makeNoise()
       
    }

VehicleConstructor.prototype.checkMile = function()
    {
        console.log(this.distance_travelled);
    }




var car = new VehicleConstructor("toyota", 4, 10, 4)
console.log("name of car: " + car.name, 
            "\nnumber of wheels is: " + car.wheels,
            "\nnumber of passengers: " + car.wheels)


var bike = new VehicleConstructor("harley", 2, 1, 4)
bike.makeNoise = "ring, ring"
console.log(bike.makeNoise)

var Bus = new VehicleConstructor("GreyHound", 10, 100, 4)
console.log("Bus passenger count is: " + Bus.passengers)

Bus.AddPassengers = function(number) {this.passengers += number}
Bus.AddPassengers(9)
console.log("Bus pasenger count is now: " + Bus.passengers)

Bus.move();
Bus.move();
Bus.checkMile();
