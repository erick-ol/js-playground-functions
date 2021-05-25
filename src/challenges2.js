// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  if (arrayTech.length != 0) {
    let ordArrayTech = arrayTech.sort();
    let arrayObjectTech = [];

    for (let tecnologia of ordArrayTech) {
      arrayObjectTech.push({
        tech: tecnologia,
        name: name
      });
    }

    return arrayObjectTech;
  } else {
    return "Vazio!";
  }

}

// Desafio 11
function generatePhoneNumber(number) {
  // seu código aqui
  
  if (number.length != 11) {
    return "Array com tamanho incorreto.";
  } else {
    let quantNum = []
    let quantNum3 = false;
    let foraIntervalo = false;  // Verificar se algum número está fora do intervalo 0 - 9

    // Criando array quantNum inicializado em 0 para cada item no tamanho do array informado
    for (let i = 0; i < number.length; i++) {
      quantNum[i] = 0;
    }

    for (let i = 0; i < number.length; i++) {

      // Verificar número fora do intervalo 0 - 9
      if((number[i] < 0) || (number[i] > 9)) {
        foraIntervalo = true;
      }

      // Comparação entre 
      for (let j = 0; j < number.length; j++) {
        if (number[i] == number[j]) {
          quantNum[i] += 1;
        }
      }
    }

    // Verificação se um número repete mais de 3x 
    for (let i = 0; i < number.length; i++) {
      if (quantNum[i] >= 3) {
        quantNum3 = true;
      }
    }

    if (foraIntervalo || quantNum3) {
      return "não é possível gerar um número de telefone com esses valores";
    } else {
      number = number.join('');
      let ddd = number.slice(0,2);
      let parte1 = number.slice(2,7);
      let parte2  = number.slice(7,11);
      return `(${ddd}) ${parte1}-${parte2}`;
    }

  }
  
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
