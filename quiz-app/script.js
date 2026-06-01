const quizData = [

{
question:"What does HTML stand for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Home Tool Markup Language",
"Hyper Transfer Markup Language"
],
answer:"Hyper Text Markup Language"
},

{
question:"Which language is used for styling web pages?",
options:[
"HTML",
"CSS",
"Java",
"Python"
],
answer:"CSS"
},

{
question:"Which language is used for web interactivity?",
options:[
"JavaScript",
"C",
"Python",
"SQL"
],
answer:"JavaScript"
},

{
question:"Which symbol is used for IDs in CSS?",
options:[
".",
"#",
"*",
"&"
],
answer:"#"
},

{
question:"Which company developed JavaScript?",
options:[
"Microsoft",
"Netscape",
"Google",
"Apple"
],
answer:"Netscape"
}

];

let currentQuestion = 0;
let score = 0;

const questionElement =
document.getElementById("question");

const optionsElement =
document.getElementById("options");

const nextBtn =
document.getElementById("nextBtn");

function loadQuestion(){

let q = quizData[currentQuestion];

questionElement.textContent =
q.question;

optionsElement.innerHTML = "";

q.options.forEach(option => {

const button =
document.createElement("button");

button.textContent = option;

button.classList.add("option");

button.onclick = () => selectAnswer(option);

optionsElement.appendChild(button);

});

}

function selectAnswer(selected){

if(
selected ===
quizData[currentQuestion].answer
){
score++;
}

nextBtn.style.display = "block";

}

nextBtn.addEventListener("click", () => {

currentQuestion++;

if(currentQuestion < quizData.length){

loadQuestion();

}else{

showResult();

}

});

function showResult(){

document.getElementById("quiz").innerHTML =

`
<h2>Quiz Completed</h2>

<h3>Your Score:
${score} / ${quizData.length}
</h3>

<button onclick="location.reload()">
Restart Quiz
</button>
`;

}

loadQuestion();