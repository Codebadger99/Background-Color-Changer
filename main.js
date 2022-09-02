const body = document.querySelector('body')
const Button = document.querySelector('.btn');
const colors = ['red','blue','purple','yellowgreen','cyan','brown'];

body.style.backgroundColor = 'violet'

//the button changes color
Button.addEventListener('click', changeBackground)

function changeBackground(){
    const colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
}