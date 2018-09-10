console.log('hey'); //test

function changePic(interval, frames) {
    var int = 2;
    
    function func() {
        document.body.id = "c" + int;
        int++;
        if(int === frames) { int = 1; }
    }
    
    var swap = window.setInterval(func, interval);
}

changePic(5000, 3);