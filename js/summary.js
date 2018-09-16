function checkLocal() {
    var userIndex = JSON.parse(localStorage.getItem('current login'));
    if (userIndex == "guest") {
        var guest = accounts[0]
        var sandwichIndex = guest.favoriteSandwiches.length - 1;
        var showSummary = document.getElementById("sandwich-list");
        var spitSummary = document.createElement("li");
        spitSummary.innerText = guest.favoriteSandwiches[sandwichIndex].bread;
        showSummary.appendChild(spitSummary); 
        spitSummary = document.createElement("li");
        spitSummary.innerText = guest.favoriteSandwiches[sandwichIndex].spreads;
        showSummary.appendChild(spitSummary);
        spitSummary = document.createElement('li');
        spitSummary.innerText = guest.favoriteSandwiches[sandwichIndex].jams;
        showSummary.appendChild(spitSummary);
        spitSummary = document.createElement("li");
        spitSummary.innerText = guest.favoriteSandwiches[sandwichIndex].toppings;
        showSummary.appendChild(spitSummary);
        spitSummary = document.createElement("li");
        spitSummary.innerText = guest.favoriteSandwiches[sandwichIndex].isGrilled;
        showSummary.appendChild(spitSummary);
    } else {
        var user = JSON.parse(localStorage.getItem('current login'));
        for (var i = 0; i < accounts.length; i++) {
            if (user == i) {
                user = accounts[i];
                var sandwichIndex = user.favoriteSandwiches.length - 1;
                var showSummary = document.getElementById("sandwich-list");
                var spitSummary = document.createElement("li");
                if (user.favoriteSandwiches[sandwichIndex].bread !== undefined) {
                    spitSummary.innerText = user.favoriteSandwiches[sandwichIndex].bread;
                    showSummary.appendChild(spitSummary); 
                }
                if (user.favoriteSandwiches[sandwichIndex].spreads !== undefined) {
                    spitSummary = document.createElement("li");
                    spitSummary.innerText = user.favoriteSandwiches[sandwichIndex].spreads;
                    showSummary.appendChild(spitSummary);
                }
                if (user.favoriteSandwiches[sandwichIndex].jams !== undefined) {
                    spitSummary = document.createElement('li');
                    spitSummary.innerText = user.favoriteSandwiches[sandwichIndex].jams;
                    showSummary.appendChild(spitSummary);
                }
                if (user.favoriteSandwiches[sandwichIndex].toppings !== undefined) {
                    spitSummary = document.createElement("li");
                    spitSummary.innerText = user.favoriteSandwiches[sandwichIndex].toppings;
                    showSummary.appendChild(spitSummary); 
                }
                if(user.favoriteSandwiches[sandwichIndex].isGrilled !== undefined) {
                spitSummary = document.createElement("li");
                    spitSummary.innerText = user.favoriteSandwiches[sandwichIndex].isGrilled;
                    showSummary.appendChild(spitSummary);   
                }
            }
        }
        
    }
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

