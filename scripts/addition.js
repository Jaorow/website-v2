
function save(count) {

     
    fso = CreateObject("Scripting.FileSystemObject"); 
    
    s   = fso.CreateTextFile("posts/count.txt", True);
    s.writeline(count);
    s.close();
    // const fs = require('fs')

    // const content = count

    // fs.writeFile('/posts/count.txt', content, err => {
    //             if (err) {
    //             console.error(err)
    //             return
    //             }           })

  }

function inC(){
    console.log("+");
    numb = document.getElementById("counter");
    count = parseInt(numb.innerHTML);
    console.log(count)
    count = count + 1;
    numb.innerHTML = count;
    save(count);

}

function deC(){
    console.log("-")
    numb = document.getElementById("counter");
    count = parseInt(numb.innerHTML);
    console.log(count)
    count = count - 1;
    numb.innerHTML = count;
    save(count);

}


console.log("hello darling")
