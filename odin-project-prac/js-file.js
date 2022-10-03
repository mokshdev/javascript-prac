const div = document.querySelector('body')


const p = document.createElement('p')
const h3 = document.createElement('h3')
const div2 = document.createElement('div')



div.append(p,h3,div2)

p.innerText = 'Hey,I am red'
p.style.color = 'red'

h3.innerText = ' i am blue h3'
h3.style.color = 'blue'


div2.style.border = 'solid'
div2.style.backgroundColor = 'pink'

const divH1 = document.createElement('h1')
const divP = document.createElement('p')


divH1.innerText = 'i am in a div'
divP.innerText = 'ME,TOO!!'

div2.append(divH1,divP)

console.log(div);