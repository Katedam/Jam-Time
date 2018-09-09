var getButton = document.getElementById('registerButton');
addUserAccount = function() {
    var username = document.getElementById('register-username').value;
    var password = document.getElementById('register-password').value;
    var lastName = document.getElementById('register-lastName').value;
    var firstName = document.getElementById('register-firstName').value;
    var phone = document.getElementById('register-phone').value;
    var address = document.getElementById('register-address').value;
    accounts.push(new UserAccount(username, password, firstName, lastName, phone, address));
    //call add to local storage function
}
getButton.addEventListener("click", addUserAccount);
