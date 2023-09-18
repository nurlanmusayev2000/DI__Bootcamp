function playTheGame() {
    let confirmation = confirm("Do you want to play this game?(Be carefull this is your last chance)");
    if (confirmation == true) {
        alert("let us begin");
        let num = prompt("Please add a number");
        let checkNum = /^[0-9]*$/
        if (checkNum.test(num) && Number(num) < 10) {
            Number(num)
            let computerNumber = Math.floor(Math.random() * 10);
            compareNumbers(num, computerNumber)


        } else {
            alert("Sorry Not a number, Goodbye")
        }
    } else {
        alert("Ok , Goodbye")
    }

}


function compareNumbers(userNumber, computerNumber) {
    for (let i = 0; i < 3; i++) {
        console.log(i);
        if (computerNumber == userNumber) {
            alert("WINNER WINNER Chicken Dinner")

            return
        } else if (computerNumber < userNumber) {
            alert("Your number is bigger then the computer’s, guess again");
            let chances = i < 2 ? prompt("Please add a number again") : alert("out of chance")
        } else if (computerNumber > userNumber) {
            alert("Your number is smaller then the computer’s, guess again");
            let chances = i < 2 ? prompt("Please add a number again") : alert("out of chance")
        }


    }
}