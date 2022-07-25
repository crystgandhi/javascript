const welcome=() =>{
    console.log("Arrow function without argument")
}
console.log(welcome())

const ans=(string) =>{
    return string
}
console.log(ans("Arrow function with one argument"))

const twoans=(string1,string2) =>{
    return string1+string2
}
console.log(twoans("Arrow function", " with two arguments"))

const multiply=(a,b) => a*b
console.log(multiply(2,9))

let i;

for(i=0; i<3;i++){
    const output=() =>{
        console.log(i)
    }
setTimeout(output, 100)
}
