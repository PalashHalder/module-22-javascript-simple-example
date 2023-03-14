// source: 
//        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte parini.'

//To split every character
const chars = lyrics.split('');
//console.log(chars);

//To split every word
const parts = lyrics.split(' ');
//console.log(parts);

// To split sentence by sentence
const sentences = lyrics.split('.');
//console.log(sentences);

const partial = lyrics.slice(5, 8);
//console.log(partial);

const partial2 = lyrics.substring(5, 8);
console.log(partial2);

//String.prototype.at()
//String.concat();

const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
  ' Bosonto kale tomai bolte parini',
  'Tumi bondhu kala pakhi ami jeno ki',
  ' Bosonto kale tomai bolte parini',
];

const newSong = lines.join('. ')
console.log(newSong);





