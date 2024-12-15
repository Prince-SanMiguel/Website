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



document.addEventListener("DOMContentLoaded", () => {
    const examLinks = document.querySelectorAll(".examForm");

    examLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Ensure target is the correct element
            const target = e.target.closest(".examForm");

            if (!target) return;

            // Get exam name from the data attribute
            const examName = target.getAttribute("data-exam");

            // Fetch the existing exam data
            const examData = JSON.parse(localStorage.getItem("currentExam")) || { title: examName, questions: [] };

            // Save or update current exam to localStorage
            localStorage.setItem("currentExam", JSON.stringify(examData));

            // Redirect to the exam page
            window.location.href = target.href;
        });
    });
});
