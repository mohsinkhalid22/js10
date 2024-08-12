let arr = [1,2,3,4,5,6,6];

arr.forEach(function printVal(val) {
    console.log(val);
});

let aar = ["isb","rwp","lhr"];

aar.forEach((vall, idx, aar) => {
    console.log(vall, idx);
    console.log(vall.toUpperCase(), aar);
})

let nums = [2,3,4,6];

// nums.forEach((num) => {
//     console.log(num*num);
// })

// Second Method 

let calcSquare = ((num) => {
        console.log(num*num);
    });

nums.forEach(calcSquare);

nums.map((val) => {
    console.log(val);
});