alert("this runs");

init()

function init() {
    var myFunction = functison() {
        // changeImage();
        var rand = Math.round(Math.random() * (3000 - 500)) + 500; // generate new time (between 3sec and 500"s)
        alert('rand time = ' + rand);
        setTimeout(myFunction, rand);
    }
    myFunction();
}

init()
