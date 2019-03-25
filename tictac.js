var restart = document.querySelector('#b')
var squares = document.querySelectorAll('td')


const clearBoard = ()=> {
    for(var i=0; i<squares.length; i++){
        squares[i].textContent = ''
    }
}

restart.addEventListener('click', clearBoard)

function changeMarker() {
    // e.preventDefault()
    if (this.textContent===''){
        this.textContent='X'
        console.log('Clicked')
    }else if(this.textContent==='X'){
        this.textContent='O'
    }else{
        this.textContent = ''
    }
}



for( var i=0; i<squares.length; i++){
    squares[i].addEventListener('click', changeMarker)
}

