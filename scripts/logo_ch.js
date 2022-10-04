function changeImage() {
    var image = document.getElementById('blink');
    if (image.src.match("logo.png")) {
        image.src = "img/logo_blink.png";
    }
    else {
        image.src = "img/logo.png";
    }
}


function countUp(){
    count ++;
    console.log(count);
}

function init() {
    var myFunction = function() {
        changeImage();
        // countUp()
        var rand = Math.round(Math.random() * (3000 - 500)) + 500; // generate new time (between 3sec and 500"s)
        setTimeout(myFunction, rand);
        
    }
    myFunction();
}

var count = 0;
init();
