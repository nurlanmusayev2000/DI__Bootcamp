let player1 = prompt("please add a word");
let arrOfPlayer1 = player1.split("");
let regpassword = player1.match(/\b\w{8,}\b/g);
let player1Consol = "";
let arrOfPlayer1Consol;
let chance = 10;
if (regpassword) {
    // alert("welldone")
    password(player1);
    for (let y = 0; y < player1.length; y++) {
        let player2 = prompt("please add a letter");
        let regex2 = player2.match(/^[A-Za-z]+$/)
        if (regex2 && player2.length < 2) {
            for (let j = 0; j < player1.length; j++) {
                arrOfPlayer1Consol = player1Consol.split("");
                if (player1[j] == player2) {

                    arrOfPlayer1Consol[j] = player2;
                    player1Consol = arrOfPlayer1Consol.join("")
                    j = player1.length;
                }
            }
            console.log(player1Consol)
        }
    }
} else {
    alert("the word must be minimum 8 letter please try again .You can use only letter")
}

function password(a) {

    for (let i = 0; i < a.length; i++) {
        player1Consol += '*';
    }
    return console.log(player1Consol)
}