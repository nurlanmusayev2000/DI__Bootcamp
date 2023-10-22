let boxForQuestion = (quest) => {
    let par = document.createElement('p');
    par.classList.add('styleQuestion')
    let questionbox = document.querySelector('.question');
    par.innerText = quest;
    questionbox.appendChild(par);

}

let boxForAnswers = (a, b, c, d) => {
    let ans1 = document.createElement('button');
    let ans2 = document.createElement('button');
    let ans3 = document.createElement('button');
    let ans4 = document.createElement('button');
    let answersBox = document.querySelector('.answers');
    ans1.innerText = a;
    ans2.innerText = b;
    ans3.innerText = c;
    ans4.innerText = d;
    answersBox.appendChild(ans1)
    answersBox.appendChild(ans2)
    answersBox.appendChild(ans3)
    answersBox.appendChild(ans4)

}
let isClicked;
let next = -1;
let score = 0;

const postScore = async(scr) => {
    const post = fetch('http://localhost:3010/app/starting/score', {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ score: scr })
    })

    const result = await post.json()
}

let getQuestion = async() => {
    next += 1;
    let question = await fetch(`http://localhost:3010/app/question/${next}`);
    let res = await question.json();
    const putQuestion = res.resultQuestion;
    const varA = `${res.answers[0].a}`;
    const varB = `${res.answers[0].b}`;
    const varC = `${res.answers[0].c}`;
    const varD = `${res.answers[0].d}`;
    console.log(res);
    console.log(res.answers[0].a);
    boxForQuestion(putQuestion);
    boxForAnswers(varA, varB, varC, varD);
    let buttons = document.querySelectorAll('.answers button');
    buttons.forEach((val) => {
        val.addEventListener('click', (e) => {
            e.target.style.backgroundColor = "blue"
            setTimeout(() => {
                isClicked = e.target;
                const correct = res.correctAnswer[0].answer;
                if (correct == e.target.innerText) {
                    e.target.style.backgroundColor = "green";
                    score += 10;
                } else {
                    e.target.style.backgroundColor = "red";
                    buttons.forEach((val) => {
                        if (val.innerText == correct) {
                            val.style.backgroundColor = "green";
                        }
                    })
                }
                console.log(correct);
            }, 1000)
        })
    })


}

getQuestion()

document.querySelector('.next').addEventListener('click', () => {
    console.log(score);
    if (next < 9) {
        let questionbox = document.querySelector('.question');
        let answersBox = document.querySelector('.answers');

        questionbox.innerHTML = " ";
        answersBox.innerHTML = " ";
        getQuestion();

    } else {
        next = -1;
        postScore(score);
        window.open('\score.html', "_self")
    }

})