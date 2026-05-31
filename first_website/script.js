function showMessage() {
    alert("Welcome to JavaScript!");
}
function changeHeading() {

    document.getElementById("main-heading").innerText =
        "I am becoming a Web Developer!";

}
function showName() {

    let name =
        document.getElementById("name-input").value;

    document.getElementById("main-heading").innerText =
        "Welcome " + name + "!";

}
function darkMode() {

    document.body.classList.toggle("dark");

}