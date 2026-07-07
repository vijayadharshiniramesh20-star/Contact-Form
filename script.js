document.getElementById("contactForm").addEventListener("submit", function(event){

event.preventDefault();

document.getElementById("nameError").innerHTML="";
document.getElementById("emailError").innerHTML="";
document.getElementById("messageError").innerHTML="";
document.getElementById("successMessage").innerHTML="";

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let message=document.getElementById("message").value.trim();

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let valid=true;

if(name==""){
document.getElementById("nameError").innerHTML="Please enter your name";
valid=false;
}

if(email==""){
document.getElementById("emailError").innerHTML="Please enter your email";
valid=false;
}
else if(!email.match(emailPattern)){
document.getElementById("emailError").innerHTML="Enter a valid email";
valid=false;
}

if(message==""){
document.getElementById("messageError").innerHTML="Please enter your message";
valid=false;
}

if(valid){
document.getElementById("successMessage").innerHTML="Form submitted successfully!";
document.getElementById("contactForm").reset();
}

});