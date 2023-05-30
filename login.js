function login(){
    var input = document.querySelectorAll("input")
    if(input[0].value && input[1].value){
        localStorage.setItem("email",input[0].value);
        localStorage.setItem("password",input[1].value);
        window.location.href="admin.html"
    }
    else{
        alert("sorry");
    }
}