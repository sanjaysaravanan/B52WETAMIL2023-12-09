// synchronous

function doOperation(op1, op2, operation) {
  console.log(operation(op1, op2));
}

function sum(op1, op2) {
  return op1 + op2;
}

function sub(op1, op2) {
  return op1 - op2;
}

//
// op1 =
// op2
// op

doOperation(100, 200, sum);

// forEach

const sample = (val, i, arr) => {
  console.log("Value", val);
  console.log("Arr", arr);
  console.log("i", i);
};

[1, 2, 3, 4].forEach(sample);

// asynchronous callback
setTimeout(() => {
  console.log("Hey I am a callback who executes asynchornously");
}, 1000);

const cb2 = () => {
  console.log("Hey I am a Callbak Two who executes asynchornously");
};

setTimeout(cb2, 2000);

//
