function validation(userName, userEmail, userPassword, confirmPassword) {
  if (
    userName === "" ||
    userPassword === "" ||
    userEmail === "" ||
    confirmPassword === ""
  ) {
    document.querySelector("#wrong").innerHTML =
      "please Make sure to fill all inputs";
    return false;
  }
  if (userName.length < 6) {
    document.querySelector("#wrong").innerHTML =
      "Username must be at least 6 characters";
    return false;
  }
  if (!userEmail.includes("@") || !userEmail.includes(".")) {
    document.querySelector("#wrong").innerHTML = "Email must contain @ and . ";
    return false;
  }
  if (userPassword.length < 6) {
    document.querySelector("#wrong").innerHTML =
      "Password must be at least 6 characters ";
    return false;
  }
  if (userPassword !== confirmPassword) {
    document.querySelector("#wrong").innerHTML =
      "Password and Confirm Password must match";
    return false;
  }
  document.querySelector("#wrong").innerHTML = "";
  return true;
}
function signUp() {
  const userName = document.getElementById("userName").value.trim();
  const userEmail = document.getElementById("userEmail").value.trim();
  const userPassword = document.getElementById("userPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  let userInfo = JSON.parse(localStorage.getItem("UserInfo")) || [];
  const isValid = validation(
    userName,
    userEmail,
    userPassword,
    confirmPassword,
  );
  if (isValid) {
    const emailExists = userInfo.some(function (user) {
      return user.userEmail.toLowerCase() === userEmail.toLowerCase();
    });

    if (emailExists) {
      document.querySelector("#wrong").innerHTML =
        "This email is already registered";
      return;
    }
    const user = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
    };
    // console.log(user);
    userInfo.push(user);
    // console.log(userInfo);
    localStorage.setItem("UserInfo", JSON.stringify(userInfo));
    clearForm();
  }
}
function clearForm() {
  document.getElementById("userName").value = "";
  document.getElementById("userEmail").value = "";
  document.getElementById("userPassword").value = "";
  document.getElementById("confirmPassword").value = "";
}
document
  .querySelector("#signUpBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    signUp();
  });
