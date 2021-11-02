var dataFullname = localStorage.getItem("fullname");
var dataEmail = localStorage.getItem("email");
var dataPhone = localStorage.getItem("phone");
var dataNationality = localStorage.getItem("nationality");
var dataMessage = localStorage.getItem("message");

if (dataFullname !== null && dataEmail !== null && dataPhone !== null &&
    dataNationality !== null && dataMessage !== null) {
    var fullname = document.getElementById("ds-fullname");
    var email = document.getElementById("ds-email");
    var phone = document.getElementById("ds-phone");
    var nationality = document.getElementById("ds-nationality");
    var message = document.getElementById("ds-message");

    fullname.textContent += dataFullname;
    email.textContent += dataEmail;
    phone.textContent += dataPhone;
    nationality.textContent += dataNationality;
    message.textContent += dataMessage;
}

function FormStorage() {
    var inputName = document.getElementById("fullname");
    var inputEmail = document.getElementById("email");
    var inputPhone = document.getElementById("phone");
    var inputNationality = document.getElementById("nationality");
    var inputMessage = document.getElementById("message");

    localStorage.setItem("fullname", inputName.value);
    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("phone", inputPhone.value);
    localStorage.setItem("nationality", inputNationality.value);
    localStorage.setItem("message", inputMessage.value);
}

function DeleteStorage() {
    localStorage.removeItem("fullname");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("nationality");
    localStorage.removeItem("message");
    location.href = "home.html";
}