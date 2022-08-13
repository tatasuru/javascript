const observer = new IntersectionObserver( callback);

const targets = document.querySelectorAll(".block")

targets.forEach( element => {
  observer.observe(element)
});

function callback (entries) {
  entries.forEach(entry => {
    console.log(entry)
  })
}