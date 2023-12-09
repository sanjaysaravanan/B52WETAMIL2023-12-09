console.log("Line 1");

setTimeout(() => {
  console.log("Line 4");
}, 0);

for (let i = 0; i < 1000; i++) {
  console.log("Line ", i + 6);
}
