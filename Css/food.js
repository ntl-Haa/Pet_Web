// var indicator = document.querySelector(".nav-indicator");
// var items = document.querySelectorAll(".nav-item");

// function handleIndicator(el) {
//   items.forEach(function (item) {
//     item.classList.remove("is-active");
//     item.removeAttribute("style");
//   });
//   indicator.style.width = "".concat(el.offsetWidth, "px");
//   indicator.style.left = "".concat(el.offsetLeft, "px");
//   indicator.style.backgroundColor = el.getAttribute("active-color");
//   el.classList.add("is-active");
//   el.style.color = el.getAttribute("active-color");
// }

// items.forEach(function (item, index) {
//   item.addEventListener("click", function (e) {
//     handleIndicator(e.target);
//   });
//   item.classList.contains("is-active") && handleIndicator(item);
// });

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabActive = $('.tab-item.active')
const line = $('.tabs .line')

line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

tabs.forEach((tab,index) => {
  const pane = panes[index]
  tab.onclick = function(){
    $('.tab-item.active').classList.remove('active')
    $('.tab-pane.active').classList.remove('active')

    line.style.left = this.offsetLeft + 'px'
    line.style.width = this.offsetWidth + 'px'

    this.classList.add('active')
    pane.classList.add('active')
  }
});