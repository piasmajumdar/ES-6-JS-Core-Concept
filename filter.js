const numbers = [1,2,3,4,5];

const evenNumbers = numbers.filter(num => num%2 == 0);
console.log(evenNumbers);

const friends = ['zaved', 'naved', 'khaled', 'sajed', 'nahid', 'nasib'];
const NFriends = friends.filter(frd => frd[0]==='n');
console.log(NFriends)

const students = [
    {name: 'Torumuj', age: 21},
    {name: 'Borumuj', age: 31},
    {name: 'Corumuj', age: 51},
    {name: 'Gorumuj', age: 31},
    {name: 'Horumuj', age: 11},
    {name: 'Sorumuj', age: 61},
    {name: 'Porumuj', age: 38}
]
const olderStudents = students.filter(std => std.age>30);
console.log(olderStudents);