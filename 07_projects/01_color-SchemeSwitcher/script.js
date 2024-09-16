const buttons = document.querySelectorAll('.button') //this will return node list
const body = document.querySelector('body')

buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    // if (e.target.id === 'blue') {
    //     body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'purple') {
    //     body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'green') {
    //     body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //     body.style.backgroundColor = e.target.id;
    // }

        const bgColor = window.getComputedStyle(e.target).backgroundColor;
        body.style.backgroundColor = bgColor;
    });
});
