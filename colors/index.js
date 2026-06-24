let p1 = document.querySelector("body");

function generateRandomAtoF(){
    const letters = ['a','b','c','d','e','f'];
    return letters[Math.floor(Math.random() * letters.length)];
}

function generateRandomAngle0to360(){
    return Math.floor(Math.random() * 361);
}

p1.addEventListener('mousemove', () => {

    let angle = generateRandomAngle0to360();
    let f1 = generateRandomAtoF();
    let f2 = generateRandomAtoF();
    let f3 = generateRandomAtoF();
    let s1 = generateRandomAtoF();
    let s2 = generateRandomAtoF();
    let s3 = generateRandomAtoF();
    let t1 = generateRandomAtoF();
    let t2 = generateRandomAtoF();
    let t3 = generateRandomAtoF();

    const color1 = `#${f1}${f1}${f2}${f2}${f3}${f3}`;
    const color2 = `#${s1}${s1}${s2}${s2}${s3}${s3}`;
    const color3 = `#${t1}${t1}${t2}${t2}${t3}${t3}`;

    p1.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`;
});

console.log(generateRandomAtoF());