var Rx = require('rx')
var RxNode = require("rx-node")

var sorgente = Rx.Observable.return(50)
var emitter = RxNode.toEventEmitter(sorgente, 'data')

emitter.on("data", function (valore) {
    console.log("Ascoltatore 1 ", valore)
})

emitter.on("data", function (valore) {
    console.log("Ascoltatore 2 ", valore)
})

emitter.on("data", function (valore) {
    console.log("Ascoltatore 3 ", valore)
})

emitter.on("end", function () {
    console.log("End...")
})

console.log("Inizio")
emitter.publish()
console.log("Fine")
