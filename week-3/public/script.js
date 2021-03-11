//Form Validation
function validate() {
  if (document.form.q1.value == "") {
    let element = document.getElementById("q1-warning");
    element.style.display = "block";

    //ScrollIntoView
    document.getElementById("q1-title").scrollIntoView({ behavior: "smooth" });
    return false;
  } else if (!document.getElementById("q2o2").checked) {
    let element = document.getElementById("q2-warning");
    element.style.display = "block";
    document.getElementById("q2-title").scrollIntoView({ behavior: "smooth" });
    return false;
  } else if (document.form.selectlist.value == "") {
    let element = document.getElementById("q3-warning");
    element.style.display = "block";

    document.getElementById("q3-title").scrollIntoView({ behavior: "smooth" });
    return false;
  } else if (document.form.q4.value == "") {
    let element = document.getElementById("q4-warning");
    element.style.display = "block";

    document.getElementById("q4-title").scrollIntoView({ behavior: "smooth" });
    return false;
  }
  return true;
}

function q1RemoveWarning() {
  let element = document.getElementById("q1-warning");
  element.style.display = "none";
}
function q2RemoveWarning() {
  let element = document.getElementById("q2-warning");
  element.style.display = "none";
}
function q3RemoveWarning() {
  let element = document.getElementById("q3-warning");
  element.style.display = "none";
}
function q4RemoveWarning() {
  let element = document.getElementById("q4-warning");
  element.style.display = "none";
}
