// No changes needed in JS (except ensure color classes are maintained)
const arabicLetters = "أبجد هوز حطي كلمن سعف صقر شتث خذض ظغ";
let selectedLetters = [];

function getRandomLetters() {
    const allLetters = arabicLetters.replace(/\s/g, '').split('');
    selectedLetters = [];
    while (selectedLetters.length < 25) {
        let randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
        if (!selectedLetters.includes(randomLetter)) {
            selectedLetters.push(randomLetter);
        }
    }
}

// Modified JS createBeehive function
function createBeehive() {
    const beehive = document.getElementById("beehive");
    beehive.innerHTML = "";
    getRandomLetters();

    const rows = 5;
    const columns = 5;
    let hexIndex = 0;

    for (let row = 0; row < rows; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = `row${row % 2 ? ' row-moved' : ''}`;

        for (let col = 0; col < columns; col++) {
            const hex = document.createElement("div");
            hex.className = "hex";
            
            // Add letter in a span
            const span = document.createElement("span");
            span.textContent = selectedLetters[hexIndex++];
            hex.appendChild(span);
            
            hex.onclick = () => changeColor(hex);
            rowDiv.appendChild(hex);
        }
        beehive.appendChild(rowDiv);
    }
}

// Rest of JS remains the same

function changeColor(hex) {
    if (!hex.classList.contains("yellow")) {
        hex.classList.add("yellow");
    } else if (!hex.classList.contains("green")) {
        hex.classList.remove("yellow");
        hex.classList.add("green");
    } else if (!hex.classList.contains("orange")) {
        hex.classList.remove("green");
        hex.classList.add("orange");
    } else {
        hex.classList.remove("orange", "yellow", "green");
    }
}

function reshuffle() {
    createBeehive();
}

createBeehive();