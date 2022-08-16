function reverseString(str) {
    return str.split(" ").reverse().join(" "); 
}
console.log(reverseString("Wekcome home Johnsmith"))

const myString="Welcome home Johnsmith"
console.log(myString.split("").reverse().join(""))

function reverseInPlace(str) {
    var words = [];
    //words = str.match(/\S+/g);
    words = str.split(" ");
    var result = "";
    for (var i = 0; i < words.length; i++) {
       result =result+ words[i].split('').reverse().join('') + " ";
    }
    return result;
  }
  console.log(reverseInPlace("Welcome home Johnsmith"));

  
