let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")


btn1.addEventListener("click", cambiarColor);
function cambiarColor() {
    btn1.style.backgroundColor = "white";
    btn1.style.color = "#192a32";
    btn2.style.backgroundColor = "#192a32";
    btn2.style.color = "white";
}
btn2.addEventListener("click", cambiarColor2);
function cambiarColor2() {
    btn2.style.backgroundColor = "white";
    btn2.style.color = "#192a32";
    btn1.style.backgroundColor = "#192a32";
    btn1.style.color = "white";
}