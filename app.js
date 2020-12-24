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
