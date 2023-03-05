
document.querySelector("#poem1").onclick = function () {
    console.log("Hello");
    let poemArea = document.querySelector("#poem");
    poemArea.setAttribute("src", "../images/twinkleStar.jpeg");
    poemArea.setAttribute("id", "poem");
}


document.querySelector("#poem2").onclick = function () {
    console.log("Hello2");
    let poemArea = document.querySelector("#poem");
    poemArea.setAttribute("src", "../images/difference_poem.png");
    poemArea.setAttribute("id", "poem");
    poemArea.style.height = "760px";
    poemArea.style.width = "60%";
}

document.querySelector("#find1").onclick = function () {
    console.log("Find1");
    let poemArea = document.querySelector("#find");
    poemArea.setAttribute("src", "../images/dragonPoem.jpeg");
    poemArea.setAttribute("id", "find");
}


document.querySelector("#find2").onclick = function () {
    console.log("Find2");
    let poemArea = document.querySelector("#find");
    poemArea.setAttribute("src", "../images/popcorn.png");
    poemArea.setAttribute("id", "find");
    poemArea.style.height = "704px";
    poemArea.style.width = "760px";
    poemArea.style.border = "2px solid black";
}

