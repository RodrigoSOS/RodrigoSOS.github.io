function validInput(x,y,color){
    if (table[x][y] == "" || table[x][y] == null) {

    }
    return true
}

function rock(x,y,color){
    var valid = []
    for (i=x-1;i>0;i--){
        if(validInput(i,y,color))
            valid.push([i,y])
        else
            break
    }
        
    for (i=x+1;i<8;i++)
        valid.push([i,y])
    for (i=y-1;i>0;i--)
        valid.push([x,i])
    for (i=y+1;i<8;i++)
        valid.push([x,i])

    return valid
}
function bisp(x,y,color){
    var valid = []
    for (i=x-1,ii=y-1; i>0 && ii>0; i--, ii--)
        valid.push([i,ii])   
    for (i=x+1,ii=y+1; i<8 && ii<8; i++, ii++)
        valid.push([i,ii])
    for (i=x-1,ii=y+1; i>0 && ii<8; i--, ii++)
        valid.push([i,ii])
    for (i=x+1,ii=y-1; i<8 && ii>0; i++, ii--)
        valid.push([i,ii])
    return valid
}


console.log(bisp(1,1))



var table;
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

    putPice(2,0,"♙");putPice(2,1,"♙");putPice(2,2,"♙");putPice(2,3,"♙");
    putPice(2,4,"♙");putPice(2,5,"♙");putPice(2,6,"♙");putPice(2,7,"♙");

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
