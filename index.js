console.log(` index.js loaded\n ${Date()}`);
cleanVal=function(v){
    if(!v){
        v=0
    }else{
        v=parseFloat(v)
    }
    return v
}
// running the clock
setTimeout(function(){
    helloWorld.innerHTML=`at <span style="font-size:x-large;color:darkgreen;background-color:yellow">${new Date().toLocaleTimeString()}</span>`
    console.log('val1:',val1)
    val1.onkeyup=val2.onkeyup=function(ev){
        soma.innerHTML=cleanVal(val1.value)+cleanVal(val2.value)
        console.log('ev1:',ev)
    }
},1000)
//let x=document.getElementById('xx');
// document.getElementById('val1').onkeyup=function(ev){console.log(ev)}