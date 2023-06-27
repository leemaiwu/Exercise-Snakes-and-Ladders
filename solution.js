const snakesAndLadders = function(board, dice) {
    console.log(`board: ${board}`)
    console.log(`dice: ${dice}`)
    if (dice.length === 0 || dice[0] > board.length) {
        return 0
    } else {
        let currentSpot = 0
        for (let i = 0; i < dice.length; i++) {
            let currentRoll = dice[i]
            let nextSpot = currentSpot + currentRoll
            if (nextSpot >= board.length) {
                return currentSpot
            } else {
                currentSpot = nextSpot + board[nextSpot]
                if (currentSpot >= board.length) {
                    return currentSpot
                }
            }
        }
        return currentSpot
    }
}

console.log(snakesAndLadders([0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0], [2, 1, 5, 1, 5, 4])) // 10
console.log(snakesAndLadders([0, 0, 0, 0, 0], [6, 6, 6, 6, 6, 6])) // 0
console.log(snakesAndLadders([0, 0, 0, 0, 0], [])) // 0
console.log(snakesAndLadders([0, 0, 0, 0, 0], [1, 1, 1])) // 3
console.log(snakesAndLadders([0, 0, 0, 0, 0], [1, 1, 1, 6])) // 3
console.log(snakesAndLadders([0, 1, 0, 1, 0, 0], [1, 1])) // 4
console.log(snakesAndLadders([0, 5, 0, 0, 0, 0, 0, 0, -4, 0, 0], [1, 2, 3, 4, 5, 6])) // 7
