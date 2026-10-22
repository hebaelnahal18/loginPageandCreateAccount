function logIn() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const isValid = validation(email, password);
  if (isValid) {
    let userInfo = JSON.parse(localStorage.getItem("UserInfo"));

    const user = userInfo.find(function (user) {
      return (
        user.userEmail.toLowerCase() === email.toLowerCase() &&
        user.userPassword === password
      );
    });
    if (user) {
      document.querySelector("#message").innerHTML = "Login successful";
      clearForm();
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    } else {
      document.querySelector("#message").innerHTML =
        "Invalid Email or Password";
    }
  }
}

function validation(email, password) {
  if (email === "" || password === "") {
    document.querySelector("#message").innerHTML =
      "please Make sure to fill all inputs";
    return false;
  }
  if (!email.includes("@") || !email.includes(".")) {
    document.querySelector("#message").innerHTML =
      "Email must contain @ and . ";
    return false;
  }
  if (password.length < 6) {
    document.querySelector("#message").innerHTML =
      "Password must be at least 6 characters ";
    return false;
  }
  document.querySelector("#message").innerHTML = "";
  return true;
}
function clearForm() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}
document.querySelector("#loginBtn").addEventListener("click", function (event) {
  event.preventDefault();
  logIn();
});
