//source:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// applying power
const result = Math.pow(8, 2);
//console.log(result)

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1- num2);

if(gap < 5){
    console.log('you guys can be friends');
}
else{
    console.log('you guys stay apart');
}

// output near round number
const number = 2.6598;
const fullNumber = Math.round(number);
//console.log(fullNumber);

//দশমিকের পরে শুন্য এর বেশি হলেও পরবর্তি সংখ্যা হবে
const result_up = Math.ceil(2.0001);
//console.log(result_up);

//দশমিকের পরে ৫/ এর বেশি হলে পূর্ববর্তি সংখ্যা হবে
const result_down = Math.floor(561.559);
//console.log(result_down);

// Random
//console.log(Math.random());

// multiplied by 100
//const random = Math.random()*100;
//console.log(random);


// Full random number
//const random = Math.round(Math.random()*100);
//console.log(random);


// Full random number
for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}


