const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte parini.'

const searchString = 'pari';
//const doesExist = lyrics.includes('pari');
//const doseExist = lyrics.includes('Pari');
//const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
//const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase())
//console.log(doesExist);
//console.log(doesExistOneLine);

// IndexOf
console/console.log(lyrics.indexOf('pari'));
console/console.log(lyrics.indexOf('Tumi'));

if(lyrics.indexOf('sada') !== -1) {
    console.log('exist inside the string')
}
else{
    console.log('cannot find it')
}