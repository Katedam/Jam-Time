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
makeSandwich = function() {
    var breadChoice = document.getElementById('bread-choice').value;
    var spreadChoice = document.getElementById('spread-choice').value;
    var jamChoice = document.getElementById('jam-choice').value;
    var extrasChoice = document.getElementById('extras-choice').value;
    var topppingChoice = document.getElementById('toppings-choice').value;
    var grilledChoice = document.getElementById('grilled-choice').value;
    var cutChoice = document.getElementById('cut-choice').value;
    sandwiches.push(new madeSandwich(bread, spread, jam, extras, grilled, cut));
    localStorage.setItem('sandwiches', JSON.stringify(sandwiches));
    localStorage.setItem("current order", JSON.stringify(sandwiches.length - 1));
    window.location.href = '../html/summary.html';
}
makeSammyButton.addEventListener("click", makeSandwich);




//function welcomeUser() {
//    var text = "";
//    if (navigator.orderpage.html == true) {
//        text = "Welcome!";
    //} //else {
      //  text = "Cookies are not enabled.";
  //  }
//    document.getElementById("You Hungry, Pal?").innerHTML = text;
//};

  //window.addEventListener()
//</script>
