function clicked()
{
    $.ajax({url:"https://api.github.com/users/fsheiikh", success: function(result)
    {   
        console.log(result)
        $("#name").html(result.login)
    } })
}