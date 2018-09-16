var navBar = document.getElementsByTagName('nav');
changeNavBackground = function() {
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        navBar.classList.add()
    }
}
var signUpButton = document.getElementById('showRegistration');
showRegForm = function(){
    var registerForm = document.getElementById('hiddenForm');
    if (registerForm) {
        if (registerForm.className == 'hidden') {
            registerForm.className = 'unhidden';
            var signIn = document.getElementById('login-guestLogin');
            signIn.className = 'hidden';
        }
    }
}
signUpButton.addEventListener("click", showRegForm);

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



var getLoginButton = document.getElementById("loginButton");

loadOrderPage = function(event){ 
    event.preventDefault();
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
document.getElementById("login-form").addEventListener('submit', loadOrderPage);

var getGuestLogin = document.getElementById('guestLogin');
var loadGuestOrderPage = function() {
    var currentUserIndex = "guest";
    localStorage.setItem("current login", JSON.stringify(currentUserIndex));
    window.location.href = '../html/orderpage.html';
}
getGuestLogin.addEventListener("click", loadGuestOrderPage);

showSection = function(event) {
    var clickedId = event.target.id;
    var about = document.getElementById('aboutSection');
    var contact = document.getElementById('contactSection');
    var spread = document.getElementById('food-sources-infoSection');
    var signIn = document.getElementById('login-guestLogin');
    var header = document.getElementById('header-logo');
    var register = document.getElementById('hiddenForm');
    if (clickedId == "about") {
        if (about.className == 'hidden') {
            about.className = 'unhidden';
            contact.className = 'hidden';
            spread.className = 'hidden';
            signIn.className = 'hidden';
            header.className = 'hidden';
            register.className = 'hidden';
        } 
    } else if (clickedId == "contact") {
        if (contact.className == 'hidden') {
            contact.className = 'unhidden';
            spread.className = 'hidden';
            about.className = 'hidden';
            signIn.className = 'hidden';
            header.className = 'hidden';
            register.className = 'hidden';
        }
    } else if (clickedId == "spread") {
        if (spread.className == 'hidden') {
            spread.className = 'unhidden';
            contact.className = 'hidden';
            about.className = 'hidden';
            signIn.className = 'hidden';
            header.className = 'hidden';
            register.className = 'hidden';
        }
    } else if (clickedId == "sign-in") {
        if (register.className == 'hidden') {
            signIn.className = 'unhidden';
            header.className = 'hidden';    
        } else if (signIn.className == 'hidden') {
            signIn.className = 'unhidden';
            contact.className = 'hidden';
            about.className = 'hidden';
            spread.className = 'hidden';
            header.className = 'hidden';
            register.className = 'hidden';
        }
    }
}
var sections = document.getElementsByClassName('hiddenSections');
for (var element = 0; element < sections.length; element++) {
    sections[element].addEventListener("click", showSection);
}

logOut = function() {
    var currentUserIndex = "guest";
    localStorage.setItem("current login", JSON.stringify(currentUserIndex));
}
window.onload = logOut();