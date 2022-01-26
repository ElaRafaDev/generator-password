import generatePassword from "./generators";

const generatedPassword = document.querySelector('.password');
const quantityChar = document.querySelector('.num-char');
const chkUpperCase = document.querySelector('.chk-upperCase');
const chkLowerCase = document.querySelector('.chk-lowerCase');
const chkNumber = document.querySelector('.chk-number');
const chkSymbol = document.querySelector('.chk-symbol');
const btnGeneratePassword = document.querySelector('.generate-password');

export default () => {
  btnGeneratePassword.addEventListener('click', () => {
    generatedPassword.innerHTML = generate();
  });
};

function generate() {
  const password = generatePassword(
    quantityChar.value,
    chkUpperCase.checked,
    chkLowerCase.checked,
    chkNumber.checked,
    chkSymbol.checked
  );

  if (quantityChar.value > 1 && quantityChar.value <= 30) {
    return password || 'Nenhuma opção foi selecionada';
  } else {
    return 'Quantidade inválida';
  }
}