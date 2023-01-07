let btnEncrypt = document.querySelector('#encrypt');
let btnDecrypt = document.querySelector('#decrypt');
let showText = document.querySelector('#mensagge')
let textarea = document.querySelector('#textarea')
let btnCopy = document.querySelector('#copyText');
// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// encrypt

function encrypt() {
    textarea.focus();
        let text = document.querySelector('#textarea').value.toLowerCase();
        let textInput = text.split('');
// if I use the map method its can help me creating an new array
        const replacedCode = textInput.map(function (letter) {
            if (letter === 'a') {
                return 'ai';
            }
            if (letter === 'e'){
                return 'enter';
            }
            if (letter === 'i'){
                return 'imes';
            }
            if (letter === 'o'){
                return 'ober';
            }
            if (letter === 'u'){
                return 'ufat';
            }
                return letter;
        });
let textOutput = replacedCode;
let textEncrypted = textOutput.join('');
showText.textContent = textEncrypted;
clear()
}
encrypt()

// DECEPCRPT

function decrypt() {
    text = document.querySelector('#textarea').value.toLowerCase();
    let once = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    let two = ['a', 'e', 'i', 'o', 'u'];
        for (let e = 0; e < once.length; e++) {
            text = text.replaceAll(once[e], two[e])
    }
    showText.textContent = text;
    return text
}

// function of each btn
btnEncrypt.onclick = encrypt;
btnDecrypt.onclick = decrypt;
//

let copy = document.getElementById("copyText");
copy.addEventListener('click', async () => {
    let copyText = document.getElementById('mensagge').textContent;
    await navigator.clipboard.writeText(copyText);
})

function clear(){
    document.getElementById("textarea").value = "";

}




