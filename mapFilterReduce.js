//map
const arr = [1, 2, 3, 4, 5, 6];

const mulThree = arr.map((num, i , arr) => {
    return num * 3 + i;
});
// console.log(mulThree);

//filter

const oddNum = arr.filter((num) => {
    if(num % 2 === 0) return num;
});
// console.log(oddNum);

//Reduce
const sum = arr.reduce((acc, curr, i, arr) => {
    return acc + curr;
});
// console.log(sum);


//PolyFill for map
Array.prototype.myMap = function (cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

const arr1 = [1, 2, 3, 4, 5, 6];
const mulThree1 = arr.myMap((num, i, arr1) => {
    return num * 3;
});
// console.log(mulThree1);


//PolyFill for Filter
Array.prototype.myFilter = function(cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i , this)) temp.push(this[i]);
    }
    return temp;
}
const arr2 = [1, 2, 3, 4, 5, 6];
const myFil = arr2.myFilter((num) => {
    return num > 3;
});
//console.log(myFil);

//PolyFill for Reduce
Array.prototype.myReduce = function(cb, intialValue) {
    var accumulator = intialValue;
    for(let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}
const red = arr.myReduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0);
console.log(red);