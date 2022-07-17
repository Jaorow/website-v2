function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("img/logo.png")) {
        image.src = "img/logo_blink.png";
    }
    else {
        image.src = "img/logo.png";
    }
}


function init() {
    var myFunction = function() {
        changeImage();
        var rand = Math.round(Math.random() * (3000 - 500)) + 500; // generate new time (between 3sec and 500"s)
        setTimeout(myFunction, rand);
    }
    myFunction();
}

$(function() {
    init();
});