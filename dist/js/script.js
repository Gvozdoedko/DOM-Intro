function main() {
    let input = document.body.children[2].children[0];
    let button = document.body.children[2].children[1];
    let span = document.body.children[2].children[2];

    button.onclick = function () {
        let textFromUser = document.getElementById("input_text").value;
        console.log(textFromUser);
        input.classList.add("vision");
        button.classList.add("vision");
        span.textContent = `Hello, ${textFromUser}!`;
    };
}

main();