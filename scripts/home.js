function displaySets() {
    const setsContainer = document.getElementById("setsContainer");
    // Clear existing sets
    setsContainer.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        const setName = localStorage.key(i);
        // Skip the currentSet key
        if (setName === "currentSet") {
            continue;
        }
        const set = JSON.parse(localStorage.getItem(setName));
        const setDiv = document.createElement("div");
        setDiv.className = "studySet";
        setDiv.innerHTML = `<h3>${setName}</h3>`;
        for (let def in set) {
            setDiv.innerHTML += `<p><strong>${def}:</strong> ${set[def]}</p>`;
        }
        setDiv.innerHTML += `
    <button onclick="editSet('${setName}')">Edit</button>
    <button onclick="deleteSet('${setName}')">Delete</button>
    <button onclick="takeTest('${setName}')">Take Test</button>
        `;
        setsContainer.appendChild(setDiv);
    }
}

function takeTest(setName) {
    localStorage.setItem("currentSet", setName);
    // Redirect to test page
    window.location.href = "/test/"; 
}

document.getElementById("createSetBtn").addEventListener("click", () => {
    let setName = prompt("Enter the name of the new study set:");
    if (setName) {
        localStorage.setItem(setName, JSON.stringify({}));
        displaySets();
    }
});

function editSet(setName) {
    localStorage.setItem("currentSet", setName);
    // Redirect to study-set page
    window.location.href = "/study-set/";
}

function deleteSet(setName) {
    if (confirm("Are you sure you want to delete this set?")) {
        localStorage.removeItem(setName);
        displaySets();
    }
}

window.onload = displaySets;

