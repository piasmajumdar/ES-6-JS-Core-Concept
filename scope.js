let pi = 3.14; //pi is global scope

console.log(add(5,20));
function add(a,b) {
    const factor = 0.5; // factor is function scope
    const result = (a+b)*factor+pi;
    const total = doubleIt(result);
    const value = addTwo(total);
    function addTwo(num) {
        num = num + pi;
        return num;
    }
    return result;
}

function doubleIt(num){
    return num*2;
}

// console.log(factor, pi);

// addTwo(5) --> not possible

const multiply = (a,b) => {
    console.log(result); // give error
    // TDZ: Temporal Dead Zone
    const result = a*b;
    return result;
}

multiply(2,5);

//all the loops, function--> they are scope
if(true){

}
if(false){

}

const age = 21; // can'be accessed above this...TDZ(Temporal Dead Zone)