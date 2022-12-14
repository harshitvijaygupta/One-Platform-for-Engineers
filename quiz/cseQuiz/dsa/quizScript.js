const quizDB = [
    {
        question: "1. Which of these best describes an array?",
        a: "A data structure that shows a hierarchical behavior.",
        b: "Container of objects of similar types.",
        c: "Arrays are immutable once initialised.",
        d: "Array is not a data structure.",
        ans: "ans2"
    },
    {
        question: "Q2. When does the Array Index Out Of Bounds Exception occur?",
        a: "Run-time.",
        b: "Compile-time.",
        c: "Not an error.",
        d: "Not an exception at all.",
        ans: "ans1"
    },
    {
        question: "Q3. What are the disadvantages of arrays?",
        a: "Data structure like queue or stack cannot be implemented.",
        b: "Index value of an array can be negative.",
        c: "Elements are sequentially accessed.",
        d: "There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size.",
        ans: "ans4"
    },
    {
        question: "Q4. Assuming int is of 4bytes, what is the size of int arr[15];?",
        a: "15",
        b: "60",
        c: "11",
        d: "19",
        ans: "ans2"
    },
    {
        question: "Q5. Elements in an array are accessed ________ .",
        a: "randomly",
        b: "sequentially",
        c: "exponentially",
        d: "logarithmically",
        ans: "ans1"
    },
    {
        question: "Q6. Which of the following concepts make extensive use of arrays?",
        a: "Binary trees.",
        b: "Scheduling of processes.",
        c: "Caching.",
        d: "Spatial locality.",
        ans: "ans4"
    },
    {
        question: "Q7. What are the advantages of arrays?",
        a: "Objects of mixed data types can be stored.",
        b: "Elements in an array cannot be sorted.",
        c: "Index of first element of an array is 1.",
        d: "Easier to store elements of same data type.",
        ans: "ans4"
    },
    {
        question: "Q8. In general, the index of the first element in an array is ________ .",
        a: "-1",
        b: "2",
        c: "0",
        d: "1",
        ans: "ans3"
    },
    {
        question: "Q9. How do you initialize an array in C?",
        a: "int arr[3] = (1,2,3);",
        b: "int arr[3] = {1,2,3};",
        c: "int arr(3) = {1,2,3};",
        d: "int arr(3) = (1,2,3);",
        ans: "ans2"
    },
    {
        question: "Q10. Which one of the following is an application of stack data structure?",
        a: "Managing function calls.",
        b: "The stock span problem.",
        c: "Arithmetic expression evaluation.",
        d: "All of the above.",
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