function loadTest() {
    const setName = localStorage.getItem("currentSet");
    const set = JSON.parse(localStorage.getItem(setName));
    const form = document.getElementById("testForm");
    form.innerHTML = `<h2>${setName}</h2>`;
    let questionNumber = 0;
    for (let def in set) {
        form.innerHTML += `<div><label>${def}<input type='text' id='answer_${questionNumber}' data-correct='${set[def]}'></label></div>`;
        questionNumber++;
    }
}

function submitTest() {
    const inputs = document.querySelectorAll('#testForm input[type="text"]');
    let correctCount = 0;
    inputs.forEach((input) => {
        const parent = input.parentElement;
        if (input.value === input.getAttribute("data-correct")) {
            parent.classList.add("correct");
            correctCount++;
        } else {
            parent.classList.add("incorrect");
            parent.innerHTML += `<span> Correct answer: ${input.getAttribute(
                "data-correct"
            )}</span>`;
        }
    });
    alert(`You got ${correctCount} out of ${inputs.length} correct.`);
}

function returnHome() {
    window.location.href = "/";
}

window.onload = loadTest;

