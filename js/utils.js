function rectangularCollision({ rectangele1, rectangle2 }) {
    return (
        rectangele1.attackBox.position.x + rectangele1.attackBox.width >= rectangle2.position.x && rectangele1.attackBox.position.x <= rectangle2.position.x + rectangle2.width && rectangele1.attackBox.position.y + rectangele1.attackBox.height >= rectangle2.position.y && rectangele1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}

let timer = 60
let timerId

function decreaseTimer() {

    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer --
        document.querySelector('#timer').innerHTML = timer
    }

    if (timer === 0) {
        determineWinner({ player, enemy, timerId })
    }
}

function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'

    if (player.health === enemy.health) {
        document.querySelector('#displayText').innerHTML = 'DRAW'
    } else if (player.health > enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
    } else if (enemy.health > player.health) {
        document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
    }
}