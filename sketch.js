'use strict'
let words = [{
    quote: 'Great people are those who make others feel that they, too, can become great. - Mark Twain'
  },
  {
    quote: 'You are not a drop in the ocean. You are the entire ocean in a drop. - Rumi'
  },
  {
    quote: 'There are far, far better things ahead than any we leave behind. - C.S. Lewis'
  },
  {
    quote: "It's no use going back to yesterday, because I was a different person then. - Alice in Wonderland, Lewis Carrol"
  },
  {
    quote: "When there's a smile in your heart, there's no better time to start. Peter Pan, J.M. Barrie "
  },
  {
    quote: 'You shall be a crown of beauty in the hand of the Lord. - Isaiah 62:3'
  },
  {
    quote: 'I feel that there is nothing truly more artistic than to love people. - Vincent van Gogh'
  },
  {
    quote: 'Be a light for all to see. - Matthew 5:16'
  },
  {
    quote: 'For God has not given us spirit of fear, but of power & of love & of a sound mind. - 2 Timothy 1:7'
  },
  {
    quote: 'Kind words are like honey, sweet to the soul. - Proverbs 16:24'
  },
  {
    quote: 'At the end of the day we can endure much more than we think we can. - Frida Kahlo'
  },
  {
    quote: "It's never too late to be who you might have been. - George Eliot"
  },
  {
    quote: 'The power of imagination makes us infinite. - John Muir'
  }
];

let randomIndex;
let button;
let animating = false;
let quote = 'The power of imagination makes us infinite. - John Muir';

function setup() {
  //bg = loadImage('assets/goodthings.jpg');

  var cnv = createCanvas(1100, 250);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  //createCanvas(1100, 250);
  frameRate(8);

  background(242, 225, 215);

  button = createButton("me");
  button.position(x + 456, y + 66);
  button.mousePressed(buttonPressed);

}


function draw() {

  background(242, 225, 215);

 if (animating) {

   let shuffled = shuffle(['~', ' ', 'r', 'e', 'a', 'd', 'y', ',', ' ', 's', 'e', 't', ',', ' ', 'Q', 'U', 'O', 'T', 'E', '!', ' ', '~']);

   let quoteSplit = quote.split(''); // empty string separator
   let quoteShuffledArray = shuffle(quoteSplit);

   let quoteShuffled = '';

   for (let i = 0; i < quoteShuffledArray.length; i++) {
     quoteShuffled = quoteShuffled + quoteShuffledArray[i];
   }
   text(quoteShuffled, 30, 150);

 } else {
   text(quote, 30, 150);
 }

 textSize(30);
 textFont('Courier');
 textStyle(NORMAL);
 text("~ ready, set, QUOTE! ~", 350, 50);



 textSize(18);
 fill(37, 38, 77);
 text("(click    for a better mood)", 385, 80);


}
//new stuff here
function randomizer() {
  animating = false;
  textSize(15);
  

  if (words[0]) {

    randomIndex = int(random(words.length));
    quote = `${words[randomIndex].quote}`;

    words.splice(randomIndex, 1);

  }

}



function buttonPressed() {

  // if(words[0]){
  //
  // background(242, 225, 215);
  //
  // randomIndex = int(random(words.length));

  // textSize(15);
  //
  // textStyle(BOLD);

  //background(242, 225, 215);
  animating = true;
  setTimeout(randomizer, 1000);

  //   text(words[randomIndex].quote, 70, 150);
  //
  //   words.splice(randomIndex, 1);
  // } else {

  // }
}
