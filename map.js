const numbers = [1,2,3,4,5];

// const doubled = [];
// for (const num of numbers){
//     doubled.push(num*2);
// }

// const doubleIt = num => num*2;
// const doubled = numbers.map(doubleIt);

const doubled = numbers.map(num => num*2);
const squared = numbers.map(num => num*num);

console.log(doubled);
console.log(squared);


const friends = ['zaved', 'naved', 'khaaled', 'sajed'];
const firstLetters = friends.map(frd => frd[0]);
console.log(firstLetters)

const products = [
    {name: 'laptop', price: 45000},
    {name: 'phone', price: 15000},
    {name: 'tablet', price: 25000},
];

const prices = products.map(pd => pd.price*2);
console.log(prices);

const names = products.map((pd, index, productsArray) => {
    const upperCaseName = pd.name.toUpperCase();
    console.log(index, upperCaseName, productsArray);
    return upperCaseName;
})
console.log(names);

products.forEach(pd => console.log(pd.name));
