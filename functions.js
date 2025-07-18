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