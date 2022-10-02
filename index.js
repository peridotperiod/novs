const target = document.querySelector('#target');

// table header titles
const headerDiv = document.createElement('div');
headerDiv.className = "d-flex flex-row-reverse bg-dark text-light py-3";
target.appendChild(headerDiv);
const headers = [ "Action", "Prohibited Act/s", "Finding/s" ];
headers.forEach(e => {
    let div = document.createElement('div');
    div.className = "col-4 d-flex justify-content-center align-items-center";
    div.innerText = e;
    headerDiv.appendChild(div);
});

// table rows
import api from "./api.js";
api.getNovs().forEach(nov => {
    let row = document.createElement('div');
    row.className = "d-flex flex-row-reverse align-items-center border";
    target.appendChild(row);

    // actions
    let actionDiv = document.createElement('div');
    actionDiv.className = "col-4 d-flex justify-content-center";
    let deleteButton = document.createElement('button');
    deleteButton.className = "btn btn-outline-danger btn-sm deleteButton"
    deleteButton.innerHTML = "&times;";
    actionDiv.appendChild(deleteButton);
    row.appendChild(actionDiv);

    let col8 = document.createElement('div');
    col8.className = "col-8 d-flex flex-column border-start";
    row.appendChild(col8);

    // acts
    nov.acts.forEach(act => {
        let col8Row = document.createElement('div');
        col8Row.className = "d-flex flex-row-reverse border-bottom";
        col8.appendChild(col8Row);
        let actDiv = document.createElement('div');
        actDiv.className = "col-6 d-flex align-items-center justify-content-center border-end";
        actDiv.innerText = act.prohibited_act;
        col8Row.appendChild(actDiv);

        //findings
        let findingsDiv = document.createElement('div');
        findingsDiv.className = "col-6 d-flex flex-column align-items-center border-start border-end";
        col8Row.appendChild(findingsDiv);

        act.findings.forEach(finding => {
            let findingRow = document.createElement('div');
            findingRow.innerText = finding.finding;
            findingsDiv.appendChild(findingRow)
        });
    });
});


function deleteRow(event) {
    const row = event.target.parentNode.parentNode;
    // console.log(row);
    row.parentNode.removeChild(row);
}

for (let button of document.querySelectorAll('.deleteButton')) {
    button.addEventListener("click", deleteRow);
}

