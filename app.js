const count = document.getElementById('count')
const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')
const increase = document.getElementById('increase')

let counter = 0

increase.addEventListener('click', () => {
    counter += 1
    count.innerHTML = counter
    checkCounter()
})
decrease.addEventListener('click', () => {
    counter -= 1
    count.innerHTML = counter
    checkCounter()
})
reset.addEventListener('click', () => {
    counter = 0
    count.innerHTML = counter
    checkCounter()
})

function checkCounter () {
    if (counter >= 1) {
        count.style.color = 'green'
    }else if (counter < 0) {
        count.style.color = 'red'
    }else if (counter === 0) {
        count.style.color = 'gray'
    }
}