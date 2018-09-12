var getRegistrationButton = document.getElementById('registerButton');
addUserAccount = function() {
    var username = document.getElementById('register-username').value;
    var password = document.getElementById('register-password').value;
    var firstName = document.getElementById('register-firstName').value;
    var lastName = document.getElementById('register-lastName').value;
    var phone = document.getElementById('register-phone').value;
    var address = document.getElementById('register-address').value;
    accounts.push(new UserAccount(username, password, firstName, lastName, phone, address));
    localStorage.setItem('accounts', JSON.stringify(accounts));
    localStorage.setItem("current login", JSON.stringify(accounts.length - 1));
    window.location.href = '../html/orderpage.html';
}
getRegistrationButton.addEventListener("click", addUserAccount);

var getLoginButton = document.getElementById('loginButton');
loadOrderPage = function(){ 
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    for (var index = 0; index < accounts.length; index++) {
        if (username == accounts[index].username && password == accounts[index].password) {
            var currentUserIndex = index;
            localStorage.setItem("current login", JSON.stringify(currentUserIndex));
            window.location.href = '../html/orderpage.html';
            break;
        } else {
            document.getElementById('not-a-match').innerText = "Username or password does not match";
        } 
    }
}
getLoginButton.addEventListener("click", loadOrderPage);

var signUpButton = document.getElementById('showRegistration');
showRegForm = function(){
    var registerForm = document.getElementById('hiddenForm');
    if (registerForm) {
        if (registerForm.className == 'hidden') {
            registerForm.className = 'unhidden';
        }
    }
}
signUpButton.addEventListener("click", showRegForm);

var sections = document.getElementsByClassName('hiddenSections');
showSection = function() {
    var about = document.getElementById('aboutSection');
    var contact = document.getElementById('contactSection');
    var spread = document.getElementById('food-sources-infoSection');
    console.log(about + contact + spread);
    if (about) {
        if (about.className == 'hidden') {
            about.className = 'unhidden';
            console.log(about.className + 'this part works');
        } 
    } 
    // else if (contact) {
    //     if (contact.className == 'hidden') {
    //         contact.className = 'unhidden';
    //         console.log(contact.className);
    //     }
    // } else {
    //     if (spread.className == 'hidden') {
    //         spread.className = 'unhidden';
    //         console.log(spread.className);
    //     }
    // }
}
// sections.addEventListener("click", showSection);