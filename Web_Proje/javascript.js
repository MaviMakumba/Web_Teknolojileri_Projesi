function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var tel = document.getElementById('tel').value;
    var message = document.getElementById('yazi').value;

    if (name == "" || email == "" || tel == "" || message == "") {
        alert("Tüm alanları doldurun.");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert("Geçersiz e-posta adresi.");
        return false;
    }

    var telRegex = /^[0-9]+$/;
        if (!tel.match(telRegex)) {
            alert("Telefon numarası sadece rakamlardan oluşmalıdır.");
            return false;
        }

    return true;
}

var formData = {
    name: document.getElementById("name").value,
    mail: document.getElementById("mail").value,
    tel: document.getElementById("tel").value,
    message: document.getElementById("yazi").value
};

var jsonData = JSON.stringify(formData);
sessionStorage.setItem("formData", jsonData);
return true;

