var buttons = document.querySelectorAll("button");
for (button in buttons) {
    buttons[button].onclick = function () {
        console.log('test')
        buttons.forEach(function (btn) {
            btn.classList.remove('highlight');
        })
        this.classList.add('highlight');
    }
}

// let buttons = document.getElementsByTagName('button');
// for (button in buttons) {
//     buttons[button].onclick = function () {
//         console.log('test')
//         var yellowButton = document.querySelectorAll(".yellow")[0];
//         if (this.className == "green") {
//             if (yellowButton) yellowButton.className = "green";
//             this.className = "yellow";
//         }
//     }
// }


// var buttons = document.querySelectorAll(".green");
// for (button in buttons) {
//     buttons[button].onclick = function () {
//         console.log('test')
//         var yellowButton = document.querySelectorAll(".yellow")[0];
//         if (this.className == "green") {
//             if (yellowButton) yellowButton.className = "green";
//             this.className = "yellow";
//         }
//     }
// }

//  var buttons = document.querySelectorAll("button");

//  for (button in buttons) {
//      buttons[button].onclick = function () {
//          console.log('test')
//          buttons.forEach(function (btn) {
//              btn.classList.remove('highlight');
//          })
//          this.classList.add('highlight');
//      }


//  }