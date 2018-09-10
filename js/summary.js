console.log('summary.js is pluggeg in'); //test

function localAddress() {
    var takeAddress = document.getElementById('address-field');
    if(takeAddress.textContent != null) {
        localStorage.setItem('Address', JSON.stringify(takeAddress));
        console.log(takeAddress.textContent);
    }
}
localAddress();

//checkLocal will check local storage for account information, and parse it into a variable.

// function checkLocal() {
//     var localAccounts = JSON.parse(localStorage.getItem('account'));
// }

function changePic(interval, frames) {
    var int = 1;
    
    function func() {
        document.body.id = "b" + int;
        int++;
        if(int === frames) { int = 1; }
    }
    
    var swap = window.setInterval(func, interval);
}


changePic(5000, 4);

