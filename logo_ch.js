function changeImage() {
    console.log("changing");
    
    var image = document.getElementsByClassName('blink');
    console.log(image)
    if (image.src.match("img/logo.png")) {
        image.src = "img/logo_blink.png";
        console.log("close");
    }else {
        image.src = "img/logo.png";
        console.log("open");
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

init();
