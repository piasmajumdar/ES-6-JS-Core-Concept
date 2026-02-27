let data;
data = 0; //F
data = ''; //F
data = '0'; //T
data = ' '; //T
data = false; //F
data = true; //T
data = null; //F
data = undefined; //F
data = {}; //T
data = []; //T

if(data) {
    console.log('Truthy');
} else {
    console.log('Falsy');
}

let price = false;
if(!price) {
    console.log('Price is Falsy');
}
let value = 0;
if(!!value){
    console.log('Truthy');
}