// Variables 


let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{
    quote : '"The best way to find yourself is to loose yourself in service of others"',
    person: 'Mahatma Gandhi'
},{
    quote:'"Misers are no fun to live with, but they make great ancestors."',
    person: 'Tom Snyder'
},{
    quote : '"The statistics on sanity are that one out of every four Americans is suffering from some form of mental illness. Think of your three best friends. If they’re okay, then it’s you."',
    person: 'Rita Mae Brown'
},{
    quote: '"If you want to know what God thinks of money, just look at the people he gave it to."',
    person: 'Dorothy Parker'
},{
    quote: '"Doing nothing is very hard to do. You never know when you’re finished."',
    person: 'Leslie Nielsen'
}]



btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()* quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})