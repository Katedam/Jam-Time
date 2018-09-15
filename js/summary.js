console.log('summary.js is pluggeg in'); 

function checkLocal() {
    var userIndex = JSON.parse(localStorage.getItem('current login'));
    var user = JSON.parse(localStorage.getItem('accounts'))[userIndex];
    // var guestLogin = JSON.parse(localStorage.getItem('guest-login'));
    var sandwichIndex = user.favoriteSandwiches.length - 1;
    var madeSandwich = user.favoriteSandwiches[sandwichIndex];

    var showSummary = document.getElementById("sandwich-list");
    var spitSummary = document.createElement("li");
    spitSummary.innerText = madeSandwich.bread;
    showSummary.appendChild(spitSummary); 
    spitSummary = document.createElement("li");
    spitSummary.innerText = madeSandwich.spreads;
    showSummary.appendChild(spitSummary);
    spitSummary = document.createElement('li');
    spitSummary.innerText = madeSandwich.jams;
    showSummary.appendChild(spitSummary);
    spitSummary = document.createElement("li");
    spitSummary.innerText = madeSandwich.toppings;
    showSummary.appendChild(spitSummary);
    spitSummary = document.createElement("li");
    spitSummary.innerText = madeSandwich.isGrilled;
    showSummary.appendChild(spitSummary);
      
}
checkLocal();


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

