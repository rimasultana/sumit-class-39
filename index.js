// let text = "";


// for (let i = 0; i < 10; i++) {
//   if (i === 3) { break; }
//   text += "The number is " + i;
// }

// console.log(text);



let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i;
}

console.log(text);