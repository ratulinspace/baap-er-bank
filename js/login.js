document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPasseord = passwordField.value;
    //email and pass validation
    if (userEmail == 'bbank@gmail.com' && userPasseord == 'oneTwo') {
        window.location.href = 'banking.html';
    }
    else {
        error.textContent = "Envalid account"
    }
});