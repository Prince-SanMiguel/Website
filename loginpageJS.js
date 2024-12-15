const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const signupLink = document.querySelector('.signup-link');
const loginLink = document.querySelector('.login-link');
const homeLogin = document.getElementById('loginhome');
const homeRegister = document.getElementById('registerhome');
const cancelIcon = document.getElementById('x-icon');
const cancelIcon2 = document.getElementById('x-icon2');

// Links both login and signup form
signupLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none'; 
  signupForm.style.display = 'block'; 

});


loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block'; 

});


// X-function to undisplay both login and sign up form
homeLogin.addEventListener('click', (e) => {
  loginForm.style.display = 'block'; 

});

homeRegister.addEventListener('click', (e) => {
  signupForm.style.display = 'block';
  
});

cancelIcon.addEventListener('click', (e) => {
  loginForm.style.display = 'none';

});

cancelIcon2.addEventListener('click', (e) => {
  signupForm.style.display = 'none';
})


//Forgot Password Reset
const forgotPassForm = document.getElementById('forgotPass-form');
const forgotPassLink = document.querySelector('.forgotLink');
const forgotPassCancel = document.querySelector('.forgotPassCancel')

forgotPassLink.addEventListener('click' , (e) => {
    e.preventDefault();
    forgotPassForm.hidden = false;
    
  });

forgotPassCancel.addEventListener('click' , (e) => {
    e.preventDefault();
    forgotPassForm.hidden = true;
    
});



//Sign In Form to Dashboard
async function loadLoginForm() {
    try {
      const response = await fetch('loginFinal.html'); 
      const loginHtml = await response.text(); 
      //Get the id content from log in form
      document.getElementById('content').innerHTML = loginHtml; 
  
      
      const loginForm = document.getElementById('login-form');
      
      //Log in form event handler method that contain submit button
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        var email_ID = document.getElementById('Email').value;
        var password = document.getElementById('Password').value;
        
        //Verifies user email and password input based on standard
        if (email_ID === 'exampleemail123@gmail.com' && password === 'password123') {
          window.location.href = 'dashboard.html'; 
        } else {
          alert('Invalid email or password. Please try again.');
        }
      });
    }
    catch (error) {
      console.error('Error loading login form:', error);
    }
  }
  window.onload = loadLoginForm;
  

/*
function handleLogin() {
  const email_ID = document.getElementById('Email').value;
  const password = document.getElementById('Password').value;

  // Log email and password values to check if they're correct
  console.log('Email:', email_ID);
  console.log('Password:', password);

  // Simple email/password check
  if (email_ID === 'exampleemail123@gmail.com' && password === 'password123') {
    console.log('Redirecting to dashboard...');
    window.location.href = "dashboard.html";  // Redirect to dashboard on successful login
  } else {
    console.log('Login failed.');
    alert('Invalid email or password. Please try again.');
  }
}

/*
function loginButton() {
    const email_ID = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;

    if (email_ID === 'exampleemail123@gmail.com' && password === 'password123') {
      window.location.href = '/subfolder/dashboard.html'; 
    } 
    else {
      alert('Invalid email or password. Please try again.');
    }
}


/*
async function loadLoginForm() {
  try {
    const response = await fetch('login.html'); 
    const loginHtml = await response.text(); 
    document.getElementById('content').innerHTML = loginHtml; 

   
    const loginForm = document.getElementById('login-form');
    
   
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      var email_ID = document.getElementById('Email').value;
      var password = document.getElementById('Password').value;

      if (email_ID === 'exampleemail123@gmail.com' && password === 'password123') {
        window.location.href = "dashboard.html"; 
      } else {
        alert('Invalid email or password. Please try again.');
      }
    });
  }
  catch (error) {
    console.error('Error loading login form:', error);
  }
}
window.onload = loadLoginForm;



/*
function togglePage() {

const email_ID = document.getElementById('Email').value;
const password = document.getElementById('Password').value;

if (email_ID == 'example123@gmail.com' && password == 'passsword123') {
  window.location.href = 'dashboard.html';
}

else {
  alert('Incorrect email or password, please try again.')
}
}
*/
