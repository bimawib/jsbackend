// import _ from 'lodash';

const myArray = [1,2,3,4];

let sum = 0;
myArray.forEach(element => {
    sum+= element;
});
console.log(sum);

let sumuk = myArray.reduce(function(prev,curr){
    return prev + curr;
});
console.log(sumuk);

// DENGAN LODASH
// const sumlodash = _.sum(myArray);
// console.log(sumlodash);