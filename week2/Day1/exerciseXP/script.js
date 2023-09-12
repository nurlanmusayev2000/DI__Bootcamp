// 🌟 Exercise 1: Your Favorite Food
let food = "chocolate";
let meal = "lunch"
console.log(`i eat ${food} at every ${meal}`);

// 🌟 Exercise 2 : Series
// Part I
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentences = myWatchedSeries.toString();
console.log(`I watched 3 series: ${myWatchedSeriesSentences}`)

// Part 2
//Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
let index = myWatchedSeries.indexOf("the big bang theory");
myWatchedSeries.splice(index, 1, "friends");
//Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("Dark", "How I met Your Mother", "The 100", "Lost");
// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("Breaking Bad", "Lupin", "Into The Night");
//Delete the series “black mirror”.
let indexOfblackmirror = myWatchedSeries.indexOf("black mirror");
myWatchedSeries.splice(indexOfblackmirror, 1)
    //Console.log the third letter of the series “money heist”.
let indexOfmoneyheist = myWatchedSeries.indexOf("money heist")
console.log(myWatchedSeries[indexOfmoneyheist].substring(2, 3));
//Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries)



//Store a celsius temperature into a variable.
let tempCelsie = 25;
//Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
let tempfahrenheit = tempCelsie / 5 * 9 + 32;
console.log(tempfahrenheit);


/* Exercise 4 : Guess The Answers #1
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction. */
let c;
let a = 34;
let b = 21;

console.log(a + b) //first expression
    // Prediction:a+b = 55 because both of them number and can calculate
    // Actual:55

a = 2;

console.log(a + b) //second expression
    // Prediction: a+b = 23 .we change the value of a
    // Actual:23
    /* 
        
Analyse the code below, what will be the outcome? */
console.log("question",
    3 + 4 + '5'); //becouse '5' is a string
    //! 75







//Exercise 5 : Guess The Answers #2
typeof(15)
// Prediction: number
// Actual:

typeof(5.5)
// Prediction: number
// Actual:

console.log(typeof(NaN))
    // Prediction:string
    // Actual:number

typeof("hello")
// Prediction:string
// Actual:

console.log(typeof(true))
    // Prediction:boolean
    // Actual:noolean

console.log(typeof(1 != 2))
    // Prediction:booleon
    // Actual:

"hamburger" + "s"
// Prediction:hamburgers
// Actual:

console.log("hamburgers" - "s")
    // Prediction: NaN
    // Actual:

"1" + "3"
// Prediction: 13
// Actual:

console.log("1" - "3")
    // Prediction: NaN
    // Actual:-2

console.log("johnny" + 5);
// Prediction:Johnny5
// Actual:johnny5

console.log("johnny" - 5)
    // Prediction:Nan
    // Actual:

console.log(99 * "hello")
    // Prediction:Nan
    // Actual:NaN

1 != 1
    // Prediction:false
    // Actual:false

1 == "1"
    // Prediction:true
    // Actual:true

1 === "1"
    // Prediction:false
    // Actual:false



/* 
Exercise 6 : Guess The Answers #3
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



What is the output of each of the expressions below? */


console.log(5 + "34"
    // Prediction:534
    // Actual:,
    ,
    5 - "4"
    // Prediction:NAn
    // Actual:1
    ,
    10 % 5
    // Prediction:0
    // Actual:0
    ,
    5 % 10
    // Prediction:5
    // Actual:5
    ,
    "Java" + "Script"
    // Prediction:JavaScript
    // Actual:Javascript
    ,
    " " + " "
    // Prediction: "  "
    // Actual:"  "
    ,
    " " + 0
    // Prediction:" 0"
    // Actual:
    ,
    true + true
    // Prediction:true
    // Actual:
    ,
    true + false
    // Prediction:1
    // Actual:
    ,
    false + true
    // Prediction:1
    // Actual:
    ,
    false - true
    // Prediction:-1
    // Actual:
    , !true
    // Prediction:False
    // Actual:
    ,
    3 - 4
    // Prediction:-1
    // Actual:
    ,
    "Bob" - "bill"
    // Prediction:Nan
    // Actual:
)