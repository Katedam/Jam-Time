console.log('confirm.js is plugged in'); //Verifying that this file is being read.


function showAddress() {
    var address = localStorage.getItem('address');
        if (address != null) {
        var giveAddress = document.getElementById('users-place')
        var spitAddress = document.createElement('h3');
        spitAddress.innerText = address;
        giveAddress.appendChild(spitAddress);
    }
console.log(address);
}

window.addEventListener('load', showAddress);



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

