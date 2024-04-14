const container = document.querySelector(".container");


//we use for loop because we create 30 containers in one div
for (let index = 0; index < 30; index++) {
    const colorContainer = document.createElement("div");
    //create class
    colorContainer.classList.add("color-container");
    container.appendChild(colorContainer);
}

const colorContainerEl = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
    colorContainerEl.forEach((colorContainer) => {
        const newColorCode = randomColor();
        colorContainer.style.backgroundColor = "#" + newColorCode;
        colorContainer.innerHTML = "#" + newColorCode;
    })
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNumber, randomNumber + 1);

    }
    return colorCode;
}