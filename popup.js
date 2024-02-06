// Function to generate a random password
function generatePassword(length = 12) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}

// Function to display the generated password
function displayPassword() {
  const passwordOutput = document.getElementById("password-output");
  const generatedPassword = generatePassword();
  passwordOutput.value = generatedPassword;
}

document.getElementById("generate-button").addEventListener("click", displayPassword);

displayPassword();
