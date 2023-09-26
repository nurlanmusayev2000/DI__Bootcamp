/* 
1.Write a JavaScript function that takes 2 parameters: a string and a number.
2.The function should chop the string into chunks of your chosen length (the second parameter), and the outcome should be represented in an array.*/
let result;
let resArr = [];
let conc = [];

function string_chop(str, num) {
    result = str.split("");

    for (let i = 0; i < result.length; i++) {
        resArr = result.slice(result[i], i + num)
        result.splice(result[i], num);
        conc.push(resArr)
        i = -1;
    }
    return conc
}
console.log(string_chop('developers', 2));