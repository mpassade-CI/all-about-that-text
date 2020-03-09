const biggify = function(num) {
  return num + 9000;
}

const nasafy = function(num) {
  const countdown = [];
  let current = num;

  while (current >= 1) {
    countdown.push(current);
    current--;
  }

  countdown.push('Blast off!');

  return countdown;
}

const reversify = function(str) {
  return str.split('').reverse().join('');
}

const reversify2 = function(str){
  const x = str.split(' ')
  const y = []
  for (let i=x.length-1; i>=0; i--){
    y.push(x[i])
  }
  return y.join(' ')
}

const titleify = function(str) {
  let titleCasedWords = [];
  for (const word of str.split(' ')) {
    titleCasedWords.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }

  return titleCasedWords.join(' ');
}

const crazify = function(str) {
  let crazified = '';
  let crazyI = 0;
  for (const character of str) {
    if (character === ' ') {
      crazified += ' ';
    } else {
      crazified += crazyI % 2 === 1
        ? character.toUpperCase()
        : character.toLowerCase();
      crazyI++;
    }
  }

  return crazified;
}

if (typeof module === 'undefined') {
  module = {};
}

module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}
