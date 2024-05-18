function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}
var addSix = createBase(6);
addSix(10);
addSix(15);

//Private Counter
function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrieve() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrieve,
  };
}

const c = counter();
c.add(10);
c.add(20);
console.log(c.retrieve());

//Run Only Once
let happy;
function areYouHappy() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Ur Always Happy");
    } else {
      console.log("Be Happy");
      called++;
    }
  };
}

let heloo = areYouHappy();
heloo();
heloo();
heloo();
heloo();
heloo();
heloo();
heloo();

//Memoise
function myMemoize(fn, context) {
  const res = {};

  return function (...args) {
    var argCache = JSON.stringify(args);
    if (![argCache]) {
      res[argCache] = fn.call(context || this, ...args);
    }
    return res[argCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 1000000000000; i++) {}

  return num1 * num2;
};

const memoizedClumzyProduct = myMemoize(clumsyProduct);
