button.onclick = function() {
    let textFromUser = document.getElementById('input_text').value;
    console.log(textFromUser);
    button.classList.add('vision');
    input_text.classList.add('vision');
    answer.textContent = `Hello, ${textFromUser}!`
};

