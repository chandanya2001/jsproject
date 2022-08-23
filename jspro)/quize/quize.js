



const myques = [

    {
        question: 'Q1: what is the full form of HTML?',
        a: 'hyper language',
        b: 'hyper text',
        c: 'hypertext language',
        d: 'hyper text marcup languagr',
        ans: 'ans4',

    },
    {
        question: 'Q2: what is the full form of js?',
        a: 'java',
        b: 'java script',
        c: 'hypertext language',
        d: 'hyper text marcup languagr',
        ans: 'ans2',

    },
    {
        question: 'Q3: what is the full form of css?',
        a: 'style ',
        b: 'style sheet',
        c: 'casecadding style sheet',
        d: 'none',
        ans: 'ans3',

    },
    {
        question: 'Q4: java and java script is same or not?',
        a: 'bothe are same',
        b: 'both are different',
        c: 'litil beet different',
        d: 'bothe are different language',
        ans: 'ans4',

    },
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');
let count = 0;
let score = 0;

const loadquestions = () => {
    const questionlist = myques[count];
    question.innerHTML = questionlist.question;
    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;

}


loadquestions();


// const getanswer = () => {

//     let answer;
//     answers.forEach((currentele) => {

//         if (currentele.checked) {

//             answer = currentele.id;
//         }


//     });
//     return answer;

// }

// const deselect = () => {
//     answers.forEach((currentele) => currentele.checked = false)

// }

// submit.addEventListener('click', () => {


//     const checkedanswer = getanswer();
//     if (checkedanswer == myques[count].ans) {

//         score++;



//     }

//     count++;
//     deselect();

//     if (count < myques.length) {

//         loadquestions();

//     } else {

//         showscore.innerHTML = `<h3> your score ${score}/${myques.length}</h3>
// <button class="btn" onclick="location.reload()"> play again</button>


// `;
//         showscore.classList.remove('score-area');

//     }


// });

