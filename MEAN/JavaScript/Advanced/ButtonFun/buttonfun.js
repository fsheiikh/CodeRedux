function clicked()
{   console.log($("button").css("background-color"))
    if($("button").css("background-color") == "rgb(30, 144, 255)")
    {     
        $("button").css("background-color", "red")
    }
    else 
    {
        $("button").css("background-color", "rgb(30, 144, 255)")
    }
    
     
}

$(this).hover(
  function() {
      console.log("this")
    $("button").css("background-color", "green");
  }, function() {
    $("button").css("background-color", "red");
  }
);