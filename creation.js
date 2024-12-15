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


document.querySelector('.createBtn').addEventListener('click', function () {
    // Get input values
    const subjectName = document.querySelector('input[placeholder="Subject Name"]').value;
    const fileInput = document.querySelector('#coverfile');
    
    if (!subjectName || !fileInput.files.length) {
        alert('Please fill in all details.');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const newSubject = {
            name: subjectName,
            image: event.target.result
        };

    
    const subjects = JSON.parse(localStorage.getItem('subjects')) || [];

    
    subjects.push(newSubject);
    localStorage.setItem('subjects', JSON.stringify(subjects));

    
    window.location.href = 'dashboard.html';
}
reader.readAsDataURL(file);

});