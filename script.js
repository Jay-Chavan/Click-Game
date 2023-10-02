const squares = document.querySelectorAll('.colorsquare')

const timesclicked = {'red':0, 'yellow':0, 'green':0}
squares.forEach(square => {
    square.onclick = () => 
    {
     timesclicked[square.value] += 1
     square.innerText=  timesclicked[square.value]
    }
})

function clearc(){
    timesclicked.red=0
    timesclicked.yellow=0
    timesclicked.green=0
    squares.forEach(square => {square.innerText=''})
}

const clearclickbtn= document.getElementById('clear')
clearclickbtn.onclick=()=> clearc()