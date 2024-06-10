const container = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const newDiv = document.createElement("div");
        newDiv.className = "box";
        newDiv.style.width = "30px";
        newDiv.style.height = "30px";
        newDiv.style.backgroundColor = "brown";
        container.appendChild(newDiv);
    }
}