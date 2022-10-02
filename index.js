function deleteRow(event) {
    const row = event.target.parentNode.parentNode;
    // console.log(row);
    row.parentNode.removeChild(row);
}

for (let button of document.querySelectorAll('.deleteButton')) {
    button.addEventListener("click", deleteRow);
}

const target = document.querySelector('#target');

const headers = [ "Action", "Finding/s", "Prohibited Act/s" ]


import api from "./api.js";
const novs = api.getNovs();
novs.forEach(e =>{
    let p = document.createElement('div');
    p.innerText = e.company;
    target.appendChild(p);
})
