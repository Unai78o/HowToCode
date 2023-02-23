const quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        person: "Oscar Wilde"
    },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        person: "Marilyn Monroe"
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        person: "Albert Einstein"
    },
    {
        quote: "“So many books, so little time.”",
        person: "Frank Zappa"
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        person: "Marcus Tullius Cicero"
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        person: "Mahatma Gandhi"
    },
    {
        quote: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        person: "Maya Angelou"
    },
    {
        quote: "“Without music, life would be a mistake.”",
        person: "Friedrich Nietzsche, Twilight of the Idols"
    }
]

const btn = document.getElementById("new-quote")
const quote = document.querySelector(".quote")
const person = document.querySelector(".person")

btn.addEventListener("click", () => {
    function createRandNum() {
        const randomNum = Math.floor(Math.random() * quotes.length)
        return randomNum
    }
    
    quote.textContent = quotes[createRandNum()].quote
    person.textContent = quotes[createRandNum()].person

    if (quote.innerHTML == quotes[createRandNum()].quote){
        quote.textContent = quotes[createRandNum()].quote
    }

})