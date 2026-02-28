// document.getElementById('btn').addEventListener('click', function(event){
    
// })

// addEventListener('click', function(event){}) // callback function

function settleLife(name, isBCS, marriage, patri){
    if(isBCS){
        marriage(patri);
    }
}

function boloKobul(patri) {
    console.log('kobul', patri);
}
boloKobul('nari');

settleLife('Tomal', true, boloKobul, 'Anu');

