const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const search_btn = document.querySelector('#search')
const paragraph = document.querySelector('#text')

// define more constants and variables here
let showAuthor = false
let text = ""

btn_toggle.onclick = () => {
  if(showAuthor) {
    btn_toggle.innerHTML = "Show Calculation"
    author.style.display = "block"
    calculation.style.display = "none"
  } else {
    author.style.display = "none"
    calculation.style.display = "block"
    calculation.innerHTML = 630610734 + parseInt(length.value);
    btn_toggle.innerHTML = "Show Author"
    // author.parentNode.removeChild(author)
  }
  showAuthor = !showAuthor
}

search_btn.onclick = () => {
    text = paragraph.innerHTML
    const l = length.value
    const colorVal = color.value
    paragraph.innerHTML = ""

    const words = text.split(" ");
    words.forEach((word) => {
      const span = document.createElement("span")
      span.innerHTML = word + " "
      if(word.length >= l) {
        span.style.color = colorVal
      }
      paragraph.appendChild(span)
    })
}
// more codes for Search and Reset buttons here
