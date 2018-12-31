
let getFirstSelector = (selector) => document.querySelector(selector)

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list')
  list = Array.from(list);
  list.forEach(ul => {
    const children = Array.from(ul.children);
    children.forEach((child) => {
      child.innerHTML = parseInt(child.innerHTML) + n;
    })
  })
}
