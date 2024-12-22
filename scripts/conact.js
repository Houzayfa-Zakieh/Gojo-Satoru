const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@%^&*]).{8,}$/;
    
const description = document.getElementById('description');

description.oninput = () => {
    document.getElementById('text-length').textContent =
        description.value.length + " / 200";
}
const form = document.getElementById('myForm');
const firstname = document.getElementById('firstname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');



const validation = (event) => {
    var firstnameValue = firstname.value.trim();
    var phoneValue = phone.value.trim();
    var emailValue = email.value.trim();
    var descriptionValue = description.value.trimEnd();

    document.getElementById('firstname-span').textContent = "";
    document.getElementById('phone-span').textContent = "";
    document.getElementById('email-span').textContent = "";
    document.getElementById('description-span').textContent = "";


    
    if (firstnameValue.length < 3) {
        firstname.focus();
        document.getElementById('firstname-span').textContent = "Check First Name again";
        document.getElementById('firstname-span').style.color = "red";
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

    if(descriptionValue.length < 40){
        description.focus();
        document.getElementById('description-span').textContent = "description is too short . it must be greater than 40 "
        document.getElementById('description-span').style.color = "red";
            event.preventDefault();
        return false;
        
    }

    
    return true;
}
form.onsubmit = validation;


const send = document.getElementById('send');
const ok = document.getElementById('Ok');
var dialog = document.getElementById('dialog');


send.onclick =()=>{
    dialog.classList.add('show');
}    
ok.onclick =()=>{
        dialog.classList.remove('show');
}    

window.addEventListener('keyup' , (event) => {
    if(event.key == "Escape" || "Enter"){
    dialog.classList.remove('show');

    }
});