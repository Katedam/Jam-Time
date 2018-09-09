var getButton = document.getElementById('registerButton');
addUserAccount = function() {
    UserAccount.prototype.addAccount();
    console.log('!!');
}
getButton.addEventListener("click", addUserAccount);
