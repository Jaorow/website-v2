function render_settings(x1,x2,x3){
    console.log("rendering settings")
    // MAX 20 MIN 4
    document.getElementById("node-settings-svg").innerHTML = `

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">

    <!-- min cx=4 max cx=20 -->
    <line x1="2" y1="6" x2="22" y2="6" stroke="rgba(4,170,93,0.601)" stroke-width="2" stroke-linecap="round"/>
    <circle cx="${x1}" cy="6" r="2" stroke="#04AA5C" stroke-width="2" fill="#04AA5C" fill-opacity="1"/>

    <line x1="2" y1="12" x2="22" y2="12" stroke="rgba(4,170,93,0.601)" stroke-width="2" stroke-linecap="round"/>
    <circle cx="${x2}" cy="12" r="2" stroke="#04AA5C" stroke-width="2" fill="#04AA5C" fill-opacity="1" />

    <line x1="2" y1="18" x2="22" y2="18" stroke="rgba(4,170,93,0.601)" stroke-width="2" stroke-linecap="round"/>
    <circle cx="${x3}" cy="18" r="2" stroke="#04AA5C" stroke-width="2" fill="#04AA5C" fill-opacity="1" />

    </svg>
    
    `
    // document.getElementById("node-settings").style.filter = '';

}

function rand(){
    var min = 4
    var max = 20
    return Math.floor(Math.random() * (max - min) + min)
}

function open_node_settings(){
    // console.log(rand())
    render_settings(rand(),rand(),rand())

    var node_settings = document.getElementById("node-settings-div")
    var site_visits = document.getElementById("site-visits")

    if(node_settings.classList.contains("hidden")){
        node_settings.classList.remove("hidden")
        node_settings.classList.add("shown")

        site_visits.classList.add("hidden")
        site_visits.classList.remove("shown")
    } else {
        node_settings.classList.add("hidden")
        node_settings.classList.remove("shown")

        site_visits.classList.remove("hidden")
        site_visits.classList.add("shown")
    }
}

//! Some node settings will be rendered inside node.js... 
render_settings(7,20,12)