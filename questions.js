/* Ideally, questions would be imported as a JSON object */

const questions = [
    {
        question: "In what year did Napoleon win the battle of Waterloo?",
        trap: true,
        answer: null
    },
    {
        question: "Convert 60 minutes in seconds, but a minute is 59 seconds",
        trap: false,
        answer: 3540
    },
    {
        question: "Distance from Manile to Shanghai in kilometers?",
        trap: false,
        answer: 1849
    },
    {
        question: "Number of squares on standard a Monopoly board times 8?",
        trap: false,
        answer: 320
    },
    {
        question: "How old would you be if your 50th birthday would be tomorrow?",
        trap: false,
        answer: 49
    },
    {
        question: "What percentage of Mount Everest is under water?",
        trap: true,
        answer: null
    }

];

const select_question = (amount, questions) => {

    if (questions.length < amount) {
        return questions;
    } else {
        let selected_questions = []
        while (selected_questions.length < amount) {
            let random = Math.floor(Math.random() * questions.length);
            selected_questions.push(questions[random]);
            questions.splice(random, 1);
        }

        return selected_questions;
    }
}

export let five_questions = select_question(5, questions);
export let ten_questions = select_question(10, questions);