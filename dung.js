const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwork2 = document.getElementById('passwork2');

//hiển thị thông báo lỗi đầu vào
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//Show succcess outline
function showSucess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check email is valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
    //check required fields
    function checkRequired(inputArr) {
        inputArr.forEach(function(input) {  
            if (input.value.trim() === '') {
                // console.log(input.id);

                showError(input, `${getFieldName(input)} is required`);
            }else {
                showSucess(input);
            }
        });
    }

    //*Get fieldName

    //*USERNAME in hoa
    // function getFieldName(input) {
    //     return input.id.toUpperCase();
    // }
    //*


    //*hien chu cai dau khoong in hoa
    // function getFieldName(input) {
    //     return input.id.charAt(0);
    // }
    //*


    //* hien chu cai dau in hoa
    // function getFieldName(input) {
    //     return input.id.charAt(0).toUpperCase();
    // }


    //*hien Username
    // function getFieldName(input) {
    //     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    // }
    //*


    //Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    //*2
    // checkRequired([username, email, password, password2]);
    //*2



//*1
    if (username.value === ''){
        showError(username,'Username is required');
    }else{
        showSucess(username);
    }

    if (email.value === ''){
        showError(email,'Email is required');
    }else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    }else{
        showSucess(email);
    }

    if (password.value === ''){
        showError(password,'Password is required');
    }else{
        showSucess(password);
    }
    
    if (password2.value === ''){
        showError(password2,'Password2 is required');
    }else{
        showSucess(password2);
    }
//*1

});
