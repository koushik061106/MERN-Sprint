let p1 = document.querySelector(".para");
let c1=document.querySelector(".circle");

p1.addEventListener('mousemove', (event) => {
    const rect = c1.getBoundingClientRect();
    console.log(`mouse x: ${event.clientX}, y: ${event.clientY}`);
    console.log(`element x: ${rect.x}, y: ${rect.y}`);
    c1.style=`top:${event.clientY}px;left:${event.clientX}px`
});
