function digit(myNum){
  // myNum = screen.value;
  board.value += myNum;
  
}
function erase(){
  board.value = "";
}
function solve(){
  let solution = eval(board.value);
  board.value = solution;
}
function del(){
  board.value = board.value.slice(0,-1)
}