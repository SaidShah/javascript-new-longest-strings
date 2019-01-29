//Given an array of strings, return another array containing all of its longest strings.
//example if inputArray = ["aba", "aa", "ad", "vcd", "aba"],
//the output should be  ["aba", "vcd", "aba"].

let inputArray = ["aba", "aa", "ad", "vcd", "aba"]

inputArray.sort((a,b)=>{return a.length-b.length})
    let maxSize = inputArray[inputArray.length-1].length
    let newArray= []
    for(let i = 0;i<inputArray.length;i++){
        if(inputArray[i].length === maxSize){
            newArray.push(inputArray[i])
        }
    }
    console.log(newArray)
