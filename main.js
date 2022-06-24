/* Do not forget to make the Submit input active again after answer */

/* Importing sets of questions */
import { five_questions, ten_questions } from "./questions.js";
import { rules } from "./rules.js";

/* Definition of functions */
const checkAnswer = () => {
    let answer = document.getElementById("answer").value;
    return answer;
}

const displayQuestion = list => {
    let question_counter = 0;
    let question_wrapper = document.getElementById("question");
    question_wrapper.innerText = list[question_counter].question;
    let correct_answer = list[question_counter].answer;
    let trap = list[question_counter].trap;
}

const checkPoints = points => {

}

/* Add event listener for the form */

// let answerForm = document.getElementById("answer-form");
// answerForm.onsubmit = checkAnswer;



/* Create game loop */
const playGame = (questions, rules) => {


    displayQuestion(questions); 
    checkPoints(checkAnswer());

}

playGame(five_questions, rules);







