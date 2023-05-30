function registration(){
    var input = document.querySelectorAll("input")
    if(input[0].value && input[1].value && input[2].value && input[3].value && input[4].value ){
    localStorage.setItem("fname",input[0].value);
    localStorage.setItem("lname",input[1].value);
    localStorage.setItem("email",input[2].value);
    localStorage.setItem("password",input[3].value);
    window.location.href="login.html";
}
else{
    alert("sorry")
}
}

function logout(){
    window.location.href("admin.html")
}
function dlt(){
    localStorage.clear();
    window.location.href="admin.html"
}