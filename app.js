function fetchSuperheroes() {
    var resultDiv = document.getElementById("result");
    var userInput = document.getElementById("userinput");

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            resultDiv.innerHTML = xhr.responseText;
        } else {
            console.error("An error occurred");
        }
    };
    xhr.open("GET", `http://localhost/info2180-lab4/superheroes.php?query=${userInput.value}`, false);
    xhr.send();
}

window.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded");
    var searchButton = document.getElementById("searchBtn");
    searchButton.addEventListener("click", fetchSuperheroes);
});
