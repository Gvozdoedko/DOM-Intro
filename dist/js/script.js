function main() {
    let input = document.getElementById("input_text");
    let button = document.getElementById("button");
    let span = document.getElementById("answer");

    button.onclick = function () {
        let textFromUser = document.getElementById("input_text").value;
        console.log(textFromUser);
        input.classList.add("vision");
        button.classList.add("vision");
        span.textContent = `Hello, ${textFromUser}!`;
    };
}

main();