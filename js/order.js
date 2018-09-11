//<body onload="welcomeUser()">
//<h2 id="welcome"></p>

function welcomeUser() {
    var text = "";
    if (navigator.orderpage.html == true) {
        text = "You hungry, pal?";
    } //else {
      //  text = "Cookies are not enabled.";
  //  }
    document.getElementById("welcome").innerHTML = text;
}
