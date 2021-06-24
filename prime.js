console.log("Extract prime numbers");

const newArray = [2, 55, 24, 57, 59, 28, 8, 15, 10, 99];
const PrimeArray = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
});
console.log("array::" + newArray);
console.log("Prime numbers in array::" + PrimeArray);