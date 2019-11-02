const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const textarea = document.createElement('textarea');

const container = document.createElement('div');
container.className = 'keyboard-container';

const row1 = document.createElement('div');
row1.className = 'row';
const row1Array = [];

const backquoteBt = document.createElement('div');
backquoteBt.className = 'number';
backquoteBt.innerText = '`';
backquoteBt.code = 192;

row1Array.push(backquoteBt);

const digit1Btn = document.createElement('div');
digit1Btn.className = 'number';
digit1Btn.innerText = '1';
digit1Btn.code = 49;

row1Array.push(digit1Btn);

const digit2Btn = document.createElement('div');
digit2Btn.className = 'number';
digit2Btn.innerText = '2';
digit2Btn.code = 50;

row1Array.push(digit2Btn);

const digit3Btn = document.createElement('div');
digit3Btn.className = 'number';
digit3Btn.innerText = '3';
digit3Btn.code = 51;

row1Array.push(digit3Btn);

const digit4Btn = document.createElement('div');
digit4Btn.className = 'number';
digit4Btn.innerText = '4';
digit4Btn.code = 52;

row1Array.push(digit4Btn);

const digit5Btn = document.createElement('div');
digit5Btn.className = 'number';
digit5Btn.innerText = '5';
digit5Btn.code = 53;

row1Array.push(digit5Btn);

const digit6Btn = document.createElement('div');
digit6Btn.className = 'number';
digit6Btn.innerText = '6';
digit6Btn.code = 54;

row1Array.push(digit6Btn);

const digit7Btn = document.createElement('div');
digit7Btn.className = 'number';
digit7Btn.innerText = '7';
digit7Btn.code = 55;

row1Array.push(digit7Btn);

const digit8Btn = document.createElement('div');
digit8Btn.className = 'number';
digit8Btn.innerText = '8';
digit8Btn.code = 56;

row1Array.push(digit8Btn);

const digit9Btn = document.createElement('div');
digit9Btn.className = 'number';
digit9Btn.innerText = '9';
digit9Btn.code = 57;

row1Array.push(digit9Btn);

const digit0Btn = document.createElement('div');
digit0Btn.className = 'number';
digit0Btn.innerText = '0';
digit0Btn.code = 58;

row1Array.push(digit0Btn);

const minusBtn = document.createElement('div');
minusBtn.className = 'number';
minusBtn.innerText = '-';
minusBtn.code = 189;

row1Array.push(minusBtn);

const equalBtn = document.createElement('div');
equalBtn.className = 'number';
equalBtn.innerText = '=';
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
letterQBtn.innerText = 'q';
letterQBtn.code = 81;

row2Array.push(letterQBtn);

const letterWBtn = document.createElement('div');
letterWBtn.className = 'letter';
letterWBtn.innerText = 'w';
letterWBtn.code = 87;

row2Array.push(letterWBtn);

const letterEBtn = document.createElement('div');
letterEBtn.className = 'letter';
letterEBtn.innerText = 'e';
letterEBtn.code = 69;

row2Array.push(letterEBtn);

const letterRBtn = document.createElement('div');
letterRBtn.className = 'letter';
letterRBtn.innerText = 'r';
letterRBtn.code = 82;

row2Array.push(letterRBtn);

const letterTBtn = document.createElement('div');
letterTBtn.className = 'letter';
letterTBtn.innerText = 't';
letterTBtn.code = 84;

row2Array.push(letterTBtn);

const letterYBtn = document.createElement('div');
letterYBtn.className = 'letter';
letterYBtn.innerText = 'y';
letterYBtn.code = 89;

row2Array.push(letterYBtn);

const letterUBtn = document.createElement('div');
letterUBtn.className = 'letter';
letterUBtn.innerText = 'u';
letterUBtn.code = 85;

row2Array.push(letterUBtn);

const letterIBtn = document.createElement('div');
letterIBtn.className = 'letter';
letterIBtn.innerText = 'i';
letterIBtn.code = 73;

row2Array.push(letterIBtn);

const letterOBtn = document.createElement('div');
letterOBtn.className = 'letter';
letterOBtn.innerText = 'o';
letterOBtn.code = 79;

row2Array.push(letterOBtn);

const letterPBtn = document.createElement('div');
letterPBtn.className = 'letter';
letterPBtn.innerText = 'p';
letterPBtn.code = 80;

row2Array.push(letterPBtn);

const letterBracketLeftBtn = document.createElement('div');
letterBracketLeftBtn.className = 'letter';
letterBracketLeftBtn.innerText = '[';
letterBracketLeftBtn.code = 219;

row2Array.push(letterBracketLeftBtn);

const letterBracketRightBtn = document.createElement('div');
letterBracketRightBtn.className = 'letter';
letterBracketRightBtn.innerText = ']';
letterBracketRightBtn.code = 221;

row2Array.push(letterBracketLeftBtn);

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
letterABtn.innerText = 'a';
letterABtn.code = 65;

row3Array.push(letterABtn);

const letterSBtn = document.createElement('div');
letterSBtn.className = 'letter';
letterSBtn.innerText = 's';
letterSBtn.code = 83;

row3Array.push(letterSBtn);

const letterDBtn = document.createElement('div');
letterDBtn.className = 'letter';
letterDBtn.innerText = 'd';
letterDBtn.code = 68;

row3Array.push(letterDBtn);

const letterFBtn = document.createElement('div');
letterFBtn.className = 'letter';
letterFBtn.innerText = 'f';
letterFBtn.code = 70;

row3Array.push(letterFBtn);

const letterGBtn = document.createElement('div');
letterGBtn.className = 'letter';
letterGBtn.innerText = 'g';
letterGBtn.code = 71;

row3Array.push(letterGBtn);

const letterHBtn = document.createElement('div');
letterHBtn.className = 'letter';
letterHBtn.innerText = 'h';
letterHBtn.code = 72;

row3Array.push(letterHBtn);

const letterJBtn = document.createElement('div');
letterJBtn.className = 'letter';
letterJBtn.innerText = 'j';
letterJBtn.code = 74;

row3Array.push(letterJBtn);

const letterKBtn = document.createElement('div');
letterKBtn.className = 'letter';
letterKBtn.innerText = 'k';
letterKBtn.code = 75;

row3Array.push(letterKBtn);

const letterLBtn = document.createElement('div');
letterLBtn.className = 'letter';
letterLBtn.innerText = 'l';
letterLBtn.code = 76;

row3Array.push(letterLBtn);

const semicolonBtn = document.createElement('div');
semicolonBtn.className = 'letter';
semicolonBtn.innerText = ';';
semicolonBtn.code = 186;

row3Array.push(semicolonBtn);

const quoteBtn = document.createElement('div');
quoteBtn.className = 'letter';
quoteBtn.innerText = '\'';
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
letterZBtn.innerText = 'z';
letterZBtn.code = 90;

row4Array.push(letterZBtn);

const letterXBtn = document.createElement('div');
letterXBtn.className = 'letter';
letterXBtn.innerText = 'x';
letterXBtn.code = 88;

row4Array.push(letterXBtn);

const letterCBtn = document.createElement('div');
letterCBtn.className = 'letter';
letterCBtn.innerText = 'c';
letterCBtn.code = 67;

row4Array.push(letterCBtn);

const letterVBtn = document.createElement('div');
letterVBtn.className = 'letter';
letterVBtn.innerText = 'v';
letterVBtn.code = 86;

row4Array.push(letterVBtn);

const letterBBtn = document.createElement('div');
letterBBtn.className = 'letter';
letterBBtn.innerText = 'b';
letterBBtn.code = 66;

row4Array.push(letterBBtn);

const letterNBtn = document.createElement('div');
letterNBtn.className = 'letter';
letterNBtn.innerText = 'n';
letterNBtn.code = 78;

row4Array.push(letterNBtn);

const letterMBtn = document.createElement('div');
letterMBtn.className = 'letter';
letterMBtn.innerText = 'm';
letterMBtn.code = 77;

row4Array.push(letterMBtn);

const commaBtn = document.createElement('div');
commaBtn.className = 'letter';
commaBtn.innerText = ',';
commaBtn.code = 188;

row4Array.push(commaBtn);

const periodBtn = document.createElement('div');
periodBtn.className = 'letter';
periodBtn.innerText = '.';
periodBtn.code = 190;

row4Array.push(periodBtn);

const slashBtn = document.createElement('div');
slashBtn.className = 'letter';
slashBtn.innerText = '/';
slashBtn.code = 191;

row4Array.push(slashBtn);

const arrowUpBtn = document.createElement('div');
arrowUpBtn.className = 'letter';
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
spaceBtn.code = 32;

row5Array.push(spaceBtn);

const altRightBtn = document.createElement('div');
altRightBtn.className = 'alt';
altRightBtn.innerText = 'Alt';
altRightBtn.code = 18;

row5Array.push(altRightBtn);

const arrowLeftBtn = document.createElement('div');
arrowLeftBtn.className = 'letter';
arrowLeftBtn.innerText = '◄';
arrowLeftBtn.code = 37;

row5Array.push(arrowLeftBtn);

const arrowDownBtn = document.createElement('div');
arrowDownBtn.className = 'letter';
arrowDownBtn.innerText = '▼';
arrowDownBtn.code = 40;

row5Array.push(arrowDownBtn);

const arrowRightBtn = document.createElement('div');
arrowRightBtn.className = 'letter';
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

const buttons = [...row1Array, ...row2Array, ...row3Array, ...row4Array, ...row5Array];

console.log(buttons[1].code);

document.addEventListener('keydown', (event) => {

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
    if (event.keyCode === buttons[i].code && event.keyCode !== 16 && event.keyCode !== 17 && event.keyCode !== 18) {
      buttons[i].classList.remove('active');
    }
  }
});
