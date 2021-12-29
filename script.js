var numero = document.getElementById("calculo");
console.log(numero.textContent);
function logicaDeTeclas(num) {
    let tamanho = numero.innerText.length - 1;
    let ultimo_numero = numero.innerText[tamanho];

    if (isNaN(ultimo_numero) == true || isNaN(num.innerText) == true) {
        if (ultimo_numero == "√") {
            if (num.innerText == "√") {
                alert("Raiz Quadrada deve ser acompanhado com um numero");
                return null;
            } else {
                numero.innerText += num.innerText;
            }
        } else {
            numero.innerText = `${numero.innerText} ${num.innerText}`;
        }
    } else {
        numero.innerText += num.innerText;
    }
}

function calculoTecla() {
    let lista_calculo = numero.innerText.split(" ");
    console.log(lista_calculo);
    // let calculaT = eval(numero.innerText);
    // numero.innerText = calculaT;
    // console.log(calculaT);
}

function limpar() {
    numero.innerText = ``;
}
