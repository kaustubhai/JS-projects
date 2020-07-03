const first = document.getElementById('first_name');
const last = document.getElementById('last_name');
const mail = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('cnf-password');
const form = document.getElementById('form');

function showError(input, message){
    const parent = input.parentElement;
    const lab = parent.querySelector('label');
    lab.className = 'error';
    const small = parent.querySelector('small');
    small.innerHTML = message;
    small.className = "msg-e";
}
function showSuccess(input){
    const parent = input.parentElement;
    const lab = parent.querySelector('label');
    lab.className = 'success';
    const small = parent.querySelector('small');
    small.className = "msg";
    const val = parent.querySelector('input');
}


function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, "This feild cant be empty");
        }
        else{
            showSuccess(input);
        }
    })
}

function passCheck(pass, pass2){
    if(pass.value !== pass2.value){
        showError(password2, "PASSWORDS dont match");
        showError(password,"");
    }
    else if(pass.value.length < 8){
        showError(password, "PASSWORD cant be less than 8 characters");
        showError(password2, "");
    }
    else{
        showSuccess(password2);
        showSuccess(password);
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([first, last, mail, password, password2]);
    console.log(first, first.value);
    passCheck(password, password2);
});