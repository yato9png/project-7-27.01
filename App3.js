function filterArray(array, filterFunc) {
    const filteredArray = []; 
    for (let element of array) {
        if (filterFunc(element)) {
            filteredArray.push(element); 
        }
    }
    return filteredArray; 
}

const numbers = [1, 2, 3, 4, 5];
const isOdd = (num) => num % 2 !== 0; 

console.log(filterArray(numbers, isOdd)); 
