const init = function () {
const firstElement= document.querySelector('div')
  const element = document.createElement("h1");
  element.className = "welcome";
  element.innerHTML = "Welcome"
  firstElement.prepend(element)
};

init()
