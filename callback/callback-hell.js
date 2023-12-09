function f4() {}

function f3(f4) {
  f4();
}

function f2(f3) {
  f3();
}

function f1(f2) {
  f2();
}

function f1() {
  function f2() {
    function f3() {
      function f4() {}
    }
  }
}

//

let count = 3;

setTimeout(() => {
  count--;
  console.log(count);
  setTimeout(() => {
    count--;
    console.log(count);
    setTimeout(() => {
      count--;
      console.log("Display Some Message");
    }, 1000);
  }, 1000);
}, 1000);
