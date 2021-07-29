const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
let showAuthor = false


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


// more codes for Search and Reset buttons here
