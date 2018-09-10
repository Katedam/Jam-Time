//<body onload="welcomeUser()">
//<h2 id="welcome"></p>
//<script>

function welcomeUser() {
    var text = "";
    if (navigator.orderpage.html == true) {
        text = "Welcome!";
    } //else {
      //  text = "Cookies are not enabled.";
  //  }
    document.getElementById("You Hungry, Pal?").innerHTML = text;
}
//</script>
