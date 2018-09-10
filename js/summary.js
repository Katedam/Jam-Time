console.log('hey');

function checkLocal() {
    var localAccounts = JSON.parse(localStorage.getItem('account'));
}

function changePic(interval, frames) {
    var int = 1;
    
    function func() {
        document.body.id = "b"+int;
        int++;
        if(int === frames) { int = 1; }
    }
    
    var swap = window.setInterval(func, interval);
}

changePic(10000, 10);

