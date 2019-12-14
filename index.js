const cells = document.getElementsByClassName('cell');

let turn = 'X';
setTurn();

Array.from(cells).forEach(cell => {
    const idOfCell = cell.id;
    document.getElementById(idOfCell).addEventListener('click', () => {
        selectCell(idOfCell[1], idOfCell[3]);
    });
});

function selectCell(rowNo, colNo) {
    console.log(`Selected cell of row ${rowNo} and col ${colNo}`);
    setCellValue(rowNo, colNo, turn);
    toggleTurn();
}

function setCellValue(rowNo, colNo, value) {
    document.getElementById(`r${rowNo}c${colNo}`).textContent = value;
}

function setTurn() {
    document.getElementById('turn-of').textContent = turn;
}

function toggleTurn() {
    turn = turn === 'X' ? 'O' : 'X';
    setTurn();
}