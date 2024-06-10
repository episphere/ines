console.log(` index.js loaded\n ${Date()}`)

// running the clock
setInterval(function(){
    helloWorld.innerHTML=`at <span style="font-size:x-large;color:darkgreen;background-color:yellow">${new Date().toLocaleTimeString()}</span>`
},1000)