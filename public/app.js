var buttons = document.querySelectorAll("button");
for (button in buttons) {
    buttons[button].onclick = chColor(buttons)
}

function chColor() {
    var yellowButton = document.querySelectorAll(".yellow");
    if (this.className == "green") {
        console.log('test')
        if (yellowButton) yellowButton.className = "green";
        this.className = "yellow";
    }
}