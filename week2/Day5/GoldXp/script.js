let player1 = prompt("please add a word");
let arrOfPlayer1 = player1.split("");
let regpassword = player1.match(/\b\w{5,}\b/g);
let player1Consol = "";
let arrOfPlayer1Consol;
let chance = 10;
let check;
if (regpassword) {
    // alert("welldone")
    password(player1);
    for (let y = 0; y < player1.length; y++) {
        let player2 = prompt("please add a letter");
        let regex2 = player2.match(/^[A-Za-z]+$/)
        check = true;
        if (regex2 && player2.length < 2) {
            arrOfPlayer1Consol = player1Consol.split("");
            for (let j = 0; j < player1.length; j++) {
                if (player1[j] == player2) {
                    arrOfPlayer1Consol[j] = player2;
                    player1Consol = arrOfPlayer1Consol.join("");
                    check = false
                }
            }
            if (check == true) {
              chance--;
              alert(`you had ${chance} more chance`);
              // !!! y--; bu line istifadesi anlasilmir?
              // !!! chance menfiye gedir 0 dan boyuk olmalidir deye condition elave ede bilersen
            }
            console.log(player1Consol);
        }

    }

} else {
    alert("the word must be minimum 8 letter please try again .You can use only letter.if you want to play game refresh page")
}

function password(a) {

    for (let i = 0; i < a.length; i++) {
        player1Consol += '*';
    }
    return console.log(player1Consol)
}