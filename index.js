
    var x = documnet.getElementById("login");
    var y = documnet.getElementById("register");
    var z = documnet.getElementById("btn");


    function register() {
        x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";

        }
    function login() {
        x.style.left = "-50px";
    y.style.left = "450px";
    z.style.left = "0 ";
        }
   function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
function verifyPassword() {  
    var pw = document.getElementById("pswd").value;   
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }  
      
    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
       return false;  
    }  
     
    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
       alert("Password is correct");  
    }  
  }  
  function verifyPhonenumber() {  
    var pw = document.getElementById("phn").value;   
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the number please!";  
       return false;  
    }  
      
    if(pw.length < 10) {  
       document.getElementById("message").innerHTML = "**phone number is incorrect";  
       return false;  
    }  
     
    if(pw.length > 10) {  
       document.getElementById("message").innerHTML = "**phone number is incorrect";  
       return false;  
    } else {  
       alert("number valid");  
    }  
  }  