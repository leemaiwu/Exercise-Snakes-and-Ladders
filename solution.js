const snakesAndLadders = function(board, dice) {
    let currentPlace = 0
    for (let i = 0; i < board.length; i++) {
        let role = board[i]
        for (let k = 0; k < dice.length; k++) {
            let spot = k
            let move = dice[k]
            i++
        }
    }
}

console.log(snakesAndLadders([2, 1, 5, 1, 5, 4], [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0])) // 10
