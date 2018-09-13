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

 var makeSammyButton = document.getElementById('makeSammy');

 makeSandwich = function() {
    var checkedBread = document.getElementsByClassName('breads');
    for (var breadIndex = 0; breadIndex < checkedBread.length; breadIndex++) {
        if (checkedBread[breadIndex].checked == true) {
            var breadChoice = checkedBread[breadIndex].value;
            console.log(breadChoice);
        } 
    }
    var checkedSpreads = document.getElementsByClassName('spreads');
    for (var spreadIndex = 0; spreadIndex < checkedSpreads.length; spreadIndex++) {
        if (checkedSpreads[spreadIndex].checked == true) {
            var spreadChoice = checkedSpreads[spreadIndex].value;
            console.log(spreadChoice);
        } 
    }
    var checkedJams = document.getElementsByClassName('jams');
    for (var jamsIndex = 0; jamsIndex < checkedJams.length; jamsIndex++) {
        if (checkedJams[jamsIndex].checked == true) {
            var jamsChoice = checkedJams[jamsIndex].value;
            console.log(jamsChoice);
        } 
    }
    var checkedExtras = document.getElementsByClassName('extras');
    for (var extrasIndex = 0; extrasIndex < checkedExtras.length; extrasIndex++) {
        if (checkedExtras[extrasIndex].checked == true) {
            var extrasChoice = checkedExtras[extrasIndex].value;
            console.log(extrasChoice);
        } 
    }
    var checkedGrilled = document.getElementById('grilled');
        if (checkedGrilled.checked == true) {
            var grilledChoice = checkedGrilled.value;
            console.log(grilledChoice);
        } 
    var checkedCut = document.getElementsByClassName('cuts');
    for (var cutIndex = 0; cutIndex < checkedCut.length; cutIndex++) {
        if (checkedCut[cutIndex].checked == true) {
            var cutChoice = checkedCut[cutIndex].value;
            console.log(cutChoice);
        } 
    }
var user = localStorage.getItem('current login');
for(var index = 0; index < accounts.length; index++) {
    if (index == user) {
        var currentUser = accounts[index];
        currentUser.addFaveSandwich(breadChoice, spreadChoice, jamsChoice, extrasChoice, grilledChoice, cutChoice);
    }
}

// var oldSandwiches = accounts.faves;
// var newSandwich

localStorage.setItem('accounts', JSON.stringify(currentUser.favoriteSandwiches));





// sandwiches.push(new makeSandwich(breadChoice, spreadChoice, jamsChoice, extrasChoice, grilledChoice, cutChoice));
// localStorage.setItem('sandwiches', JSON.stringify(sandwiches));
// localStorage.setItem("accounts", JSON.stringify(sandwiches.length));
// window.location.href = '../html/summary.html';
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
