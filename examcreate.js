let menuicn = document.getElementById("menuicn");
let nav = document.querySelector(".nav-options");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})

const mainProfile = document.querySelector('.dropBtn') 
const dropContents = document.getElementById('dropContents')

mainProfile.addEventListener('click', (e) => {
    dropContents.classList.toggle('show-dropdown')

});

window.addEventListener('click', (e) => {
    if(!profileButton.contains(event.target)) {
        dropContents.classList.remove('show-dropdown')
    }
})


const signOut = document.querySelector('.signout a');

signOut.addEventListener('click', function(event) {
    event.preventDefault();

    const targetFile = signOut.getAttribute('data-target');
    window.location.href = targetFile;
    alert('You have signed out!');
    
});



//Exam Questions Modification
document.addEventListener("DOMContentLoaded", () => {
    const addQuestionBtn = document.getElementById("addButton$");
    const questionContainer = document.getElementById("questions");
    const quizForm = document.getElementById("examModify");

    let questionCount = 0;

    addQuestionBtn.addEventListener("click", () => {
        questionCount++;

        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        questionDiv.innerHTML = `
            <label for="question${questionCount}">Question ${questionCount}:</label>
            <input type="text" id="question${questionCount}" placeholder="Enter question text" class = "enterQuestion" required>
            
            <label for="type${questionCount}">Question Type:</label>
            <select id="type${questionCount}" class="questionType">
                <option value="multiple-choice">Multiple Choice</option>
                <option value="short-answer">Short Answer</option>
            </select>
            
            <div class="optionsContainer" id="optionsContainer${questionCount}">
                <h4>Options:</h4>
                <button type="button" class="addOptionBtn" data-question="${questionCount}">Add Option</button>
            </div>
            
            <label for="answer${questionCount}" class "labelCorrect">Correct Answer:</label>
            <input type="text" id="answer${questionCount}" placeholder="Enter correct answer" class = "correctAns" required>

            <label for="answer${questionCount}" class "totalPoints">Equivalent point/s:</label>
            <input type="text" id="answer${questionCount}" placeholder=" " class = "questionPts" required>
            
            <button type="button" class="removeQuestionBtn">Remove Question</button>
        `;

        questionContainer.appendChild(questionDiv);

        questionDiv.querySelector(".addOptionBtn").addEventListener("click", (e) => {
            const questionId = e.target.getAttribute("data-question");
            const optionsContainer = document.getElementById(`optionsContainer${questionId}`);
            const optionInput = document.createElement("input");
            optionInput.type = "text";
            optionInput.placeholder = "Enter an option";
            optionInput.classList.add("optionInput");
            optionsContainer.appendChild(optionInput);
        });

        questionDiv.querySelector(".removeQuestionBtn").addEventListener("click", () => {
            questionDiv.remove();
        });

        questionDiv.querySelector(".questionType").addEventListener("change", (e) => {
            const optionsBox = document.getElementById(`optionsContainer${questionCount}`);
            if (e.target.value === "short-answer") {
                optionsBox.style.display = "none";
            } else {
                optionsBox.style.display = "block";
            }
        });
    });

    quizForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const questions = [];

        document.querySelectorAll(".question").forEach((questionDiv, index) => {
            const questionText = questionDiv.querySelector(`#question${index + 1}`).value;
            const questionType = questionDiv.querySelector(`#type${index + 1}`).value;
            const correctAnswer = questionDiv.querySelector(`#answer${index + 1}`).value;

            let options = [];
            if (questionType === "multiple-choice") {
                questionDiv.querySelectorAll(".optionInput").forEach(optionInput => {
                    options.push(optionInput.value.trim());
                });
            }

            questions.push({
                question: questionText,
                type: questionType,
                options,
                answer: correctAnswer.trim(),
            });
        });

        const examData = {
            title: "", // This can be dynamic
            questions,
        };
    
        localStorage.setItem("currentExam", JSON.stringify(examData));
        alert("Exam saved successfully!");
    
        // console.log(questions);

        // alert("Quiz saved successfully!");
        
        quizForm.reset();
        questionContainer.innerHTML = "";
        window.location.href = 'subject.html';
    });
});



/*

document.addEventListener("DOMContentLoaded" , () => {
    const questionBtn = document.getElementById("addButton$");
    const questionContainer = document.getElementById("questions");
    const examForm = document.getElementById("examModify");

    let questionCount = 0;

    questionBtn.addEventListener("click" , () => {
        questionCount++;

        const questionDiv = document.createElement("div");
        questionDiv.classList("questions");

        questionDiv.innerHTML = `
            <label for="question${questionCount}">Question ${questionCount}:</label>
            <input type="text" id="question${questionCount}" placeholder="Enter question text" required>
            
            <label for="type${questionCount}">Question Type:</label>
            <select id="type${questionCount}" class="questionType">
                <option value="multiple-choice">Multiple Choice</option>
                <option value="short-answer">Short Answer</option>
            </select>
            
            <div class="optionsContainer" id="optionsContainer${questionCount}">
                <h4>Options:</h4>
                <button type="button" class="addOptionBtn" data-question="${questionCount}">Add Option</button>
            </div>
            
            <label for="answer${questionCount}">Correct Answer:</label>
            <input type="text" id="answer${questionCount}" placeholder="Enter correct answer" required>
            
            <button type="button" class="removeQuestionBtn">Remove Question</button>
        `;

        questionContainer.appendChild(questionDiv);

        questionDiv.querySelector(".addOptionBtn").addEventListener("click", (e) => {
            const questionId = e.target.getAttribute("data-question");
            const optionsContainer = document.getElementById('optionsContainer${questionId}');
            const optionInput = document.createElement("input");
            optionInput.type = "text";
            optionInput.placeholder = "Enter a choice"
            optionInput.classList.add("optionInput");
            optionsContainer.appendChild(optionInput);
        });

        questionDiv.querySelector(".removeQuestionBtn").addEventListener("click", () => {
            questionDiv.remove();
        });

        questionDiv.querySelector(".questionType").addEventListener("change", (e) => {
            const optionsBox = document.getElementById(`optionsContainer${questionCount}`);
            if (e.target.value === "short-answer") {
                optionsBox.style.display = "none";
            } else {
                optionsBox.style.display = "block";
            }
        });
    });

    examForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const questions = [];

        document.querySelectorAll(".question").forEach((questionDiv, index) => {
            const questionText = questionDiv.querySelector(`#question${index + 1}`).value;
            const questionType = questionDiv.querySelector(`#type${index + 1}`).value;
            const correctAnswer = questionDiv.querySelector(`#answer${index + 1}`).value;

            let options = [];
            if (questionType === "multiple-choice") {
                questionDiv.querySelectorAll(".options-input").forEach(optionInput => {
                    options.push(optionInput.value.trim());
                });
            }
            
            questions.push({
                question: questionText,
                type: questionType,
                options,
                answer: correctAnswer.trim(),
            });
        });

        console.log(questions);

        alert("Quiz saved successfully!");
        examForm.reset();
        questionContainer.innerHTML = "";

        });

    });
    */