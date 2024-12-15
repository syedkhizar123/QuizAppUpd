
var username = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")
var verifyemail = document.getElementById("loginemail")
var verifypassword = document.getElementById("loginpassword")

function signup(){
    if(username.value.trim() === "" || email.value.trim() === "" || password.value.trim() === ""){
        Swal.fire({
            title: "Fill the Fields ",
            text: "Fill all the fields given above",
            icon: "error"
          });
    } else{
        Swal.fire({
            title: "Account Created",
            text: "Account has been created successfully",
            icon: "success"
          });
        localStorage.setItem("name" , username.value)
    }
}

function login(){
    if(verifypassword.value.trim() === "" || verifyemail.value.trim() === ""){
        Swal.fire({
            title: "Fill the Fields ",
            text: "Fill all the fields given above",
            icon: "error"
          });
    }
    else{
        if((verifyemail.value == email.value) || (verifypassword.value == password.value)){
            window.location.href = "quiz.html"
        } else{
            Swal.fire({
                title: "Invalid Username or Password ",
                text: "Invalid Username or Password ",
                icon: "error"
              });
        }
    }
}