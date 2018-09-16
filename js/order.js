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

loadIngredients = function() {
    var breadOptions = document.getElementById('breadIngredients');
    // var inputAttributs = ['id', 'type', 'class', 'name', 'value'];
    for (var i = 0; i < breads.length; i++) {
        var str = breads[i];
        var id = str.replace(/\s/g, '');
        var label = document.createElement('label');
        label.setAttribute('for', id);
        label.innerText = breads[i];
        breadOptions.appendChild(label);
        console.log(label);
        var input = document.createElement('input');
        input.setAttribute('id', id);
        input.setAttribute('class', 'breads');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'breads');
        input.setAttribute('value', breads[i]);
        breadOptions.appendChild(input);
        console.log(input);
    }
    var spreadOptions = document.getElementById('spreadIngredients');
    for (var i = 0; i < spreads.length; i++) {
        var str = spreads[i];
        var id = str.replace(/\s/g, '');
        var label = document.createElement('label');
        label.setAttribute('for', id);
        label.innerText = spreads[i];
        spreadOptions.appendChild(label);
        console.log(label);
        var input = document.createElement('input');
        input.setAttribute('id', id);
        input.setAttribute('class', 'spreads');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'spreads');
        input.setAttribute('value', spreads[i]);
        spreadOptions.appendChild(input);
        console.log(input);
    }
    var jamOptions = document.getElementById('jamIngredients');
    for (var i = 0; i < jams.length; i++) {
        var str = jams[i];
        var id = str.replace(/\s/g, '');
        var label = document.createElement('label');
        label.setAttribute('for', id);
        label.innerText = jams[i];
        jamOptions.appendChild(label);
        console.log(label);
        var input = document.createElement('input');
        input.setAttribute('id', id);
        input.setAttribute('class', 'jams');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'jams');
        input.setAttribute('value', jams[i]);
        jamOptions.appendChild(input);
        console.log(input);
    }
    var addOptions = document.getElementById('add-options');
    for (var i = 0; i < toppings.length; i++) {
        var str = toppings[i];
        var id = str.replace(/\s/g, '');
        var label = document.createElement('label');
        label.setAttribute('for', id);
        label.innerText = toppings[i];
        addOptions.appendChild(label);
        console.log(label);
        var input = document.createElement('input');
        input.setAttribute('id', id);
        input.setAttribute('class', 'extras');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'toppings');
        input.setAttribute('value', toppings[i]);
        addOptions.appendChild(input);
        console.log(input);
    }
    var cutOptions = document.getElementById('add-cuts');
    for (var i = 0; i < cuts.length; i++) {
        var str = cuts[i];
        var id = str.replace(/\s/g, '');
        var label = document.createElement('label');
        label.setAttribute('for', id);
        label.innerText = cuts[i];
        cutOptions.appendChild(label);
        console.log(label);
        var input = document.createElement('input');
        input.setAttribute('id', id);
        input.setAttribute('class', 'cuts');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'cuts');
        input.setAttribute('value', cuts[i]);
        cutOptions.appendChild(input);
        console.log(input);
    }
    var isGrilled = document.getElementById('add-grilled');
    var label = document.createElement('label');
    label.setAttribute('for', id);
    label.innerText = "Grill it!"
    isGrilled.appendChild(label);
    var input = document.createElement('input');
    input.setAttribute('id', 'grilled-choice');
    input.setAttribute('class', 'grilled');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'grilled');
    input.setAttribute('value', 'Grilled');
    isGrilled.appendChild(input);
}
window.onload = loadIngredients();

var makeSammyButton = document.getElementById('makeSammy');
makeSandwich = function() {
    var checkedBread = document.getElementsByClassName('breads');
    for (var breadIndex = 0; breadIndex < checkedBread.length; breadIndex++) {
        if (checkedBread[breadIndex].checked == true) {
            if (checkedBread[breadIndex].value !== undefined) {
               var breadChoice = checkedBread[breadIndex].value; 
            }
        } 
    }
    var checkedSpreads = document.getElementsByClassName('spreads');
    for (var spreadIndex = 0; spreadIndex < checkedSpreads.length; spreadIndex++) {
        if (checkedSpreads[spreadIndex].checked == true) {
            if (checkedSpreads[spreadIndex].value !== undefined) {
              var spreadChoice = checkedSpreads[spreadIndex].value;  
            }
        } 
    }
    var checkedJams = document.getElementsByClassName('jams');
    for (var jamsIndex = 0; jamsIndex < checkedJams.length; jamsIndex++) {
        if (checkedJams[jamsIndex].checked == true) {
            if (checkedJams[jamsIndex].value !== undefined) {
               var jamsChoice = checkedJams[jamsIndex].value; 
            }
        } 
    }
    var checkedExtras = document.getElementsByClassName('extras');
    for (var extrasIndex = 0; extrasIndex < checkedExtras.length; extrasIndex++) {
        if (checkedExtras[extrasIndex].checked == true) {
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
