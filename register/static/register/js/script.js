function validateEmail() {
        var email = document.getElementById('age');
        var mailFormat = /^([a-zA-Z0-9_\[.]\[-]])+\[@](([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([7-9][0-9]{9})|[a-zA-Z]{3,8}$/ ;
        if (email.value == " ") {
            alert( "  Please enter your Email or Phone Number or username  ");
        }
        else if (!mailFormat.test(email.value)) {
            alert( "  Email Address / Phone number is not valid, Please provide a valid Email or phone number or username ");
            return false;
        }
        else {
            alert(" Success ");
        }
}