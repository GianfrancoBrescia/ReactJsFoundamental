var readline = require("readline")
var rxNode = require("rx-node")

readline.emitKeypressEvents(process.stdin)
var keyboard = process.stdin

keyboard.setRawMode(true)
keyboard.on("keypress",(str,key)=>{

    if (key.ctrl && key.name==='c'){
        process.exit()
    }
    else{
        console.log("Hai premuto il tasto",str)
    }
})

var sottoscrittore1 = rxNode.fromStream(keyboard,'end').subscribe((x)=>{console.log("Primo",x)})

var sottoscrittore2 = rxNode.fromStream(keyboard,'end').subscribe((x)=>{console.log("Secondo",x)})