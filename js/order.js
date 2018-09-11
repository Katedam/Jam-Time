function welcomeUser() {
    var text = "";
    if (navigator.orderpage.html == true) {
        text = "You hungry, pal?";
    } //else {
      //  text = "Cookies are not enabled.";
  //  }
    document.getElementById("welcome").innerHTML = text;
}

function loadUserName() {
   var user = localStorage.getItem('current login');
   for (var index = 0; index < accounts.length; index++) {
       if (index == user) {
           var currentUser = accounts[index];
           document.getElementById('add-user-name').innerText = "Hiya, " + currentUser.lastName + ", welcome back!";
           var faves = document.getElementById('fave-sandwiches');
           for (var jam = 0; jam < currentUser.favoriteSandwiches.length; jam++) {
                var list = document.createElement('ul');
                var sandwich = document.createElement('li');
                sandwich.innerText = currentUser.favoriteSandwiches[jam].spreads
                list.appendChild(sandwich);
                sandwich = document.createElement('li');
                sandwich.innerText = currentUser.favoriteSandwiches[jam].jams;
                list.appendChild(sandwich);
                sandwich = document.createElement('li');
                sandwich.innerText = currentUser.favoriteSandwiches[jam].toppings;
                list.appendChild(sandwich);
                sandwich = document.createElement('li');
                sandwich.innerText = "on " + currentUser.favoriteSandwiches[jam].bread;
                list.appendChild(sandwich);
                sandwich = document.createElement('li');
                sandwich.innerText = "cut " + currentUser.favoriteSandwiches[jam].cut;
                list.appendChild(sandwich);
                faves.appendChild(list);
           }
       }
   }
}

window.onload = loadUserName();