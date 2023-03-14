 
 let first = 5;
 let second = 7;
 console.log(first, second);

 //swap number not successful
//  first = second;
//  second = first;
//console.log(first, second);

//swap number successful approach-1
/*
const temp = first;
first = second;
second = temp;
 console.log(first, second);
*/

 //swap number successful approach-2
 //Destructuring method
 [first, second] = [second, first];

 console.log(first, second);
