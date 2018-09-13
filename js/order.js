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
         var header = document.createElement('h3');
         header.innerText = "Would you like to reorder one of your faves?";
         faves.appendChild(header);
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


//<body onload="welcomeUser()">
//<h2 id="welcome"></p>
//<script>
//  window.addEventListener("load", function(event) {
  //  ;
//  });
function Sandwich(bread, spreads, jams, toppings, cut) {
    this.bread = bread;
    this.spreads = spreads;
    this.jams = jams;
    this.toppings = toppings
    this.isGrilled = false;
    this.cut = cut;
}

var sandwiches = [];
 sandwiches.push(new Sandwich(this.bread, this.spreads, this.jams, this.toppings, this.isGrilled, this.cut));
 var makeSammyButton = document.getElementById('makeSammy');
//makeSammyButton.addEventListener("click", makeSandwich);
 makeSandwich = function() {
    var breadChoice = document.getElementById('bread-choice').value;
    var spreadChoice = document.getElementById('spread-choice').value;
    var jamChoice = document.getElementById('jam-choice').value;
    var extrasChoice = document.getElementById('extras-choice').value;
    var grilledChoice = document.getElementById('grilled-choice').value;
    var cutChoice = document.getElementById('cut-choice').value;
    sandwiches.push(new makeSandwich(breadChoice, spreadChoice, jamChoice, extrasChoice, grilledChoice, cutChoice));
    localStorage.setItem('sandwiches', JSON.stringify(sandwiches));
    localStorage.setItem("current order", JSON.stringify(sandwiches.length - 1));
    window.location.href = '../html/summary.html';
}
makeSammyButton.addEventListener("click", makeSandwich);

function sendOrder() {
    var newSandwich = document.forms[0];
    var txt = "";
    var i;
    for (i = 0; i < sandwiches.length; i++) {
        if (sandwiches[i].checked) {
            text = text + sandwiches[i].value + " ";
        }
    }
    document.getElementById("order").value = "You ordered a sammy with: " + txt;
}
 //function welcomeUser() {
//    var text = "";
//    if (navigator.orderpage.html == true) {
//        text = "Welcome!";
    //} //else {
      //  text = "Cookies are not enabled.";
  //  }
//    document.getElementById("You Hungry, Pal?").innerHTML = text;
//};
 window.onload = loadUserName();
  //window.addEventListener()
//</script>
