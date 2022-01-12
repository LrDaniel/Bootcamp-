let sentence = "The movie is not that bad, I like it."

let wordNot = sentence.indexOf("not")

let wordBad = sentence.indexOf("bad")

if(wordBad>wordNot){


    let wordSwitch = sentence.slice(wordNot,wordBad+3)
    sentence = sentence.replace(wordSwitch , `amazing`)

}

console.log(sentence)
console.log(wordSwitch)