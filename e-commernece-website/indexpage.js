const loginform = document.querySelector(".login");
const signupform=document.querySelector(".Sign-up");
function showsignup(){
    loginform.style.display="none";
    signupform.style.display="flex";
};
function register(){
    let username=document.getElementById("newuser").value;
    let password=document.getElementById("newpass").value;
    let password1=document.getElementById("newpass1").value;
    if (username==="" || password=="") {
        alert('please fill details');
        return;
    }else if (password!==password1){
        alert('please check pass words again');
    }
    else{
        localStorage.setItem("newuser",username);
        localStorage.setItem('password',password1);
        alert('signup successfully');
        loginform.style.display='flex';
        signupform.style.display='none';
    }    
}
function here(){
    loginform.style.display='flex';
    signupform.style.display='none';
}
function check(){
        let username=document.getElementById("username").value;
        let password=document.getElementById("password").value;
        let user=localStorage.getItem("newuser");
        let passkey=localStorage.getItem("password");
        if (username==user && password===passkey){
            window.location.href="dashboard.html";
        }
        else{
            alert("username or password is incorrect");
        }
}