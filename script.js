var numero = document.getElementById("calculo");
var indice_numero = 0;
console.log(numero.textContent);
function logicaDeTeclas(num) {
    let lista_simbolos = ["/", "*", "-", "+"];
    let lista_simbolos_especiais = ["%", "√"];
    let lista_numero = /[0-9]/;
    let tamanho = numero.innerText.length;
    let ultimo_numero = numero.innerText[tamanho - 1];
    console.log(ultimo_numero);
    let numero_enviado = num.innerText;
    console.log(numero_enviado);
    let tipo_ultimo_numero = typeof ultimo_numero;

    if (tipo_ultimo_numero == "undefined") {
    }

    switch (isNaN(ultimo_numero)) {
        case true:
            if (tipo_ultimo_numero == "undefined") {
                numero.innerText = numero.innerText.concat(numero_enviado);
                break;
            }

            if (ultimo_numero == "√" && numero_enviado != "√") {
                numero.innerText = numero.innerText.concat(numero_enviado);
                break;
            } else if (ultimo_numero == "√" && numero_enviado == "√") {
                alert("Nao e permitido duas raizes consecutivas");
                break;
            }

            if (
                lista_numero.test(ultimo_numero) === false &&
                lista_simbolos.includes(numero_enviado) === true
            ) {
                numero.innerText = `${numero.innerText} ${numero_enviado}`;
                indice_numero++;
            } else if (
                lista_numero.test(ultimo_numero) === true &&
                lista_simbolos.includes(numero_enviado) === false
            ) {
                numero.innerText = numero.innerText.concat(numero_enviado);
            } else if (
                lista_numero.test(ultimo_numero) === false &&
                lista_simbolos.includes(numero_enviado) === false
            ) {
                numero.innerText = `${numero.innerText} ${numero_enviado}`;
                indice_numero++;
            }
            break;
        case false:
            if (lista_numero.test(ultimo_numero) && numero_enviado == "√") {
                numero.innerText = `${numero.innerText} ${numero_enviado}`;
                break;
            }

            if (
                lista_numero.test(ultimo_numero) === true &&
                lista_simbolos.includes(numero_enviado) === false
            ) {
                numero.innerText = numero.innerText.concat(numero_enviado);
            } else if (
                lista_numero.test(ultimo_numero) === true &&
                lista_simbolos.includes(numero_enviado) == true
            ) {
                numero.innerText = `${numero.innerText} ${numero_enviado}`;
                indice_numero++;
            }
            break;
    }
    console.log(tipo_ultimo_numero);
    console.log(isNaN(ultimo_numero));
    console.log(lista_simbolos.includes(numero_enviado));
    console.log(lista_numero.test(ultimo_numero));

    // if (isNaN(ultimo_numero) == true || isNaN(num.innerText) == true) {
    //     if (ultimo_numero == "√") {
    //         if (num.innerText == "√") {
    //             alert("Raiz Quadrada deve ser acompanhado com um numero");
    //         } else {
    //             numero.innerText += num.innerText;
    //         }
    //     } else {
    //         numero.innerText = `${numero.innerText} ${num.innerText}`;
    //     }
    // } else {
    //     numero.innerText += num.innerText;
    // }
    indice_numero++;
    console.log(indice_numero);
}

function calculoTecla() {
    let lista_calculo = numero.innerText.split(" "); // separa a calculo que foi retirado na variável numero que armazena o elemento html <h1 type="text" id="calculo"></h1>
    let indice = -1; // essa variavel serve para podermos usar o indice do elemento que estamos trabalhando no for
    for (var i of lista_calculo) {
        // aqui vamos varrer cada elemento
        indice++;
        if (i.includes("√") == true) {
            let numero_raiz = i.split("");
            // percebi que shift em strings nao funciona, então precisei transformar em array
            let largura_elemento = i.length;
            numero_raiz = parseInt(
                numero_raiz
                    .splice(1, largura_elemento)
                    .toString()
                    .replace(/,/g, "")
            ); // Nessa parte utilizo o splice ao invés do shift e retiro o simbolo √ e retorno como string como .toString() e retiro as virgulas gerada com replace()
            numero_raiz = Math.sqrt(numero_raiz);
            lista_calculo[
                indice /*como podemos ver como a variável indice foi util */
            ] = numero_raiz;
        }
    }
    numero.innerText = eval(lista_calculo.toString().replace(/,/g, ""));
}

function limpar() {
    numero.innerText = ``;
    indice_numero = numero.innerText.length;
}
