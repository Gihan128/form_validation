var user = document.getElementById("name");
var pwd = document.getElementById("pwd");
var rpwd = document.getElementById("rpwd");
var phono = document.getElementById("phono");
var male = document.getElementById("male");
var female = document.getElementById("female");
var select = document.getElementById("country");
var box = document.getElementById("check");

function validate(){
    console.log(user.value);


    //Username validation
    if(user.value == ""){
        alert("User name is empty!");
    }


    //Password validation
    if(pwd.value == ""){
        alert("Please enter password!");
    }

    if(pwd.value.length < 6 ){
        alert("Please enter minimum 6 characters.");
    }

    if(pwd.value !== rpwd.value){
        alert("Password does not match!");
    }


    //Contact number validation
    if(!(parseInt(phono.value))){
        alert("Please enter numerical value here!");
    }

    if(phono.value == "" ){
        alert("Please enter your phono number!");
    }


    //Gender validation
    if((!(male.checked)) && (!(female.checked))){
        alert("Please select your gender!");
    }


    //Country validation
    if(select.value == "none"){
        alert("Please enter your country!");
    }


    //CheckBox validation
    if(!(box.checked)){
        alert("Please fill the box!");
    }

}
