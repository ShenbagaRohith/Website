function check(form) {
    if (form.id.value == "Rohith" && form.pass.value == "1234") {
        window.location.href("home.html");
    } else {
        window.alert("UserID or Password Wrong");
    }
}