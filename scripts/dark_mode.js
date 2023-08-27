function onClick() {
    let element = document.body;
    element.classList.toggle("dark");
}

var buttons = document.getElementsByTagName('button')

for (var i in buttons) {
    buttons[i].onclick = onClick
} 