/*
function vowels(str) {
    let count = 0;
    for(const char of str.toLowerCase()) {
        if (
            char === 'a' || 
            char === 'e' || 
            char === 'i' || 
            char === 'o' || 
            char === 'u'
        ) {
            count++;
        }
        
     }
  
  console.log(count);
}

const countvowels = (str) => {
    let count = 0;
    for (const char of str.toLowerCase()) {
        if (
            char === 'a' || 
            char === 'e' || 
            char === 'i' || 
            char === 'o' || 
            char === 'u'
        ) {
            count++;
        }
    }
    alert(count);
}

let nums = [67, 52, 39];

let calcSquare = (num) => {
    console.log(num * num);
};
nums.forEach(calcSquare);


const multiply = (a, b) => {
    alert(a * b);
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let oddArr = arr.filter((val) => {
    return val % 2 !== 0;
});

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
alert("Even numbers are: " + evenArr);
alert("Odd numbers are: " + oddArr);

let no = [1, 2, 3, 4, 5, 6];
no.forEach((num) => {
    console.log(num * num);
});


let num = [67, 52, 39];
let squares = num.map(n => n * n);
alert("Square of numbers are: " + squares.join(", "));*/



let nums = [67, 52, 39];
nums.map((num) => {
    alert(num);
});