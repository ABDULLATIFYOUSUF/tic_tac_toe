var count = 1
var circle = "O"
var cross = "X"
var draw = "its draw"
var main = document.querySelector(".main")
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")
var btn1 = document.querySelector(".btn1")
var result = document.querySelector(".result")

var crossWin = "Cross Win"
var circleWin = "Circle Win"
function game(e) {

    e.innerHTML = count++
    if (e.innerHTML == 1) {
        e.innerHTML = circle
        e.classList.add("book")
        e.id = "circle"
    } else if (e.innerHTML == 2) {
        e.innerHTML = cross
        e.classList.add("book")
        e.id = "cross"
    } else if (e.innerHTML == 3) {
        e.innerHTML = circle
        e.classList.add("book")
        e.id = "circle"
    } else if (e.innerHTML == 4) {
        e.innerHTML = cross
        e.classList.add("book")
        e.id = "cross"
    } else if (e.innerHTML == 5) {
        e.innerHTML = circle
        e.classList.add("book")
        e.id = "circle"
    } else if (e.innerHTML == 6) {
        e.innerHTML = cross
        e.classList.add("book")
        e.id = "cross"
    } else if (e.innerHTML == 7) {
        e.innerHTML = circle
        e.classList.add("book")
        e.id = "circle"
    } else if (e.innerHTML == 8) {
        e.innerHTML = cross
        e.classList.add("book")
        e.id = "cross"
    } else if (e.innerHTML == 9) {
        e.innerHTML = circle
        e.classList.add("book")
        e.id = "circle"
    }
    
    if (one.innerHTML == circle && two.innerHTML == circle && three.innerHTML == circle) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = circleWin
        btn1.style.display = "block"
    } else if (four.innerHTML == circle && five.innerHTML == circle && six.innerHTML == circle) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = circleWin
        btn1.style.display = "block"
    } else if (seven.innerHTML == circle && eight.innerHTML == circle && nine.innerHTML == circle) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = circleWin
        btn1.style.display = "block"
    } else if (one.innerHTML == cross && two.innerHTML == cross && three.innerHTML == cross) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = crossWin
        btn1.style.display = "block"
    } else if (four.innerHTML == cross && five.innerHTML == cross && six.innerHTML == cross) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = crossWin
        btn1.style.display = "block"
    } else if (seven.innerHTML == cross && eight.innerHTML == cross && nine.innerHTML == cross) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = crossWin
        btn1.style.display = "block"
    } else if (one.innerHTML == circle && four.innerHTML == circle && seven.innerHTML == circle) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = circleWin
        btn1.style.display = "block"
    } else if (two.innerHTML == circle && five.innerHTML == circle && eight.innerHTML == circle) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = circleWin
        btn1.style.display = "block"
    } else if (three.innerHTML == circle && six.innerHTML == circle && nine.innerHTML == circle) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = circleWin
        btn1.style.display = "block"
    } else if (one.innerHTML == cross && four.innerHTML == cross && seven.innerHTML == cross) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = crossWin
        btn1.style.display = "block"
    } else if (two.innerHTML == cross && five.innerHTML == cross && eight.innerHTML == cross) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = crossWin
        btn1.style.display = "block"
    } else if (three.innerHTML == cross && six.innerHTML == cross && nine.innerHTML == cross) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = crossWin
        btn1.style.display = "block"
    } else if (three.innerHTML == circle && five.innerHTML == circle && seven.innerHTML == circle) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = circleWin
        btn1.style.display = "block"
    } else if (one.innerHTML == circle && five.innerHTML == circle && nine.innerHTML == circle) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = circleWin
        btn1.style.display = "block"
    } else if (three.innerHTML == cross && five.innerHTML == cross && seven.innerHTML == cross) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = crossWin
        btn1.style.display = "block"
    } else if (one.innerHTML == cross && five.innerHTML == cross && nine.innerHTML == cross) {
        main.className = "disable"
        result.style.display = "block"
        result.innerHTML = crossWin
        btn1.style.display = "block"
    }

    
}
function reset(){
    location.reload()
}