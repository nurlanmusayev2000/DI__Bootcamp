const gameInfo = [{
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];
/* Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username. */
let usernames = [];
let elWithExc;
gameInfo.forEach((element) => {
    elWithExc = element.username + "!";
    usernames.push(elWithExc)
})

//console.log(usernames);
/* 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5. */
let biggerThan5 = [];
let checkOneBy;
gameInfo.forEach(element => element.score > 5 ? biggerThan5.push(element.username) : false)
    //console.log(biggerThan5);

/* Find and display the total score of the users. (Hint: The total score is 71) */
let score = 0;
for (obj of gameInfo) {
    score += obj.score
}

console.log(score);