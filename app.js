let generatedPass = document.getElementById("generated-pass");

// This will generate the new random password
function generatePassword() {
  let pass = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

  for (let i = 1; i < 16; i += 1) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  return pass;
}

function gfg_Run() {
  generatedPass.innerHTML = generatePassword();
}

// let CHARACTER_SETS = [
//   [true, "Numbers", "0123456789"],
//   [true, "Lowercase", "abcdefghijklmnopqrstuvwxyz"],
//   [false, "Uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
//   [false, "ASCII symbols", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"],
//   [false, "Space", " "],
// ];

// let passwordElem = document.getElementById("generatedPass");
// let statisticsElem = document.getElementById("statistics");
// let copyElem = document.getElementById("copy-button");
// let cryptoObject = null;
// let currentPassword = null;

// function initCharSets() {
//   function createElem(tagName, attribs) {
//     let result = document.createElement(tagName);
//     if (attribs !== undefined) {
//       for (let key in attribs) result[key] = attribs[key];
//     }
//     return result;
//   }
//   let container = document.querySelector("#charset tbody");
//   let endElem = document.querySelector("#charset tbody > tr:last-child");
//   CHARACTER_SETS.forEach(function (entry, i) {
//     let tr = createElem("tr");
//     let td = tr.appendChild(
//       createElem("input", {
//         type: "checkbox",
//         checked: entry[0],
//         id: "charset-" + i,
//       })
//     );
//   });
// }

// Many thanks to GeeksForGeeks and Project Nayuki for sourcing code out
