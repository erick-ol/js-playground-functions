// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 && param2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(" ");
}

// Desafio 4
function concatName(arrayStr) {
  // seu código aqui
  let primeiroItem = arrayStr[0];
  let ultimoItem = arrayStr[arrayStr.length -1];
  return `${ultimoItem}, ${primeiroItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsPoints = wins * 3;
  let totalPoints = winsPoints + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(num) {
  // seu código aqui
  let maiorNum = num[0];
  let quantMaiorNum = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] > maiorNum) {
      maiorNum = num[i];
    }
  }

  for (let i = 0; i < num.length; i++) {
    if (num[i] == maiorNum) {
      quantMaiorNum++;
    }
  }

  return quantMaiorNum;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
