var letters = [];
var textLetters = 'Backend As A Service';
for (var i=0; i<textLetters.split(' ').length;i++) {
 letters [i] = textLetters.split(' ')[i][0];
}
console.log (letters)
var lettersJoin = letters.join('')
console.log (lettersJoin)