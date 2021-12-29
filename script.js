var numero = document.getElementById("calculo");
console.log(numero.textContent);
function calculo(num) {
    let tamanho = numero.innerText.length - 1;
    let ultimo_numero = numero.innerText[tamanho];

    if (isNaN(ultimo_numero) == true || isNaN(num.innerText) == true) {
        numero.innerText = `${numero.innerText} ${num.innerText}`;
    } else {
        numero.innerText += num.innerText;
    }
}

