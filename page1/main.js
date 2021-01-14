function validate(){typeof
  console.log('here')
  var username=document.getElementById("username");
  var password=document.getElementById("password");
  if(username.value==="admin" && password.value === 'User'){
    // alert("login succesfully");
    location.href = "Home.html"
  }else{
    alert("username or password wrong")
    
      }
}
