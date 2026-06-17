let adgt=document.getElementById("taskin");
let con=document.getElementById("given");
let compl=document.getElementById("strike");
function adding() {
    let taskText = adgt.value;
    if (taskText === "") {
        alert("Task can't be empty");
        adgt.value="";
        return;
    }
    let task=document.createElement('div');
    task.className="tt";
    task.innerHTML= `
        <div style="display: flex; align-items: center;">
            <input type="checkbox" onclick="mov(this)" class="cc">
            <p class="pa" id="task1">${taskText}</p>
        </div>
        <div class="edy">
                <button id="edit" class="edi" onclick="edit(this)">!</button>
                <button id="del" class="edi" onclick="del(this)">X</button>
        </div>
    `;
    ;
    con.appendChild(task);
    adgt.value = "";
};
function edit(para) {
    let card = para.parentElement.parentElement;
    let pTag =card.querySelector('p');
    let newText = prompt("Edit your task:", pTag.innerText);
    if (newText !== null && newText !== "") {
        pTag.innerText = newText;
    }
}
function mov(task){
    let ta=task.parentElement.parentElement;
    if (task.checked===true){
        compl.appendChild(ta);
        ta.querySelector('p').style.textDecoration="line-through";
        ta.querySelector('p').style.color="gray";
    } else{
        con.appendChild(ta);
        ta.querySelector('p').style.textDecoration="none";
        ta.querySelector('p').style.color="black";
    }
};
function del(tas){
    let tase=tas.parentElement.parentElement;
    tase.remove();
}
