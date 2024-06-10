const canvas = document.querySelector(".canvas");

function createGrid(gridSize) {
    for (let row = 0; row < gridSize; row++) {
        
        const gridRow = document.createElement("div");
        gridRow.setAttribute("class", "row");
        canvas.appendChild(gridRow);

        for (let i  = 0; i < gridSize; i++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            gridRow.appendChild(square);
        }
    }
    /*
        <div class="grid-container">
            <div class="row"></div>
                <div class="square">
                <div .....
            <div.......
        </div>
    */
}

createGrid(16);
