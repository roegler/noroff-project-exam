// Hambugrer menu 
function hamburgerClicked(element) {
    element.classList.toggle('change');
    document.getElementById('menu').classList.toggle('menu-mobile')
}

function sendFormButtonPressed() {
    var Firstname = document.contactForm.Firstname.value;
    var Lastname = document.contactForm.Lastname.value;
    var Email = document.contactForm.Email.value;
    var Phone = document.contactForm.Phone.value;

    console.log(Firstname, Lastname, Email, Phone);

    if (Firstname == "") {
        alert("First name cannot be empty!");
        return;
    }

    if (Lastname == "") {
        alert("Last name cannot be empty!");
        return;
    }

    var emailExpression = /^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9.\-_]+\.[a-zA-Z]{2,4}$/;
    var isEmailValid = emailExpression.test(Email);

    if (isEmailValid == false) {
        alert("Sorry, your email is not valid")
        return;
    }

    var phoneNumberExpresion = /^[0-9]{8}$/;
    var isPhoneNumberValid = phoneNumberExpresion.test(Phone);

    if (isPhoneNumberValid == false) {
        alert("Sorry, your number is not valid")
        return;
    }

}
