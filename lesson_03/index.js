// function promise() {
//   return new Promise((ok) => {
//     ok("OKです");
//   });
// }

// const promise = new Promise ( (ok) => {
//   ok("OKです");
// })

// console.log(promise);


function promise (pay) {
  return new Promise ( (ok ,ng) => {
    if( pay >= 100){
      let change = pay - 100;
      ok(change)
    } else{
      ng("お金が足りません。");
    }
  })
}

let pay = 500;


promise(pay).then( (change) => {
  console.log(change);
}).catch( (reason) => {
  console.log(reason);
})
