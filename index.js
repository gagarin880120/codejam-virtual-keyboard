const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const textarea = document.createElement('textarea');

const container = document.createElement('div');
container.className = 'keyboard-container';

const row1 = document.createElement('div');
row1.className = 'row';
const row1Array = [];

const backquoteBt = document.createElement('div');
backquoteBt.className = 'letter';
backquoteBt.eng = '`';
backquoteBt.cyr = 'ё';
backquoteBt.code = 192;

row1Array.push(backquoteBt);

const digit1Btn = document.createElement('div');
digit1Btn.className = 'number';
digit1Btn.def = '1';
digit1Btn.eng = '!';
digit1Btn.cyr = '!';
digit1Btn.code = 49;

row1Array.push(digit1Btn);

const digit2Btn = document.createElement('div');
digit2Btn.className = 'number';
digit2Btn.def = '2';
digit2Btn.eng = '@';
digit2Btn.cyr = '"';
digit2Btn.code = 50;

row1Array.push(digit2Btn);

const digit3Btn = document.createElement('div');
digit3Btn.className = 'number';
digit3Btn.def = '3';
digit3Btn.eng = '#';
digit3Btn.cyr = '№';
digit3Btn.code = 51;

row1Array.push(digit3Btn);

const digit4Btn = document.createElement('div');
digit4Btn.className = 'number';
digit4Btn.def = '4';
digit4Btn.eng = '$';
digit4Btn.cyr = ';';
digit4Btn.code = 52;

row1Array.push(digit4Btn);

const digit5Btn = document.createElement('div');
digit5Btn.className = 'number';
digit5Btn.def = '5';
digit5Btn.eng = '%';
digit5Btn.cyr = '%';
digit5Btn.code = 53;

row1Array.push(digit5Btn);

const digit6Btn = document.createElement('div');
digit6Btn.className = 'number';
digit6Btn.def = '6';
digit6Btn.eng = '^';
digit6Btn.cyr = ':';
digit6Btn.code = 54;

row1Array.push(digit6Btn);

const digit7Btn = document.createElement('div');
digit7Btn.className = 'number';
digit7Btn.def = '7';
digit7Btn.eng = '&';
digit7Btn.cyr = '?';
digit7Btn.code = 55;

row1Array.push(digit7Btn);

const digit8Btn = document.createElement('div');
digit8Btn.className = 'number';
digit8Btn.def = '8';
digit8Btn.eng = '*';
digit8Btn.cyr = '*';
digit8Btn.code = 56;

row1Array.push(digit8Btn);

const digit9Btn = document.createElement('div');
digit9Btn.className = 'number';
digit9Btn.def = '9';
digit9Btn.eng = '(';
digit9Btn.cyr = '(';
digit9Btn.code = 57;

row1Array.push(digit9Btn);

const digit0Btn = document.createElement('div');
digit0Btn.className = 'number';
digit0Btn.def = '0';
digit0Btn.eng = ')';
digit0Btn.cyr = ')';
digit0Btn.code = 58;

row1Array.push(digit0Btn);

const minusBtn = document.createElement('div');
minusBtn.className = 'number';
minusBtn.def = '-';
minusBtn.eng = '_';
minusBtn.cyr = '_';
minusBtn.code = 189;

row1Array.push(minusBtn);

const equalBtn = document.createElement('div');
equalBtn.className = 'number';
equalBtn.def = '=';
equalBtn.eng = '+';
equalBtn.cyr = '+';
equalBtn.code = 187;

row1Array.push(equalBtn);

const backSpaceBtn = document.createElement('div');
backSpaceBtn.className = 'backSpace';
backSpaceBtn.innerText = 'Backspace';
backSpaceBtn.code = 8;

row1Array.push(backSpaceBtn);

for (let i = 0; i < row1Array.length; i += 1) {
  row1.append(row1Array[i]);
}

container.append(row1);

const row2 = document.createElement('div');
row2.className = 'row';
const row2Array = [];

const tabBtn = document.createElement('div');
tabBtn.classList = 'tab';
tabBtn.innerText = 'Tab';
tabBtn.code = 9;

row2Array.push(tabBtn);

const letterQBtn = document.createElement('div');
letterQBtn.className = 'letter';
letterQBtn.eng = 'q';
letterQBtn.cyr = 'й';
letterQBtn.code = 81;

row2Array.push(letterQBtn);

const letterWBtn = document.createElement('div');
letterWBtn.className = 'letter';
letterWBtn.eng = 'w';
letterWBtn.cyr = 'ц';
letterWBtn.code = 87;

row2Array.push(letterWBtn);

const letterEBtn = document.createElement('div');
letterEBtn.className = 'letter';
letterEBtn.eng = 'e';
letterEBtn.cyr = 'у';
letterEBtn.code = 69;

row2Array.push(letterEBtn);

const letterRBtn = document.createElement('div');
letterRBtn.className = 'letter';
letterRBtn.eng = 'r';
letterRBtn.cyr = 'к';
letterRBtn.code = 82;

row2Array.push(letterRBtn);

const letterTBtn = document.createElement('div');
letterTBtn.className = 'letter';
letterTBtn.eng = 't';
letterTBtn.cyr = 'е';
letterTBtn.code = 84;

row2Array.push(letterTBtn);

const letterYBtn = document.createElement('div');
letterYBtn.className = 'letter';
letterYBtn.eng = 'y';
letterYBtn.cyr = 'н';
letterYBtn.code = 89;

row2Array.push(letterYBtn);

const letterUBtn = document.createElement('div');
letterUBtn.className = 'letter';
letterUBtn.eng = 'u';
letterUBtn.cyr = 'г';
letterUBtn.code = 85;

row2Array.push(letterUBtn);

const letterIBtn = document.createElement('div');
letterIBtn.className = 'letter';
letterIBtn.eng = 'i';
letterIBtn.cyr = 'ш';
letterIBtn.code = 73;

row2Array.push(letterIBtn);

const letterOBtn = document.createElement('div');
letterOBtn.className = 'letter';
letterOBtn.eng = 'o';
letterOBtn.cyr = 'щ';
letterOBtn.code = 79;

row2Array.push(letterOBtn);

const letterPBtn = document.createElement('div');
letterPBtn.className = 'letter';
letterPBtn.eng = 'p';
letterPBtn.cyr = 'з';
letterPBtn.code = 80;

row2Array.push(letterPBtn);

const letterBracketLeftBtn = document.createElement('div');
letterBracketLeftBtn.className = 'letter';
letterBracketLeftBtn.eng = '[';
letterBracketLeftBtn.cyr = 'х';
letterBracketLeftBtn.code = 219;

row2Array.push(letterBracketLeftBtn);

const letterBracketRightBtn = document.createElement('div');
letterBracketRightBtn.className = 'letter';
letterBracketRightBtn.eng = ']';
letterBracketRightBtn.cyr = 'ъ';
letterBracketRightBtn.code = 221;

row2Array.push(letterBracketRightBtn);

const backSlashBtn = document.createElement('div');
backSlashBtn.className = 'backSlash';
backSlashBtn.innerText = '\\';
backSlashBtn.code = 220;

row2Array.push(backSlashBtn);

for (let i = 0; i < row2Array.length; i += 1) {
  row2.append(row2Array[i]);
}

container.append(row2);

const row3 = document.createElement('div');
row3.className = 'row';
const row3Array = [];

const capsLockBtn = document.createElement('div');
capsLockBtn.classList = 'capsLock';
capsLockBtn.innerText = 'Caps Lock';
capsLockBtn.code = 20;

row3Array.push(capsLockBtn);

const letterABtn = document.createElement('div');
letterABtn.className = 'letter';
letterABtn.eng = 'a';
letterABtn.cyr = 'ф';
letterABtn.code = 65;

row3Array.push(letterABtn);

const letterSBtn = document.createElement('div');
letterSBtn.className = 'letter';
letterSBtn.eng = 's';
letterSBtn.cyr = 'ы';
letterSBtn.code = 83;

row3Array.push(letterSBtn);

const letterDBtn = document.createElement('div');
letterDBtn.className = 'letter';
letterDBtn.eng = 'd';
letterDBtn.cyr = 'в';
letterDBtn.code = 68;

row3Array.push(letterDBtn);

const letterFBtn = document.createElement('div');
letterFBtn.className = 'letter';
letterFBtn.eng = 'f';
letterFBtn.cyr = 'а';
letterFBtn.code = 70;

row3Array.push(letterFBtn);

const letterGBtn = document.createElement('div');
letterGBtn.className = 'letter';
letterGBtn.eng = 'g';
letterGBtn.cyr = 'п';
letterGBtn.code = 71;

row3Array.push(letterGBtn);

const letterHBtn = document.createElement('div');
letterHBtn.className = 'letter';
letterHBtn.eng = 'h';
letterHBtn.cyr = 'р';
letterHBtn.code = 72;

row3Array.push(letterHBtn);

const letterJBtn = document.createElement('div');
letterJBtn.className = 'letter';
letterJBtn.eng = 'j';
letterJBtn.cyr = 'о';
letterJBtn.code = 74;

row3Array.push(letterJBtn);

const letterKBtn = document.createElement('div');
letterKBtn.className = 'letter';
letterKBtn.eng = 'k';
letterKBtn.cyr = 'л';
letterKBtn.code = 75;

row3Array.push(letterKBtn);

const letterLBtn = document.createElement('div');
letterLBtn.className = 'letter';
letterLBtn.eng = 'l';
letterLBtn.cyr = 'д';
letterLBtn.code = 76;

row3Array.push(letterLBtn);

const semicolonBtn = document.createElement('div');
semicolonBtn.className = 'letter';
semicolonBtn.eng = ';';
semicolonBtn.cyr = 'ж';
semicolonBtn.code = 186;

row3Array.push(semicolonBtn);

const quoteBtn = document.createElement('div');
quoteBtn.className = 'letter';
quoteBtn.eng = '\'';
quoteBtn.cyr = 'э';
quoteBtn.code = 222;

row3Array.push(quoteBtn);

const enterBtn = document.createElement('div');
enterBtn.classList = 'enter';
enterBtn.innerText = 'Enter';
enterBtn.code = 13;

row3Array.push(enterBtn);

for (let i = 0; i < row3Array.length; i += 1) {
  row3.append(row3Array[i]);
}

container.append(row3);

const row4 = document.createElement('div');
row4.className = 'row';
const row4Array = [];

const shiftLeftBtn = document.createElement('div');
shiftLeftBtn.classList = 'shiftLeft';
shiftLeftBtn.innerText = 'Shift';
shiftLeftBtn.code = 16;

row4Array.push(shiftLeftBtn);

const letterZBtn = document.createElement('div');
letterZBtn.className = 'letter';
letterZBtn.eng = 'z';
letterZBtn.cyr = 'я';
letterZBtn.code = 90;

row4Array.push(letterZBtn);

const letterXBtn = document.createElement('div');
letterXBtn.className = 'letter';
letterXBtn.eng = 'x';
letterXBtn.cyr = 'ч';
letterXBtn.code = 88;

row4Array.push(letterXBtn);

const letterCBtn = document.createElement('div');
letterCBtn.className = 'letter';
letterCBtn.eng = 'c';
letterCBtn.cyr = 'с';
letterCBtn.code = 67;

row4Array.push(letterCBtn);

const letterVBtn = document.createElement('div');
letterVBtn.className = 'letter';
letterVBtn.eng = 'v';
letterVBtn.cyr = 'м';
letterVBtn.code = 86;

row4Array.push(letterVBtn);

const letterBBtn = document.createElement('div');
letterBBtn.className = 'letter';
letterBBtn.eng = 'b';
letterBBtn.cyr = 'и';
letterBBtn.code = 66;

row4Array.push(letterBBtn);

const letterNBtn = document.createElement('div');
letterNBtn.className = 'letter';
letterNBtn.eng = 'n';
letterNBtn.cyr = 'т';
letterNBtn.code = 78;

row4Array.push(letterNBtn);

const letterMBtn = document.createElement('div');
letterMBtn.className = 'letter';
letterMBtn.eng = 'm';
letterMBtn.cyr = 'ь';
letterMBtn.code = 77;

row4Array.push(letterMBtn);

const commaBtn = document.createElement('div');
commaBtn.className = 'letter';
commaBtn.eng = ',';
commaBtn.cyr = 'б';
commaBtn.code = 188;

row4Array.push(commaBtn);

const periodBtn = document.createElement('div');
periodBtn.className = 'letter';
periodBtn.eng = '.';
periodBtn.cyr = 'ю';
periodBtn.code = 190;

row4Array.push(periodBtn);

const slashBtn = document.createElement('div');
slashBtn.className = 'letter';
slashBtn.eng = '/';
slashBtn.cyr = '.';
slashBtn.code = 191;

row4Array.push(slashBtn);

const arrowUpBtn = document.createElement('div');
arrowUpBtn.className = 'arrow';
arrowUpBtn.innerText = '▲';
arrowUpBtn.code = 38;

row4Array.push(arrowUpBtn);

const shiftRightBtn = document.createElement('div');
shiftRightBtn.classList = 'shiftRight';
shiftRightBtn.innerText = 'Shift';
shiftRightBtn.code = 16;

row4Array.push(shiftRightBtn);

for (let i = 0; i < row4Array.length; i += 1) {
  row4.append(row4Array[i]);
}

container.append(row4);

const row5 = document.createElement('div');
row5.className = 'row';
const row5Array = [];

const controlLeftBtn = document.createElement('div');
controlLeftBtn.className = 'alt';
controlLeftBtn.innerText = 'Ctrl';
controlLeftBtn.code = 17;

row5Array.push(controlLeftBtn);

const winBtn = document.createElement('div');
winBtn.className = 'alt';
winBtn.innerText = 'Win';
winBtn.code = 91;

row5Array.push(winBtn);

const altLeftBtn = document.createElement('div');
altLeftBtn.className = 'alt';
altLeftBtn.innerText = 'Alt';
altLeftBtn.code = 18;

row5Array.push(altLeftBtn);

const spaceBtn = document.createElement('div');
spaceBtn.classList = 'space';
spaceBtn.innerText = '\0';
spaceBtn.code = 32;

row5Array.push(spaceBtn);

const altRightBtn = document.createElement('div');
altRightBtn.className = 'alt';
altRightBtn.innerText = 'Alt';
altRightBtn.code = 18;

row5Array.push(altRightBtn);

const arrowLeftBtn = document.createElement('div');
arrowLeftBtn.className = 'arrow';
arrowLeftBtn.innerText = '◄';
arrowLeftBtn.code = 37;

row5Array.push(arrowLeftBtn);

const arrowDownBtn = document.createElement('div');
arrowDownBtn.className = 'arrow';
arrowDownBtn.innerText = '▼';
arrowDownBtn.code = 40;

row5Array.push(arrowDownBtn);

const arrowRightBtn = document.createElement('div');
arrowRightBtn.className = 'arrow';
arrowRightBtn.innerText = '►';
arrowRightBtn.code = 39;

row5Array.push(arrowRightBtn);

const controlRightBtn = document.createElement('div');
controlRightBtn.className = 'alt';
controlRightBtn.innerText = 'Ctrl';
controlRightBtn.code = 17;

row5Array.push(controlRightBtn);

for (let i = 0; i < row5Array.length; i += 1) {
  row5.append(row5Array[i]);
}

container.append(row5);

const arrayOfElements = [textarea, container];

for (let i = 0; i < arrayOfElements.length; i += 1) {
  wrapper.append(arrayOfElements[i]);
}

document.body.append(wrapper);

const letters = document.getElementsByClassName('letter');
// =================================================SWITCHER=============================
let letterMode = 'eng';

function drawLetters() {
  for (let i = 0; i < letters.length; i += 1) {
    letters[i].innerText = letters[i][letterMode];
  }
}

function setLang() {
  if (letterMode === 'eng') {
    letterMode = 'cyr';
    drawLetters();
  } else {
    letterMode = 'eng';
    drawLetters();
  }
}

function change() {
  document.addEventListener('keydown', (event) => {
    if (event.altKey && event.ctrlKey) {
      setLang();
    }
  });
}
change();
drawLetters();

// =================================================!SWITCHER================================

document.addEventListener('keyup', (event) => { // CapsLock
  if (event.which === 20) {
    for (let i = 0; i < letters.length; i += 1) {
      if (letters[i].innerText === letters[i].innerText.toUpperCase()) {
        letters[i].innerText = letters[i].innerText.toLowerCase();
      } else {
        letters[i].innerText = letters[i].innerText.toUpperCase();
      }
    }
  }
});

const numbers = document.getElementsByClassName('number');

function drawDefaultNumbers() {
  for (let i = 0; i < numbers.length; i += 1) {
    numbers[i].innerText = numbers[i].def;
  }
}

drawDefaultNumbers();

const arrows = document.getElementsByClassName('arrow');

const inputSymbols = [...letters, ...numbers, ...arrows, spaceBtn];

document.addEventListener('keydown', (event) => { // text output
  for (let i = 0; i < inputSymbols.length; i += 1) {
    if (event.keyCode === inputSymbols[i].code) {
      textarea.append(inputSymbols[i].innerText);
    }
  }
})

for (let i = 0; i < inputSymbols.length; i += 1) {
  inputSymbols[i].addEventListener('click', () => {
    textarea.append(inputSymbols[i].innerText);
  });
}

document.addEventListener('keydown', (event) => { // backSpace
  if (event.keyCode === 8) {
    const textArr = textarea.textContent.split('');
    textArr.pop();
    textarea.textContent = textArr.join('');
  }
});

document.addEventListener('keydown', (event) => { // Enter
  if (event.keyCode === 13) {
    textarea.append('\n');
  }
});

function shifted() {
  for (let i = 0; i < letters.length; i += 1) {
    letters[i].innerText = letters[i].innerText.toUpperCase();
  }
  for (let i = 0; i < numbers.length; i += 1) {
    numbers[i].innerText = numbers[i][letterMode];
  }
}

function normalize() {
  for (let i = 0; i < letters.length; i += 1) {
    letters[i].innerText = letters[i].innerText.toLowerCase();
  }
  drawDefaultNumbers();
}

document.addEventListener('keydown', (event) => { // shift
  if (event.keyCode === 16) {
    shifted();
  }
})

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 16) {
    normalize();
  }
});

document.addEventListener('keyup', (event) => { // Tab
  if (event.keyCode === 9) {
    textarea.append('\t');
  }
});

const buttons = [...row1Array, ...row2Array, ...row3Array, ...row4Array, ...row5Array];

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 9 || event.keyCode === 18) {
    event.preventDefault();
  }

  if (event.keyCode === 16 && event.location === 1) {
    shiftLeftBtn.classList.toggle('active');
  }
  if (event.keyCode === 16 && event.location === 2) {
    shiftRightBtn.classList.toggle('active');
  }

  if (event.keyCode === 17 && event.location === 1) {
    controlLeftBtn.classList.toggle('active');
  }
  if (event.keyCode === 17 && event.location === 2) {
    controlRightBtn.classList.toggle('active');
  }

  if (event.keyCode === 18 && event.location === 1) {
    altLeftBtn.classList.toggle('active');
  }
  if (event.keyCode === 18 && event.location === 2) {
    altRightBtn.classList.toggle('active');
  }

  for (let i = 0; i < buttons.length; i += 1) {
    // eslint-disable-next-line max-len
    if (event.keyCode === buttons[i].code && event.keyCode !== 16 && event.keyCode !== 17 && event.keyCode !== 18) {
      buttons[i].classList.toggle('active');
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 16 && event.location === 1) {
    shiftLeftBtn.classList.remove('active');
  }
  if (event.keyCode === 16 && event.location === 2) {
    shiftRightBtn.classList.remove('active');
  }

  if (event.keyCode === 17 && event.location === 1) {
    controlLeftBtn.classList.remove('active');
  }
  if (event.keyCode === 17 && event.location === 2) {
    controlRightBtn.classList.remove('active');
  }

  if (event.keyCode === 18 && event.location === 1) {
    altLeftBtn.classList.remove('active');
  }
  if (event.keyCode === 18 && event.location === 2) {
    altRightBtn.classList.remove('active');
  }

  for (let i = 0; i < buttons.length; i += 1) {
    // eslint-disable-next-line max-len
    if (event.keyCode === buttons[i].code && event.keyCode !== 16 && event.keyCode !== 17 && event.keyCode !== 18) {
      buttons[i].classList.remove('active');
    }
  }
});

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('mousedown', () => {
    buttons[i].classList.toggle('active');
  });

  buttons[i].addEventListener('mouseup', () => {
    buttons[i].classList.remove('active');
  });
}
