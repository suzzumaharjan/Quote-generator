const quotes = {
    "science": [
        "Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan",
        "The important thing is to never stop questioning. - Albert Einstein",
        "Somewhere, something incredible is waiting to be known. - Carl Sagan",
        "Research is what I'm doing when I don't know what I'm doing. - Wernher von Braun",
        "The good thing about science is that it's true whether or not you believe in it. - Neil deGrasse Tyson",
        "Imagination is more important than knowledge. - Albert Einstein",
        "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world. - Louis Pasteur"
    ],
    "life": [
        "Life is what happens when you're busy making other plans. - John Lennon",
        "The purpose of our lives is to be happy. - Dalai Lama",
        "Get busy living or get busy dying. - Stephen King",
        "Life is really simple, but we insist on making it complicated. - Confucius",
        "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha"
    ],
    "friendship": [
        "A friend is someone who knows all about you and still loves you. - Elbert Hubbard",
        "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.' - C.S. Lewis",
        "True friendship comes when the silence between two people is comfortable. - David Tyson",
        "A real friend is one who walks in when the rest of the world walks out. - Walter Winchell",
        "Friendship is the only cement that will ever hold the world together. - Woodrow Wilson",
        "Friends are the family you choose. - Jess C. Scott"
    ]
};

let fontSize = 16;
let currentCategory = 'science';
let currentIndex = 0;
function updateCategory()
{
    currentCategory=document.getElementById('category').value;
    displayQuotes();
}
function IncreaseFont() {
    fontSize += 1;
    document.getElementById('quote').style.fontSize = fontSize + "px";

}
function DecreaseFont() {
    fontSize -= 1;
    document.getElementById('quote').style.fontSize = fontSize + "px";
}
function displayQuotes() {
    const quotecontent = quotes[currentCategory][currentIndex];
    document.getElementById('quote').innerHTML = quotecontent;

}
function previousQuote() {
    if (currentIndex != 0) {
        currentIndex -= 1;
        displayQuotes();
    }

}
function nextQuote() {
    console.log(quotes[currentCategory].length);
    if (quotes[currentCategory].length > currentIndex) {

        currentIndex += 1;
        displayQuotes();
    }
}

const getRandomInteger = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
  
    return Math.floor(Math.random() * (max - min)) + min
  }
  function randomQuote()
  {
    const max=quotes[currentCategory].length;
     currentIndex=getRandomInteger(0,max)
     displayQuotes();
  }
  let click=1;
    document.querySelector('#darkModeToggle').addEventListener('change',()=>{
        console.log("hilow");
        document.querySelector('.container').classList.toggle('dark-mode');
        const slider = document.querySelector('.slider');
        slider.classList.toggle('light-mode')

// Change the background color of the ::before pseudo-element
if(click==0){
    slider.style.setProperty('--slider-bg-color', 'white');
    click=1;
}
else{
    slider.style.setProperty('--slider-bg-color', 'black');
    click=0;
}


        })
document.addEventListener("DOMContentLoaded", function () {
    displayQuotes()
    
});
