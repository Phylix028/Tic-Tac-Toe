let cross = false;

let field_1_1 = 0;
let field_1_2 = 0;
let field_1_3 = 0;
let field_2_1 = 0;
let field_2_2 = 0;
let field_2_3 = 0;
let field_3_1 = 0;
let field_3_2 = 0;
let field_3_3 = 0;

const field_1_1Ele = document.getElementById("item_1_1");
const field_1_2Ele = document.getElementById("item_1_2");
const field_1_3Ele = document.getElementById("item_1_3");
const field_2_1Ele = document.getElementById("item_2_1");
const field_2_2Ele = document.getElementById("item_2_2");
const field_2_3Ele = document.getElementById("item_2_3");
const field_3_1Ele = document.getElementById("item_3_1");
const field_3_2Ele = document.getElementById("item_3_2");
const field_3_3Ele = document.getElementById("item_3_3");

function checkElements() {
  if (!field_1_1Ele) console.error("Element mit ID item_1_1 nicht gefunden.");
  if (!field_1_2Ele) console.error("Element mit ID item_1_2 nicht gefunden.");
  if (!field_1_3Ele) console.error("Element mit ID item_1_3 nicht gefunden.");
  if (!field_2_1Ele) console.error("Element mit ID item_2_1 nicht gefunden.");
  if (!field_2_2Ele) console.error("Element mit ID item_2_2 nicht gefunden.");
  if (!field_2_3Ele) console.error("Element mit ID item_2_3 nicht gefunden.");
  if (!field_3_1Ele) console.error("Element mit ID item_3_1 nicht gefunden.");
  if (!field_3_2Ele) console.error("Element mit ID item_3_2 nicht gefunden.");
  if (!field_3_3Ele) console.error("Element mit ID item_3_3 nicht gefunden.");
}

let turn = true;

function place(Y, X) {
  let fieldKey = `field_${Y}_${X}`;
  let elementId = `item_${Y}_${X}`;
  let element = document.getElementById(elementId);
  checkElements();
  if (turn) {
    if (cross) {
      element.innerHTML = "✖";
      updateField(Y, X, 1);
      cross = false;
    } else {
      element.innerHTML = "⭕";
      updateField(Y, X, 2);
      cross = true;
    }
    checkWin1();
    checkWin2();
  }
}

function updateField(Y, X, value) {
  // Aktualisiere die globale Variable basierend auf Y und X
  switch (`field_${Y}_${X}`) {
    case "field_1_1":
      field_1_1 = value;
      break;
    case "field_1_2":
      field_1_2 = value;
      break;
    case "field_1_3":
      field_1_3 = value;
      break;
    case "field_2_1":
      field_2_1 = value;
      break;
    case "field_2_2":
      field_2_2 = value;
      break;
    case "field_2_3":
      field_2_3 = value;
      break;
    case "field_3_1":
      field_3_1 = value;
      break;
    case "field_3_2":
      field_3_2 = value;
      break;
    case "field_3_3":
      field_3_3 = value;
      break;
  }
}

function checkWin1() {
  if (field_1_1 === 1 && field_1_2 === 1 && field_1_3 === 1) {
    highlightWinner([field_1_1Ele, field_1_2Ele, field_1_3Ele]);
  }
  if (field_2_1 === 1 && field_2_2 === 1 && field_2_3 === 1) {
    highlightWinner([field_2_1Ele, field_2_2Ele, field_2_3Ele]);
  }
  if (field_3_1 === 1 && field_3_2 === 1 && field_3_3 === 1) {
    highlightWinner([field_3_1Ele, field_3_2Ele, field_3_3Ele]);
  }
  if (field_1_1 === 1 && field_2_1 === 1 && field_3_1 === 1) {
    highlightWinner([field_1_1Ele, field_2_1Ele, field_3_1Ele]);
  }
  if (field_1_2 === 1 && field_2_2 === 1 && field_3_2 === 1) {
    highlightWinner([field_1_2Ele, field_2_2Ele, field_3_2Ele]);
  }
  if (field_1_3 === 1 && field_2_3 === 1 && field_3_3 === 1) {
    highlightWinner([field_1_3Ele, field_2_3Ele, field_3_3Ele]);
  }
  if (field_1_1 === 1 && field_2_2 === 1 && field_3_3 === 1) {
    highlightWinner([field_1_1Ele, field_2_2Ele, field_3_3Ele]);
  }
  if (field_1_3 === 1 && field_2_2 === 1 && field_3_1 === 1) {
    highlightWinner([field_1_3Ele, field_2_2Ele, field_3_1Ele]);
  }
}

function checkWin2() {
  if (field_1_1 === 2 && field_1_2 === 2 && field_1_3 === 2) {
    highlightWinner([field_1_1Ele, field_1_2Ele, field_1_3Ele]);
  }
  if (field_2_1 === 2 && field_2_2 === 2 && field_2_3 === 2) {
    highlightWinner([field_2_1Ele, field_2_2Ele, field_2_3Ele]);
  }
  if (field_3_1 === 2 && field_3_2 === 2 && field_3_3 === 2) {
    highlightWinner([field_3_1Ele, field_3_2Ele, field_3_3Ele]);
  }
  if (field_1_1 === 2 && field_2_1 === 2 && field_3_1 === 2) {
    highlightWinner([field_1_1Ele, field_2_1Ele, field_3_1Ele]);
  }
  if (field_1_2 === 2 && field_2_2 === 2 && field_3_2 === 2) {
    highlightWinner([field_1_2Ele, field_2_2Ele, field_3_2Ele]);
  }
  if (field_1_3 === 2 && field_2_3 === 2 && field_3_3 === 2) {
    highlightWinner([field_1_3Ele, field_2_3Ele, field_3_3Ele]);
  }
  if (field_1_1 === 2 && field_2_2 === 2 && field_3_3 === 2) {
    highlightWinner([field_1_1Ele, field_2_2Ele, field_3_3Ele]);
  }
  if (field_1_3 === 2 && field_2_2 === 2 && field_3_1 === 2) {
    highlightWinner([field_1_3Ele, field_2_2Ele, field_3_1Ele]);
  }
}

function highlightWinner(elements) {
  turn = false;
  elements.forEach((ele) => {
    if (ele) {
      ele.style.setProperty("background-color", "greenyellow", "important");
    } else {
      console.error("Ein Element ist null oder undefiniert.");
    }
  });
}
