function validateForm() {
    var fnameVal = document.forms["simple__form"]["fname"].value;
    var addressVal = document.forms["simple__form"]["address"].value;
    var phoneVal = document.forms["simple__form"]["phone"].value;
    var bookVal = document.forms["simple__form"]["book"].value;
    var emailVal = document.forms["simple__form"]["email"].value;
   
    if (fnameVal == null || nameVal == "") {
      document.getElementsByClassName(
        "error--message"
      )[0].style.visibility = "visible";
      document.getElementsByClassName("error--message")[0].innerHTML =
        "Please Fill out this field";
      return false;
    } 
    if (phoneVal == null || phoneVal == "") {
      document.getElementsByClassName(
        "error--message"
      )[0].style.visibility = "visible";
      document.getElementsByClassName("error--message")[0].innerHTML =
        "Please Fill out this field";
      return false;
    } 
    if (bookVal == null || bookVal == "") {
        document.getElementsByClassName(
          "error--message"
        )[0].style.visibility = "visible";
        document.getElementsByClassName("error--message")[0].innerHTML =
          "Please Fill out this field";
        return false;
      } 
      if (addressVal == null || addressVal == "") {
        document.getElementsByClassName(
          "error--message"
        )[0].style.visibility = "visible";
        document.getElementsByClassName("error--message")[0].innerHTML =
          "Please Fill out this field";
        return false;
      } 
      if (emailVal == null || emailVal == "") {
        document.getElementsByClassName(
          "error--message"
        )[0].style.visibility = "visible";
        document.getElementsByClassName("error--message")[0].innerHTML =
          "Please Fill out this field";
        return false;
      } 
  }