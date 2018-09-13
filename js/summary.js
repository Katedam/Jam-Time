console.log('summary.js is pluggeg in'); 


function localAddress() {
    var userAddress = document.getElementById("address-field").value;
    if(userAddress != "") {
        window.localStorage.setItem('address', JSON.stringify(userAddress));
        window.location.href='../html/confirm.html';
    } else {
        document.getElementById("please-enter").innerText = "You gotta let us know where to send it!";
    }
}
document.getElementById('order-button').addEventListener('click', localAddress);






//checkLocal will check local storage for account information, and parse it into a variable.

// function checkLocal() {
//     var localAccounts = JSON.parse(localStorage.getItem('account'));
// }

// function changePic(interval, frames) {
//     var int = 1;
    
//     function func() {
//         document.body.id = "b" + int;
//         int++;
//         if(int === frames) { int = 1; }
//     }
    
//     var swap = window.setInterval(func, interval);
// }


// changePic(5000, 4);

