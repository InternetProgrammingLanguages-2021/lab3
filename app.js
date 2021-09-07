const offset = "&nbsp;".repeat(8)
const newline = "<br/>"

function displayElement(elem, depth=0) {
    if (!elem.tagName) return ""
    console.log(JSON.stringify({tag: elem.tagName, depth}))
    const res = Array.from(elem.childNodes).reduce((acc, value) => acc + displayElement(value, depth + 1), "")
    return `${offset.repeat(depth)}${elem.tagName}${newline}${res}`
}

function displayTree() {
    const node = document.getElementById("output") 
    node.innerHTML = displayElement(document.body)
}

document.addEventListener("DOMContentLoaded", displayTree)
