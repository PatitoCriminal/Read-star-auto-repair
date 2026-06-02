function showMessage() {
    let name = document.getElementById("name").value;

    if(name === "") {
        alert("Please enter your name.");
        return;
    }

    alert("Thank you " + name + "! We received your appointment request.");
}