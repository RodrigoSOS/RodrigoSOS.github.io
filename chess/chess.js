
var table;

function rock(x,y){
    var valid = []  
    for (i=x-1;i>-1;i--)
        valid.push([i,y])
    for (i=x+1;i<8;i++)
        valid.push([i,y])
    for (i=y-1;i>-1;i--)
        valid.push([x,i])
    for (i=y+1;i<8;i++)
        valid.push([x,i])
    return valid
 }


 
 
 console.log(rock(2,1))

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
    
    putPice(0,0,"♜");putPice(1,1,"♞");putPice(1,2,"♝");putPice(1,3,"♛");
    putPice(1,4,"♚");putPice(1,5,"♝");putPice(1,6,"♞");putPice(1,7,"♜");



    putPice(7,0,"♖");putPice(7,1,"♘");putPice(7,2,"♗");putPice(7,3,"♕");
    putPice(7,4,"♔");putPice(7,5,"♗");putPice(7,6,"♘");putPice(7,7,"♖");
}

drawTable (8,8)
putTable()
const message = 'Hello world' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

//document.querySelector('#table').innerHTML = message
// Log to console
console.log(table)