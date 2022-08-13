// async function test () {
//   return "非同期処理";
// }

// console.log(test().then( input => {
//   console.log(input);
// }));

function waiting(sec) {
  return new Promise( ok => {
    setTimeout(() => {
      ok();
    }, sec * 1000 )
  })
};

async function test2 () {
  console.log(1);
  await waiting(2);
  console.log(3);
}

test2();