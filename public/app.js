var buttons = document.querySelectorAll("button");
for (button in buttons) {
    buttons[button].onclick = function chColor() {
        console.log('test')
        var yellowButton = document.querySelectorAll(".yellow")[0];
        if (this.className == "green") {
            if (yellowButton) yellowButton.className = "green";
            this.className = "yellow";
        }
    }
}


