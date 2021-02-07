const button = document.getElementById("button");
const form = document.getElementById('form');
const input = document.getElementById('input');
const p = document.getElementById("paragraph");

function validateEmail(inputText){
    
   const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (inputText.value.match(mailformat)) {
        alert("Valid email address!");
        p.innerText = '';
        return true;

    } else {
        p.innerText = "Please provide a valid email address";
        return false;
    }
}
button.addEventListener('click',function(e){
    validateEmail(input)  
    input.value = "" ;
});

function onSubmit(e){
    e.preventDefault();
    validateEmail(input)
   input.value = "" ;
}

