const AUTH_KEY = 'isLoggedIn';
const n = document.getElementById('names');
const p = document.getElementById('passwords');

function isLoggedIn(){
    return localStorage.getItem(AUTH_KEY) === 'true';
}

function setLoggedIn(value){
    if (value){
        localStorage.setItem(AUTH_KEY, 'true');
    } else {
        localStorage.removeItem(AUTH_KEY);
    }
}

function login(){
    if (!n || !p){
        return;
    }

    fetch('./users.json')
    .then(response => response.json())
    .then((data) => {
        const user = data.find(item => item.name === n.value && item.password === p.value);
        if (user){
            setLoggedIn(true);
            window.location.replace('dashboard.html');
        } else {
            alert('Username or password is incorrect');
        }
    })
    .catch(() => {
        alert('Unable to verify credentials.');
    });
}

function logout(){
    setLoggedIn(false);
    window.location.replace('index.html');
}

function dashpage(){
    if (isLoggedIn()){
        window.location.replace('dashboard.html');
    } else {
        redirectIfNotLoggedIn();
    }
}

function homepage(){
    if (isLoggedIn()){
        window.location.replace('home.html');
    } else {
        redirectIfNotLoggedIn();
    }
}

function redirectIfNotLoggedIn(){
    if (typeof window === 'undefined' || !window.location){
        return;
    }

    const url = window.location.pathname || window.location.href || '';
    const page = url.substring(url.lastIndexOf('/') + 1).toLowerCase();

    if (!isLoggedIn() && (page === 'home.html' || page === 'dashboard.html')){
        window.location.replace('index.html');
    }

    if (isLoggedIn() && page === 'index.html'){
        window.location.replace('dashboard.html');
    }
}

redirectIfNotLoggedIn();


