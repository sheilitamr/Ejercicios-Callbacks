const multiply = numbers => {
  numbers.forEach((value, index) => {
    console.log(value * index);
  });
};

/* multiply([1, 2, 3, 4, 5]); */

const divide = numbers => {
  const numbersDivided = numbers.map((value, index) => {
    return value / (index + 2);
  });
  console.log(numbersDivided);
};

/* divide([1, 2, 3, 4, 5]); */

const wordsToUpperCase = words => {
  const wordUpper = words.map(value => {
    return value.toUpperCase();
  });
  console.log(wordUpper);
};
/* wordsToUpperCase(['hola', 'sheila', 'casa', 'perro']); */

const startWithLetter = (words, letter) => {
  const existsWords = words.some(value => {
    return value.toLowerCase().startsWith(letter.toLowerCase());
  });
  if (!existsWords) {
    console.log(`No hay palabras que empiecen por ${letter}`);
    return;
  }

  const wordsWithLetter = words.filter(value => {
    return value.toLowerCase().startsWith(letter.toLowerCase());
  });
  console.log(`Las palabras que empiezan por ${letter} son ${wordsWithLetter}`);
};

/* startWithLetter(['hola', 'sheila', 'pera', 'perro'], 'S'); */

const sumArray = numbers => {
  let result = 0;
  numbers.forEach(value => {
    result += value;
  });
  console.log(result);
};
/* sumArray([1, 2, 3, 4, 5]); */

const squareCube = numbers => {
  numbers.forEach(value => {
    const square = Math.pow(value, 2);
    const cube = Math.pow(value, 3);
    console.log(
      `El número es ${value}. El cuadrado es ${square}. El cubo es ${cube}`
    );
  });
};
/* squareCube([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); */

const wordUpperCase = word => {
  const wordArray = word.split('');
  let newWord = '';
  wordArray.forEach(letter => {
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      newWord += letter.toUpperCase();
    } else {
      newWord += letter;
    }
  });
  console.log(newWord);
};

/* wordUpperCase('hola'); */

const wordInverse = word => {
  const wordArray = word.split('');
  let newWord = wordArray.reverse().join('');
  console.log(newWord);
};
/* wordInverse('Hola'); */

const evenOdd = numbers => {
  const even = [];
  const odd = [];
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  numbers.forEach(number => {
    let result = number * randomNumber;

    if (result % 2 === 0) {
      even.push(result);
    } else {
      odd.push(result);
    }
  });
  /*   console.log(numbers);
  console.log(even);
  console.log(odd); */
};
evenOdd([1, 2, 3, 4, 5, 6]);

const firstLetterLastLetter = words => {
  const letters = [];
  words.forEach(value => {
    letters.push(value.charAt(0).toUpperCase());
    letters.push(value.charAt(value.length - 1).toUpperCase());
  });
  console.log(letters);
};

/* firstLetterLastLetter(['sheila', 'casa', 'gato', 'perro', 'adios']); */

const higherFive = numbers => {
  const result = numbers.some(number => {
    return number > 5;
  });
  if (result) {
    console.log('Hay números mayores de 5');
  } else console.log('No hay números mayores de 5');
};
higherFive([1, 2, 3, 4, 5, 6, 7, 8, 5]);

const lengthWords = (words, num) => {
  let newArray = words.filter(number => {
    return number.length === num;
  });
  console.log(newArray);
};

/* lengthWords(['hola', 'adios', 'gato', 'perro', 'casa'], 4) */ const namesStartWithA =
  names => {
    let nameStart = names.filter(name => {
      return name.startsWith('A');
    });
    console.log(nameStart);
  };

/* namesStartWithA(['Ana', 'Carlos', 'Pedro', 'Antonio']); */

const ageUnderThirty = data => {
  const users = data.filter(user => {
    return user.age < 30;
  });
  console.log(users);
};
ageUnderThirty([
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
]);

const evenNumbers = numbers => {
  const even = numbers.every(num => {
    return num % 2 === 0;
  });
  if (even) {
    console.log('Todos son pares');
  } else {
    console.log('Hay algún impar');
  }
  console.log(even);
};

evenNumbers([2, 4, 6, 8, 10]);

const sortMajorMinor = numbers => {
  const result = numbers.sort((a, b) => {
    return b - a;
  });
  console.log(result);
};
/* sortMajorMinor([1, 3, 5, 6, 2]); */

const sortMinorMajor = numbers => {
  const result = numbers.sort((a, b) => {
    return a - b;
  });
  console.log(result);
};
sortMinorMajor([1, 3, 5, 6, 2]);

const orderAlphabetically = words => {
  const result = words.sort((a, b) => {
    //ordena alfabeticamente.
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;

    //ordena de menor a mayor (para ordenarlo coge el número ascii de las letras y las ordena)
    /* if (a > b) return -1;
    if (a < b) return 1;
    return 0; */
  });
  console.log(result);
};
orderAlphabetically(['Caliente', 'Abrazo', 'Blanco', 'Amigo']);

const orderAlphabeticallyInverse = words => {
  const result = words.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });
  console.log(result);
};
orderAlphabeticallyInverse(['Caliente', 'Abrazo', 'Blanco', 'Amigo']);
