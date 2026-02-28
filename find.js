const students = [
    {name: 'Tormuj', age: 21},
    {name: 'Zaved', age: 31},
    {name: 'Naved', age: 51},
    {name: 'Sajed', age: 31},
    {name: 'Nahid', age: 11},
    {name: 'Nasib', age: 61},
    {name: 'Nehal', age: 38}
];

const student = students.find(std => std.name[0] === 'N'); //Give the first matched item
console.log(student);