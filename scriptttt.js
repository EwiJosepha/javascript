//write a program that prints a chesseBoard

let chesseBoard=""
for(i=1; i<=8; i++){
for(j=1; j<=8; j++){
  if((i+j) % 2==0){
    chesseBoard+=" * "
  }else{
    chesseBoard+=" # "
 }
}
chesseBoard+="\n"
}      

console.log(chesseBoard)

