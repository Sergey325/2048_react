export const addNumber = (newBoard) => {
    // getting a random empty cell
    let emptyCells = []
    for (let y = 0; y < newBoard.length; y++) {
        for (let x = 0; x < newBoard.length; x++) {
            if(!newBoard[y][x])emptyCells.push([y,x])
        }
    }

    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    let randomCell = emptyCells[randomIndex];

    // Feel a random empty cell. 4 with 10% probability, otherwise 2
    if (Math.random() < 0.1) {
        newBoard[randomCell[0]][randomCell[1]] = 4;
    } else {
        newBoard[randomCell[0]][randomCell[1]] = 2;
    }

    document.querySelector(`.cell-${randomCell[0]}-${randomCell[1]}`)?.classList.add("appeared")
    setTimeout(() => {
        document.querySelector(`.cell-${randomCell[0]}-${randomCell[1]}`).classList.remove("appeared");
    },200)
    return newBoard;
}
