const quizDB = [
    {
        question: "1. On which of the following materials the compressive test is done?",
        a: "Aluminum.",
        b: "Thermocole.",
        c: "Cast iron.",
        d: "Gold.",
        ans: "ans3"
    },
    {
        question: "Q2. The axis of precession is ____________ to the plane in which the axis of spin is going to rotate.",
        a: "parallel",
        b: "perpendicular",
        c: "spiral",
        d: "none of the mentioned",
        ans: "ans2"
    },
    {
        question: "Q3. In which of the following cases Klein’s construction can be used?",
        a: "Crank has a uniform angular velocity.",
        b: "Crank has a uniform angular acceleration.",
        c: "Lever has a uniform angular acceleration.",
        d: "When the motion is SHM.",
        ans: "ans1"
    },
    {
        question: "What is the module of a gear if its pitch diameter is 10mm and it contains 5 teeth?",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        ans: "ans1"
    },
    {
        question: "Q5. Which electrical relay contact tip material has the highest electrical conductivity?",
        a: "Silver",
        b: "Alloy of silver and copper",
        c: "Alloy of silver and tungsten",
        d: "Alloy of silver and Nickel",
        ans: "ans1"
    },
    {
        question: "Q6. What is the use of proximity sensor?",
        a: "It’s used for sensing humidity",
        b: "It’s used for sensing heat",
        c: "It’s used for measuring distance.",
        d: "It’s used for sensing the presence of nearby objects.",
        ans: "ans4"
    },
    {
        question: "Q7. Which is the first aspect which needs to be considered in the Mechatronics design process?",
        a: "Hardware integration and simulation.",
        b: "Conceptual design.",
        c: "Mathematical modeling.",
        d: "Modeling and simulation.",
        ans: "ans4"
    },
    {
        question: "Q8. Microprocessor based electrical motors are used for ____.",
        a: "Prediction of fault in the system",
        b: "Correction before a fault occurs",
        c: "Actuation purpose in robots",
        d: "Providing intelligence",
        ans: "ans3"
    },
    {
        question: "Q9. What is the function of “analysis” in the modeling and simulation phase?",
        a: "Database for maintaining project information",
        b: "Sub models for eventual reuse",
        c: "Contains Numerical methods",
        d: "To produce high-level source code",
        ans: "ans3"
    },
    {
        question: "Q10. What is the role of the second level in the mechatronics system design?",
        a: "Integrates microelectronics into electrically controlled devices.",
        b: "Integrates electrical signal with mechanical action.",
        c: "Advanced control strategy level.",
        d: "Providing artificial intelligence.",
        ans: "ans1"
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