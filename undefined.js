let data;
console.log(data); // undefined

const sum = (a,b) => {
    console.log(a,b);
}

sum(5); // give undefined for 2nd parameter

const student = {
    name: 'tormuj',
    age: 30,
    salary: null,
}
delete student.name;
console.log(student.marks) //give undefined
console.log(student.name) //give undefined

const arr = [1,2,3,4,5];
console.log(arr[5]); //give undefined
delete arr[1];
console.log(arr) // <1 empty item> for 1 index
console.log(arr[1]); //give undefined


console.log(typeof undefined);
console.log(typeof null); // object --> javascript mistake

function test() {
    console.log('Hello');
    return;
}

const result = test();
console.log(result);