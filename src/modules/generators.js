const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateUpperCase = () => String.fromCharCode(rand(65, 91));
const generateLowerCase = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));
const symbols = ',.;:~^!@#$%&*+=_-<>(){}[]';
const generateSymbol = () => symbols[rand(0, symbols.length)];

export default function generatePassword(quantity, upperCase, lowerCase, number, symbol) {
  const passwordArray = [];
  quantity = Number(quantity);

  for (let i = 0; i < quantity; i++) {
    upperCase && passwordArray.push(generateUpperCase());
    lowerCase && passwordArray.push(generateLowerCase());
    number && passwordArray.push(generateNumber());
    symbol && passwordArray.push(generateSymbol());
  }

  return passwordArray.join('').slice(0, quantity);
}