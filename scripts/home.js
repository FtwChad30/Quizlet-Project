document.getElementById("createSetBtn").addEventListener("click", function () {
    let setName = prompt("Enter the name of the new study set:");
    if (setName) {
        localStorage.setItem(setName, JSON.stringify({}));
        displaySets();
    }
});

window.onload = () => {
    const setsContainer = document.getElementById("setsContainer");
    // Clear existing sets if there are any
    setsContainer.innerHTML = ""; 
    for (let i = 0; i < localStorage.length; i++) {
        const setName = localStorage.key(i);
        const set = JSON.parse(localStorage.getItem(setName));
        const setDiv = document.createElement("div");
        setDiv.className = "studySet";
        setDiv.innerHTML = `<h3>${setName}</h3>`;
        for (let def in set) {
            setDiv.innerHTML += `<p><strong>${def}:</strong> ${set[def]}</p>`;
        }
        setDiv.innerHTML += "<button>Edit</button> <button>Delete</button>";
        setsContainer.appendChild(setDiv);
    }
};

