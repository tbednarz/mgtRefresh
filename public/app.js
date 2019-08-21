const chColor = () => {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        let yellowButton = document.querySelectorAll(".yellow")
        if(this.className == 'green'){
            if(yellowButton) yellowButton.className =="green";
            this.className ="yellow"
            console.log('changed color')
        }
    });

}