const quizDB = [
    {
        question: "Q1. Which circuit is called as regenerative repeaters?",
        a: "Analog circuits.",
        b: "Digital circuits",
        c: "Amplifiers",
        d: "A/D converters",
        ans: "ans2"
    },
    {
        question: "Q2. What is the spectrum that is obtained when we plot |ck |2 as a function of frequencies kF0, k=0,±1,±2..?",
        a: "Average power spectrum.",
        b: "Energy spectrum.",
        c: "Power density spectrum.",
        d: "None of the mentioned.",
        ans: "ans3"
    },
    {
        question: "Q3. If one or more poles are located near the unit circle, then the rate of decay of signal is _________",
        a: "Slow",
        b: "constant",
        c: "Rapid",
        d: "None",
        ans: "ans1"
    },
    {
        question: "Q4. Which of the following buses are present in a microcontroller for transferring data from one place to another?",
        a: "data bus only",
        b: "data bus, address bus",
        c: "address bus only",
        d: "address bus, data bus, control bus",
        ans: "ans4"
    },
    {
        question: "Q5. Which of the following bits are used for setting the data frame size?",
        a: "MPCM",
        b: "DOR",
        c: "U2X",
        d: "UCSZ0",
        ans: "ans4"
    },
    {
        question: "Q6. Which type of memory is suitable for low volume production of embedded systems?",
        a: "Non-Volatile.",
        b: "ROM.",
        c: "Volatile.",
        d: "RAM.",
        ans: "ans1"
    },
    {
        question: "Q7. Which level simulates the algorithms that are used within the embedded systems?",
        a: "Switch level.",
        b: "Gate level.",
        c: "Algorithm level.",
        d: "Circuit level.",
        ans: "ans3"
    },
    {
        question: "Q8.By which instruction does the switching of registers take place?",
        a: "Register instruction",
        b: "EXX instruction",
        c: "Instruction opcodes",
        d: "AXX instruction",
        ans: "ans3"
    },
    {
        question: "Q9. Which provides the TCP/IP communication over the ethernet and FDDI?",
        a: "pNA+ network manager",
        b: "pSOS+",
        c: "pSOS+ kernel",
        d: "pSOS+m",
        ans: "ans1"
    },
    {
        question: "Q10. The convolution of [1 2 1] and [1 2 1] will have the highest amplitude at t= _________?",
        a: "3 units.",
        b: "0 units.",
        c: "1 unit.",
        d: "2 units.",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () =>{
    let answer = 0;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
            <h3>You scored ${score}/${quizDB.length} ✌</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});