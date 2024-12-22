const show = document.getElementById('btn-show');

show.onclick= ()=>{
    document.querySelector('.logIn').classList.add('show');
    document.querySelector('.signIn').classList.add('show');
}
//////////////////////////////////////////////////////////////////////
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@%^&*]).{8,}$/;

const form2 = document.getElementById('myForm2');
const form = document.getElementById('myForm');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const email2 = document.getElementById('email2');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const confirm = document.getElementById('confirm');


const validation2= (event2) =>{
    var passwordValue2 = password2.value.trim();
    var emailValue2 = email2.value.trim();
    document.getElementById('email-span2').textContent = "";
    document.getElementById('password-span2').textContent = "";


    
    if(!emailRegex.test(emailValue2)){
        email.focus();
        document.getElementById('email-span2').textContent = "Check your E-mail again "
        document.getElementById('email-span2').style.color = "red";
        event2.preventDefault();
        return false;
        
    }
    if(!passwordRegex.test(passwordValue2)){
        password.focus();
        document.getElementById('password-span2').textContent = "Password is not correct "
        document.getElementById('password-span2').style.color = "red";
        event2.preventDefault();
        return false;
 
    }
    return true;

}
form2.onsubmit= validation2;


const validation = (event) => {
    var firstnameValue = firstname.value.trim();
    var lastnameValue = lastname.value.trim();
    var phoneValue = phone.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var confirmValue = confirm.value.trim();

    document.getElementById('firstname-span').textContent = "";
    document.getElementById('lastname-span').textContent = "";
    document.getElementById('phone-span').textContent = "";
    document.getElementById('email-span').textContent = "";
    document.getElementById('password-span').textContent = "";
    document.getElementById('confirm-span').textContent = "";
    

    if (firstnameValue.length < 3) {
        firstname.focus();
        document.getElementById('firstname-span').textContent = "Check First Name again";
        document.getElementById('firstname-span').style.color = "red";
        event.preventDefault();
        return false;
    }

    if (lastnameValue.length < 3) {
        lastname.focus();
        document.getElementById('lastname-span').textContent = "Check Last Name again";
        document.getElementById('lastname-span').style.color = "red";
        event.preventDefault();
        return false;

    }
    if (phoneValue.length < 10) {
        phone.focus();
        document.getElementById('phone-span').textContent = "Check your phone number again "
        document.getElementById('phone-span').style.color = "red";
        event.preventDefault();
        return false;
    }

    if(!emailRegex.test(emailValue)){
        email.focus();
        document.getElementById('email-span').textContent = "Check your E-mail again "
        document.getElementById('email-span').style.color = "red";
        event.preventDefault();
        return false;
        
    }
    if(!passwordRegex.test(passwordValue)){
        password.focus();
        document.getElementById('password-span').textContent = "Password is not strong "
        document.getElementById('password-span').style.color = "red";
        event.preventDefault();
        return false;
        
    }
    if(confirmValue != passwordValue){
        confirm.focus();
        document.getElementById('confirm-span').textContent = "Check your password again "
        document.getElementById('confirm-span').style.color = "red";
        event.preventDefault();
        return false;
        
    }
    localStorage.setItem('firstName',firstnameValue);

    return true;
}
form.onsubmit = validation;

setTimeout(function () {
    document.getElementById('loading').classList.add('hide');
}
    , 3000)

