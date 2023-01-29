function validateForm() {
  var nameVal = document.forms["simple__form"]["email"].value;

  if (nameVal == null || nameVal == "") {
    document.getElementsByClassName("error--message")[0].style.visibility =
      "visible";
    document.getElementsByClassName("error--message")[0].innerHTML =
      "Please Fill Username/Email";
    return false;
  }

  var passwordVal = document.forms["simple__form"]["password"].value;
  if (passwordVal == null || passwordVal == "") {
    document.getElementsByClassName("error--message")[0].style.visibility =
      "visible";
    document.getElementsByClassName("error--message")[0].innerHTML =
      "Please enter password";
    return false;
  } else {
    return true;
  }
}
