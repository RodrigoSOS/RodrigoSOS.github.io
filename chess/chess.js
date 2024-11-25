const board = document.getElementById('chessboard');

var cursor = []
function changeCursor(x,y){
    offHighlightSquare(cursor[0],cursor[1])
    cursor = [x,y]
    highlightSquare(cursor[0],cursor[1])
} 

board.addEventListener("mouseover",(event) => {
        event.target.style.color = "orange";
        if(event.target.classList.contains('square')){
            x=event.target.id[0]
            y=event.target.id[1]
            changeCursor(x,y)
            //console.log (event.target.id, table[x][y])
            if (table[x][y]=="♜"){
                console.log(rock(x,y,"black"))
                
            }

        }
        
})
board.addEventListener("mouseout",(event) => {
    event.target.style.color = "";
    //offHighlightSquare(cursor[0],cursor[1])
});

function highlightSquare(x,y){
    document.getElementById(x.toString()+y.toString()).classList.add("highlight");
}
function offHighlightSquare(x,y){
    var hight = document.getElementsByClassName("highlight")
    for(var i = hight.length - 1; i >= 0; i--)
        {
            hight[i].classList.remove("highlight")
        }
}

var table
function validInput(x,y,color){
    if (x>8 || x<-1 || y>8 || y<-1)
        return false
    if (table[x][y] == "" || table[x][y] == null) {

    }
    return true
}

function rock(x,y,color){
    var valid = []
    for (i=x-1;i>-1;i--){
        if(validInput(i,y,color))
            valid.push([i,y])
        else
            break
    }
        
    for (i=x+1;i<8;i++)
        valid.push([i,y])
    for (i=y-1;i>-1;i--)
        valid.push([x,i])
    for (i=y+1;i<8;i++)
        valid.push([x,i])

    return valid
}
function bisp(x,y,color){
    var valid = []
    for (i=x-1,ii=y-1; i>-1 && ii>-1; i--, ii--)
        valid.push([i,ii])   
    for (i=x+1,ii=y+1; i<8 && ii<8; i++, ii++)
        valid.push([i,ii])
    for (i=x-1,ii=y+1; i>-1 && ii<8; i--, ii++)
        valid.push([i,ii])
    for (i=x+1,ii=y-1; i<8 && ii>-1; i++, ii--)
        valid.push([i,ii])
    return valid
}
function horse(x,y,color){
    var valid = []
    if (validInput(x-2,y-1,color))
        valid.push([x-2,y-1]) 
    if (validInput(x-2,y+1,color))
        valid.push([x-2,y+1])
    if (validInput(x-1,y-2,color))
        valid.push([x-1,y-2])
    if (validInput(x-1,y+2,color))
        valid.push([x-1,y+2])
    if (validInput(x+2,y-1,color))
        valid.push([x+2,y-1]) 
    if (validInput(x+2,y+1,color))
        valid.push([x+2,y+1])
    if (validInput(x+1,y-2,color))
        valid.push([x+1,y-2])
    if (validInput(x+1,y+2,color))
        valid.push([x+1,y+2])
    return valid
}


console.log(bisp(3,4))
//console.log(horse(3,4))




function drawTable(x,y){
    table = []
    for (i=0;i<x;i++){
        table.push([]);
        for (ii=0;ii<y;ii++){
            table[i].push([]);
        }
    }
}
function putPice(x,y,pice){
    table[x][y] = pice
}
function putTable(){
    putPice(0,0,"♜");putPice(0,1,"♞");putPice(0,2,"♝");putPice(0,3,"♛");
    putPice(0,4,"♚");putPice(0,5,"♝");putPice(0,6,"♞");putPice(0,7,"♜");
   
    putPice(1,0,"♟");putPice(1,1,"♟");putPice(1,2,"♟");putPice(1,3,"♟");
    putPice(1,4,"♟");putPice(1,5,"♟");putPice(1,6,"♟");putPice(1,7,"♟");

    putPice(6,0,"♙");putPice(6,1,"♙");putPice(6,2,"♙");putPice(6,3,"♙");
    putPice(6,4,"♙");putPice(6,5,"♙");putPice(6,6,"♙");putPice(6,7,"♙");

    putPice(7,0,"♖");putPice(7,1,"♘");putPice(7,2,"♗");putPice(7,3,"♕");
    putPice(7,4,"♔");putPice(7,5,"♗");putPice(7,6,"♘");putPice(7,7,"♖");
}


drawTable (8,8)
putTable()


//document.querySelector('#table').innerHTML = message
// Log to console
console.log(table)

function createChessboard() {
    const board = document.getElementById('chessboard');
  
    const initialBoard = table
  
    // Criar as casas do tabuleiro
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
        square.setAttribute("id", (row).toString()+(col).toString());
  
        // Adicionar as peças
        const piece = initialBoard[row][col];
        if (piece) {
          const pieceElement = document.createElement('span');
          pieceElement.classList.add('piece');
          pieceElement.textContent = piece;
          square.appendChild(pieceElement);
        }
  
        // Adicionar a casa ao tabuleiro
        board.appendChild(square);
      }
    }
  }
  
  // Chamar a função para criar o tabuleiro
  createChessboard();
  