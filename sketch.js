let bg;
let button;
let words = ['Great people are those who make others feel that they, too, can become great. - Mark Twain',
'You are not a drop in the ocean. You are the entire ocean in a drop. - Rumi',
'There are far, far better things ahead than any we leave behind. - C.S. Lewis',
"It's no use going back to yesterday, because I was a different person then. - Alice in Wonderland, Lewis Carrol",
"When there's a smile in your heart, there's no better time to start. Peter Pan, J.M. Barrie ",
'You shall be a crown of beauty in the hand of the Lord. - Isaiah 62:3',
'I feel that there is nothing truly more artistic than to love people. - Vincent van Gogh',
'Be a light for all to see. - Matthew 5:16',
'For God has not given us spirit of fear, but of power & of love & of a sound mind. - 2 Timothy 1:7',
'Kind words are like honey, sweet to the soul. - Proverbs 16:24',
'At the end of the day we can endure much more than we think we can. - Frida Kahlo',
"It's never too late to be who you might have been. - George Eliot",
'The power of imagination makes us infinite. - John Muir'];
let word = random(words);

function setup() {
  bg = loadImage('assets/goodthings.jpg');
  createCanvas(1440, 768);

  // textSize(30);
  // textFont('Courier')
  // text('Happy Quote Generator', 50, 50);

  // button = createButton("click for quote");
  // button.mousePressed(buttonPressed);


}

function draw() {
  background(bg);
  textSize(30);
  textFont('Courier');
  text('Happy Quote Generator!', 550, 50);

  //button.Position(x, y);
  // button.Position();
  button = createButton("Click for Quote");
  button.mousePressed(buttonPressed);

  text(word, 650, 50);



}
