document.getElementById("submit").addEventListener("click", checkAnswer);

function checkAnswer() {
    const quizContainer = document.getElementById("quiz");
    const options = quizContainer.querySelectorAll("input[name='answer']");
    let selectedAnswer;

    options.forEach(option => {
        if (option.checked) {
            selectedAnswer = option.value;
        }
    });

    const result = document.getElementById("result");
    
    // Create an array of questions and their correct answers
    const questions = [
        { answer: "script", feedback: "Correct! The correct answer is 'script'." },
        { answer: "// ...", feedback: "Correct! The correct answer is '// ...'." },
        { answer: "Hypertext Markup Language", feedback: "Correct! The correct answer is 'Hypertext Markup Language'." },
        { answer: "alert(HELLO WORLD!)", feedback: "Correct! The correct answer is 'alert(HELLO WORLD!)'." },
        { answer: "function myFunction()", feedback: "Correct! The correct answer is 'function myFunction()'." },
        { answer: "if (i==5)", feedback: "Correct! The correct answer is 'if (i==5)'." },
        { answer: "var colors =[red,green,blue]", feedback: "Correct! The correct answer is 'var colors =[red,green,blue]'." },
        { answer: "onclick", feedback: "Correct! The correct answer is 'onclick'." },
    ];

    // Check each question
    let correct = false;
    for (const question of questions) {
        if (selectedAnswer === question.answer) {
            correct = true;
            result.textContent = question.feedback;
            break;
        }
    }

    if (!correct) {
        result.textContent = "Incorrect. Please try again.";
    }
}
