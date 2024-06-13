function loadSet() {
    const setName = localStorage.getItem("currentSet");
    document.getElementById("setNameTitle").textContent = setName;
    const set = JSON.parse(localStorage.getItem(setName));
    const termsContainer = document.getElementById("termsContainer");
    termsContainer.innerHTML = "";
    for (let def in set) {
        termsContainer.innerHTML += `
    <div>
        <input type='text' value='${def}' onchange='updateKey(this, "${def}")'>
        <input type='text' value='${set[def]}' onchange='updateValue(this, "${def}")'>
        <button onclick='deleteTerm("${def}")'>Delete</button>
    </div>`;
    }
}

function addTerm() {
    const termsContainer = document.getElementById("termsContainer");
    termsContainer.innerHTML += `
<div>
    <input type='text'>
    <input type='text'>
    <button onclick='saveNewTerm(this.parentNode)'>Save</button>
</div>`;
}

function saveNewTerm(div) {
    const inputs = div.querySelectorAll("input");
    const setName = localStorage.getItem("currentSet");
    const set = JSON.parse(localStorage.getItem(setName));
    set[inputs[0].value] = inputs[1].value;
    localStorage.setItem(setName, JSON.stringify(set));
    // Reload to show saved terms
    loadSet();
}

function updateKey(input, oldKey) {
    const setName = localStorage.getItem("currentSet");
    const set = JSON.parse(localStorage.getItem(setName));
    const newKey = input.value;
    const value = set[oldKey];
    delete set[oldKey];
    set[newKey] = value;
    localStorage.setItem(setName, JSON.stringify(set));
}

function updateValue(input, key) {
    const setName = localStorage.getItem("currentSet");
    const set = JSON.parse(localStorage.getItem(setName));
    set[key] = input.value;
    localStorage.setItem(setName, JSON.stringify(set));
}

function deleteTerm(key) {
    const setName = localStorage.getItem("currentSet");
    const set = JSON.parse(localStorage.getItem(setName));
    delete set[key];
    localStorage.setItem(setName, JSON.stringify(set));
    loadSet();
}

function saveSet() {
    alert("Changes saved!");
}

function returnHome() {
    window.location.href = "../";
}

window.onload = loadSet;

