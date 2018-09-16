function welcomeUser() {
  var text = "";
  if (navigator.orderpage.html == true) {
      text = "You hungry, pal?";
    }
  document.getElementById("welcome").innerHTML = text;
}

function loadUserName() {
var user = localStorage.getItem('current login');
    for (var index = 0; index < accounts.length; index++) {
        if (index == user) {
            var currentUser = accounts[index];
            document.getElementById('add-user-name').innerText = "Hi, " + currentUser.username + ", welcome back! Would you like to reorder one of your faves?";
            var faves = document.getElementById('fave-sandwiches');
            for (var sandwichIndex = 0; sandwichIndex < currentUser.favoriteSandwiches.length; sandwichIndex++) {
                var sandwichlist = document.createElement('p');
                var ingredient = currentUser.favoriteSandwiches[sandwichIndex];
                if (ingredient.toppings == undefined) {
                    sandwichlist.innerText = ingredient.spreads + " & " + ingredient.jams + " on " + ingredient.bread + " " + ingredient.isGrilled; 
                    faves.appendChild(sandwichlist);
                } else if (ingredient.spreads == undefined) {
                    sandwichlist.innerText = ingredient.jams + ", " + "& " + ingredient.toppings + " on " + ingredient.bread + " " + ingredient.isGrilled; 
                    faves.appendChild(sandwichlist);
                } else if (ingredient.jams == undefined) {
                    sandwichlist.innerText = ingredient.spreads + "& " + ingredient.toppings + " on " + ingredient.bread + " " + ingredient.isGrilled; 
                    faves.appendChild(sandwichlist);
                } else {
                    sandwichlist.innerText = ingredient.spreads + ", " + ingredient.jams + ", " + "& " + ingredient.toppings + " on " + ingredient.bread + " " + ingredient.isGrilled; 
                    faves.appendChild(sandwichlist);
                }
            }
        }
    }
}
window.onload = loadUserName();

var makeSammyButton = document.getElementById('makeSammy');
makeSandwich = function() {
    var breadPicked = 0;
    var checkedBread = document.getElementsByClassName('breads');
    for (var breadIndex = 0; breadIndex < checkedBread.length; breadIndex++) {
        if (checkedBread[breadIndex].checked == true) {
            breadPicked++;
            if (checkedBread[breadIndex].value !== undefined) {
               var breadChoice = checkedBread[breadIndex].value; 
            }
        } 
    }
    var spreadsPicked = 0;
    var checkedSpreads = document.getElementsByClassName('spreads');
    for (var spreadIndex = 0; spreadIndex < checkedSpreads.length; spreadIndex++) {
        if (checkedSpreads[spreadIndex].checked == true) {
            spreadsPicked++;
            if (checkedSpreads[spreadIndex].value !== undefined) {
              var spreadChoice = checkedSpreads[spreadIndex].value;  
            }
        } 
    }
    var jamsPicked = 0;
    var checkedJams = document.getElementsByClassName('jams');
    for (var jamsIndex = 0; jamsIndex < checkedJams.length; jamsIndex++) {
        if (checkedJams[jamsIndex].checked == true) {
            jamsPicked++;
            if (checkedJams[jamsIndex].value !== undefined) {
               var jamsChoice = checkedJams[jamsIndex].value; 
            }
        } 
    }
    var extrasPicked = 0;
    var checkedExtras = document.getElementsByClassName('extras');
    for (var extrasIndex = 0; extrasIndex < checkedExtras.length; extrasIndex++) {
        if (checkedExtras[extrasIndex].checked == true) {
            extrasPicked++;
            if (checkedExtras[extrasIndex].value !== undefined) {
               var extrasChoice = checkedExtras[extrasIndex].value; 
            }
        } 
    }
    var checkedGrilled = document.getElementById('grilled');
        if (checkedGrilled.checked == true) {
            var grilledChoice = " - Grilled";
        } else {
            grilledChoice = "";
        }
    var checkedCut = document.getElementsByClassName('cuts');
    for (var cutIndex = 0; cutIndex < checkedCut.length; cutIndex++) {
        if (checkedCut[cutIndex].checked == true) {
            if (checkedCut[cutIndex].value !== undefined) {
               var cutChoice = checkedCut[cutIndex].value; 
            }
        } 
    }
    if ((spreadsPicked == 0 && jamsPicked == 0) || (spreadsPicked == 0 && extrasPicked == 0) || (jamsPicked == 0 && extrasPicked == 0)) {
        var verify = document.getElementById('verification')
        verify.style = "background-color: var(--green)";
        verify.innerText = "* please pick at least two fillings";
    } else if (breadPicked == 0) {
        verify = document.getElementById('verification')
        verify.style = "background-color: var(--green)";
        verify.innerText = "";
        verify.innerText = "* You gotta pick a bread!";
    } else {
        var user = JSON.parse(localStorage.getItem('current login'));
        if (user == "guest") {
        accounts[0].addFaveSandwich(breadChoice, spreadChoice, jamsChoice, extrasChoice, grilledChoice, cutChoice); 
        }
        for(var index = 0; index < accounts.length; index++) {
            if (index == user) {
                var currentUser = accounts[index];
                currentUser.addFaveSandwich(breadChoice, spreadChoice, jamsChoice, extrasChoice, grilledChoice, cutChoice);
            }
        }
        localStorage.setItem('accounts', JSON.stringify(accounts));
        window.location.href = '../html/summary.html';
    }  
}
makeSammyButton.addEventListener("click", makeSandwich);

var text = document.getElementById('makeSammy');
var image = document.getElementById('button-image');
buttonAnimation = function() {
    document.getElementById('button-image').style = "width: 275px";
    document.getElementById('makeSammy').style = "font-size: 30px;"
}
image.addEventListener('mouseenter', buttonAnimation);
text.addEventListener('mouseenter', buttonAnimation);

buttonNormal = function() {
    document.getElementById('button-image').style = "width: 250px";
    document.getElementById('makeSammy').style = "font-size: 20px;"
}
image.addEventListener('mouseleave', buttonNormal);

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
