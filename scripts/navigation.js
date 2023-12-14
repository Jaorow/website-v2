
const locations = [
    "home",
    "about",
    // "other",
]

//* function to load a page on window load.
window.onload = function() {
    console.log("onload functions running...")    

    setLocation("home")
};


// * location setting function
function setLocation(location) {
    console.log("SET LOCATION: " + location)


        document.getElementById(location).classList.add("shown")
        document.getElementById(location).classList.remove("hidden")
        document.getElementById(location+"Button").classList.add("current-loc")
        loadElementsForLocation(location)

        locations.forEach((l)=>{
            if (l != location) {
                document.getElementById(l).classList.add("hidden")
                document.getElementById(l).classList.remove("shown")
                document.getElementById(l+"Button").classList.remove("current-loc")
            }
        })
}




//* "switchboard" for loading elements when switching screen...
function loadElementsForLocation(location) {
    switch (location) {
        case "home":
            console.log(location +" elements loaded")
        case "about":
            console.log(location +" elements loaded")
        case "other":
            console.log(location +" elements loaded")
    }
}