/* 
1.Write a JavaScript function that takes 2 parameters: a string and a number.
2.The function should chop the string into chunks of your chosen length (the second parameter), and the outcome should be represented in an array.*/
let result;
let resArr = [];
let conc = [];
let conc1 = [];

function string_chop(str, num) {
    result = str.split("");

    for (let i = 0; i < result.length; i++) {
        resArr = result.slice(result[i], i + num)
        result.splice(result[i], num);
        conc.push(resArr);

        i = -1;
    }
    for (let i = 0; i < conc.length; i++) {
        let joined = conc[i].join("");
        conc1.push(joined)
    }


    return conc1
}
console.log(string_chop('elektrikleshdirdiklerimizdensinizmi', 3));