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




document.addEventListener("DOMContentLoaded", () => {
    // Main container for the exam page
    const examContainer = document.getElementById("examContainer");

    // Elements for specific parts of the exam
    const examTitle = document.getElementById("examTitle");
    const examQuestionsContainer = document.getElementById("examQuestions");
    const examForm = document.getElementById("examForm");

    // Load exam data
    const examData = JSON.parse(localStorage.getItem("currentExam"));

    if (!examData) {
        // If no exam data is found, display a message in the exam container
        examContainer.innerHTML = "<p>No exam data found!</p>";
        return;
    }

    // Set the exam title
    if (examTitle) {
        examTitle.textContent = examData.title || "Untitled Exam";
    }

    // Populate the questions
    examData.questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        questionDiv.innerHTML = `
            <h3>Question ${index + 1}: ${question.question}</h3>
        `;

        if (question.type === "multiple-choice") {
            question.options.forEach(option => {
                const optionLabel = document.createElement("label");
                optionLabel.innerHTML = `
                    <input type="radio" name="question${index}" value="${option}" required>
                    ${option}
                `;
                questionDiv.appendChild(optionLabel);
            });
        } else if (question.type === "short-answer") {
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.name = `question${index}`;
            inputField.required = true;
            questionDiv.appendChild(inputField);
        }

        examQuestionsContainer.appendChild(questionDiv);
    });

    // Handle form submission
    examForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Collect user answers
        const answers = {};
        examData.questions.forEach((question, index) => {
            answers[`question${index}`] = examForm[`question${index}`].value.trim();
        });

        console.log("User Answers:", answers);

        alert("Exam submitted successfully!");
    });
});

