
$(document).ready(function(){
    $(".loginbox").hide();
    $("#btn").click(function(){
        var name=$("#name").val();
        var pass=$("#pw").val();
        localStorage.setItem("name",name);
        localStorage.setItem("pass",pass);
     //redairact to the login          
     $(".loginbox1").hide();
    $(".loginbox").show();
       
})
  })         
    
//check and login 
$("#btn1").click(function(check){
    check.preventDefault();
    var entername=$("#name1").val();
    var enterpass=$("#pass1").val();

    var checkname=localStorage.getItem("name");
    var checkpass=localStorage.getItem("pass");

    if (entername!==checkname || enterpass!==checkpass) {
          alert("password or userName wrong")
    }else{
        window.location.href="../index1.html"
    }
});
