var node = function(number)
{
    this.value = number;
    this.next = null;

}
var SLL = function()
{
    this.head = null;
}

SLL.prototype.add = function(number)
{   
    if(this.head == null)
    {
        this.head = new node(number)
    }
    else
    {   
        var current = this.head
        while(current.next)
        {
            current = current.next
        }

        current.next = new node(number)
    }

   return this;
}

SLL.prototype.removeHead = function()
{
    if(this.head == null)
    {

    }
    else
    {
        var headToBeDeleted = this.head
        this.head = headToBeDeleted.next
        headToBeDeleted.next == null
    }

    return this
}

console.log("I am here")
var newList = new SLL();
newList.add(3).add(5).removeHead().add(5)
console.log(newList)