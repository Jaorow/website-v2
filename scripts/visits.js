function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
    // added 100 views to make myself look popular
}

function setVisits(number){
    fetch('https://api.countapi.xyz/set/jaorow.com/89b89002-43a4-460a-ac65-858d507e00eb?value='+number)
    console.log('visits refreshed to ' + number +' please refresh page')
}