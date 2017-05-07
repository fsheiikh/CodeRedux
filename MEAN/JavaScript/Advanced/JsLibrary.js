var _ = {
   map: function(list, callback) {
     //code here;
     var newList = [];

     for(i in list)
     {
         newList.push(callback(list[i]));
     }
     return newList    
   },   
   reduce: function(list, callback) { 
     // code here;
     var newSum = 0;
     for(i in list)
     {
         newSum += callback(list[i])
     }

     return newSum
   },
   find: function(list, callback) {   
     // code here;
     var newItem = []

     for(i in list)
     {
         if(callback(list[i]))
         {
            newItem = (list[i])
            return newItem
         }
            
     }

     
   },
   filter: function() { 
     // code here;
     //same as above but iterate through entire list
   },
   reject: function() { 
     // code here;
     //opposite of above
   }
 }
// you just created a library with 5 methods!

var arr = [1, 2, 3]

arrNew = _.map(arr, function(num){return num * 3})
arrSum = _.reduce(arr, function(num){return num})
arrFind = _.find(arr, function(num){if(num % 2 == 0) return num})

console.log(".map: ", arrNew)
console.log(".sum: ", arrSum)
console.log(".find: ", arrFind)