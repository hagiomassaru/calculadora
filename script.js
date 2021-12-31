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
    let lista_calculo = numero.innerText.split(" "); // separa a calculo que foi retirado na variavel numero que armazena o elemento html <h1 type="text" id="calculo"></h1>
    let indice = -1; // essa variavel serve para podermos usar o indice do elemento que estamos trabalhando no for
    for (var i of lista_calculo) {
        // aqui vamos varrer cada elemento
        indice++;
        if (i.includes('√') == true){
            let numero_raiz = i.split('');
            // percebi que shift em strings nao funciona, entao precisei tranformar em array
            let largura_elemento = i.length;
            numero_raiz = parseInt(numero_raiz.splice(1,largura_elemento).toString().replace(/,/g,'')); // Nessa parte utilizo o splice ao inves do shift e retiro o simbolo √ e retorno como string como .toString() e retiro as virgulas gerada com replace()
            numero_raiz = Math.sqrt(numero_raiz);
            lista_calculo[indice/*como podemos ver como a variavel indice foi util */] = numero_raiz;
        }
    }
    numero.innerText = eval(lista_calculo.toString().replace(/,/g,''));
}

function limpar() {
    numero.innerText = ``;
}
