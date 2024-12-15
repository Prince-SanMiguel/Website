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




// Delete page 
const deleteIcon = document.getElementById('deleteIcon');
const deleteIcon2 = document.getElementById('deleteIcon2');
const deleteIcon3 = document.getElementById('deleteIcon3');
const deletePage = document.querySelector('.editpage');
const deletePage2 = document.querySelector('.editpage2');
const deletePage3 = document.querySelector('.editpage3');

deleteIcon.addEventListener('click', (e) => {
    deletePage.classList.toggle('show-editpage')
})

window.addEventListener('click', (e) => {
    if(!deleteIcon.contains(event.target)) {
        deletePage.classList.remove('show-dropdown')
    }
})

deleteIcon2.addEventListener('click', (e) => {
    deletePage2.classList.toggle('show-editpage')
})

window.addEventListener('click', (e) => {
    if(!deleteIcon2.contains(event.target)) {
        deletePage2.classList.remove('show-dropdown')
    }
})

deleteIcon3.addEventListener('click', (e) => {
    deletePage3.classList.toggle('show-editpage')
})

window.addEventListener('click', (e) => {
    if(!deleteIcon3.contains(event.target)) {
        deletePage3.classList.remove('show-dropdown')
    }
})



// Sign out account
const signOut = document.querySelector('.signout a');

signOut.addEventListener('click', function(event) {
    event.preventDefault();

    const targetFile = signOut.getAttribute('data-target');
    window.location.href = targetFile;
    alert('You have signed out!');
    
});


document.addEventListener('DOMContentLoaded', function () {
    // Retrieve subjects from localStorage
    const subjects = JSON.parse(localStorage.getItem('subjects')) || [];
    
    const mainBody = document.querySelector('.main-body');

    // Create course boxes dynamically
    subjects.forEach((subject, index) => {
        const courseBox = document.createElement('div');
        courseBox.classList.add('course-box'); // Add a CSS class for styling

        courseBox.innerHTML = `
            <div class="dropdown">
                <i class='bx bx-dots-vertical-rounded delete-icon' id="deleteIcon-${index}"></i>
                <span class="editpage" id = "deletePage-${index}" >Delete subject</span>
            </div>
            <img src="${subject.image}" class="course-image" alt="Course Image">
            <hr class="line">
            <a href="subject.html">
                <h1 class="course-title">${subject.name}</h1>
            </a>
        `;

        mainBody.appendChild(courseBox);

        const deleteIcon = document.getElementById('deleteIcon-${index}');   
        const deletePage = document.getElementById('deletePage-${index}');

        deleteIcon.addEventListener('click', (e) => {
            e,stopPropagation();
            deletePage.classList.toggle('show-editpage')
        })

        window.addEventListener('click', (e) => {
            if(!deleteIcon.contains(e.target)) {
                deletePage.classList.remove('show-editpage')
            }
        })
        deletePage.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this subject?')) {
                removeSubject(index);
            }

        // Add delete functionality
        // courseBox.querySelector('.editpage').addEventListener('click', function () {
        //     removeSubject(index);
        });
    });
});

// Function to remove a subject
function removeSubject(index) {
    const subjects = JSON.parse(localStorage.getItem('subjects')) || [];
    subjects.splice(index, 1); 
    localStorage.setItem('subjects', JSON.stringify(subjects)); 
    location.reload(); 
}


