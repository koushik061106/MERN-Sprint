const loginForm = document.getElementById('Login');
const signupForm = document.getElementById('signup');


function signup(){
    loginForm.style.display = 'none';
    signupForm.style.display = 'flex'; 
};

function login(){
    signupForm.style.display = 'none';
    loginForm.style.display = 'flex';
};
