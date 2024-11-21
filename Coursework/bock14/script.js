let myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"]

console.table(myInstruments)

myInstruments.unshift("saxophone")
myInstruments.splice(3, 1)

console.table(myInstruments)

myInstruments.push("tuba", "bassoon")
console.table(myInstruments)

function getFirstInstrument(myInstruments) {
    return myInstruments[0]
}

console.table(getFirstInstrument(myInstruments))

function getLastInstrument(myInstruments) {
    let index = myInstruments.length - 1
    return myInstruments[index]

}

console.table(getLastInstrument(myInstruments))

function getFirstandLastInstruments(myInstruments) {
    let firstInstrument = getFirstInstrument(myInstruments)
    let lastInstrument = getLastInstrument(myInstruments)

    const newArray = [firstInstrument, lastInstrument]

    return newArray

}

console.table(getFirstandLastInstruments(myInstruments))

function getFristThreeInstruments(myInstruments){
    return myInstruments.slice(0, 3)
}

console.log(getFristThreeInstruments(myInstruments))

function getTInstrument(myInstruments){
    const tInstrumnents = []
    for (let index = 0; index < myInstruments.length; index++) {
        let currentInstrument = myInstruments[index]
        if(currentInstrument.charAt(0) === "t"){
            tInstrumnents.push(currentInstrument)
        }
        
    }
    return tInstrumnents
}

console.table(getTInstrument(myInstruments))