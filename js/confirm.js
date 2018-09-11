console.log('confirm.js is plugged in'); //Verifying that this file is being read.


function showAddress() {
    var address = JSON.parse(localStorage.getElementById('user-place'));
        if (address != null) {
        var giveAddress = document.createElement('h5');
        giveAddress.innerText = address.value;
        giveAddress.appendChild(address);
        }
}

window.addEventListener('load', showAddress);
console.log('Address');








// function changePic(interval, frames) {
//     var int = 2;
    
//     function func() {
//         document.body.id = "c" + int;
//         int++;
//         if(int === frames) { int = 1; }
//     }
    
//     var swap = window.setInterval(func, interval);
// }
// changePic(5000, 3);

