function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}

function setVisits(number){
    fetch('https://api.countapi.xyz/set/jaorow.com/89b89002-43a4-460a-ac65-858d507e00eb?value='+(number-1))
    console.log('visits refreshed to ' + number +' please refresh page')
}