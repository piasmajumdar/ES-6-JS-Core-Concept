function outerFunction(){
    function innerFunction(){
        console.log('This is inner function');
    }
    return innerFunction;
}

const result = outerFunction();
// result();
// console.log("In the outside: ", result);

function counter(owner){
    let count = 0;
    function increment(){
        count = count + 1;
        console.log('value of count ', owner, count);
    }
    return increment;
}
// const count1 = counter();
// console.log(count1);
// count1();
// count1();
// count1();
// count1();

const rahimCounter = counter('rahim');
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();

const karimCounter = counter('karim');
karimCounter();
karimCounter();
rahimCounter();
rahimCounter();
