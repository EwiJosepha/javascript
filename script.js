//js program for steps using for loops

// function steps(val){
//   let step=" ";
//   for(i = 1; i <= val; i++){
// for(j = 1; j + 1 <= i; j++){
//       step+="*";
//     }
//     step+="\n"
//   }
//   console.log(step) 
// }    


// (steps(10))

// // Write a short program that prints each number from 1 to 100 on a new line.

// // For each multiple of 3, print "Fizz" instead of the number.

// // For each multiple of 5, print "Buzz" instead of the number.

// // For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// function fizzbuss(){
//   let fiss= "";
//   for(i=1; i<=100; i++){
//     console.log(i)

//     if(i % 3 ==0 && i % 5 ==0){
//       console.log("fizzBuss")
//     }

//     if( i % 3 ==0){
//       console.log("fizz")
//     }
    
// if(i % 5 ==0){
//   console.log("buzz")
// }
// }
// }
// (fizzbuss())

// //write a javascript prograam that prints a chessbord

// function chesseBoard(){
//   let board= " ";

//   for(let i=1; i<=8; i++){

//  for(let j=1; j<=8; j++){

// if( (i+j) % 2 ===0){
//   board+=  "# "
// } else {
// board+= "* "
// }

// }  
// board+=" \n "
 
// } 
// console.log(board)
// }

// (chesseBoard())

 
// // let firstAmount= 1000
// // let secondAmount= 1000
// // let thirdAmount= 1000
// // let sum= firstAmount+secondAmount+thirdAmount
// // console.log(sum)

// // let schoolBus= {
// //   myname: "general",
// //   durration: 18,
// //   townn: "kumba",

// // };
// // console.log(schoolBus)

// // program to print christmas tree



// function printTree(height) {
//   let tree = "";

//   for (let i = 1; i <= height; i++) {
//     // loop to add spaces`
//     for (let j = height - i; j >= 0; j--) {
//       tree += " ";
//     }

//     // loop to add stars
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       tree += "*";
//     }

//     tree += "\n";
//   }

//   console.log(tree);
// }
// printTree(10)

// // let ans=" "
// // for(let i=0;i<8; i++){
// //   for(let j=1;j<8;j++){
// //     ans+=" "
// //   }

// //   for(k=1; k<=(2*i-1); k++){
// //     ans+="*"
// //   }
// //   ans+="\n"
// // }

// // console.log(ans)


