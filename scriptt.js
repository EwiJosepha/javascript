// Write a short program that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

let fiss=" "
for(let i=1; i<=100; i++){
  console.log(i);
  if(i % 3==0 && i % 5==0){
    fiss+="fissBuzz"
    console.log("fissBuzz")
}
if(i % 5==0){
  fiss+="Buzz";
  console.log("Buzz")
}
if(i % 3==0){
  fiss+="fiss";
  console.log("fiss")
}
}