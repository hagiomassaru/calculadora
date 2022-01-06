var numero = document.getElementById("calculo");
var indice_numero = 0;
var lista_simbolos = ["/", "*", "-", "+"];

function logicaDeTeclas(num) {
    let lista_simbolos2 = ["/", "*", "-", "+", "%"];
    let lista_numero = /[0-9]/;
    let tamanho = numero.innerText.length;
    let ultimo_numero = numero.innerText[tamanho - 1];
    let numero_enviado = num.innerText;
    let tipo_ultimo_numero = typeof ultimo_numero;

    switch (isNaN(ultimo_numero)) {
        case true:
            if (
                indice_numero == 0 &&
                lista_simbolos2.includes(numero_enviado) == true
            ) {
                alert("Proibido iniciar com simbolos");
                break;
            }

            if (numero_enviado == "%") {
                if (ultimo_numero == "%") {
                    alert(
                        "Nao e permitido duas sinais de porcentagem consecutivas"
                    );
                    break;
                } else {
                    alert(
                        "Nao e permitido duas sinais de porcentagem subsequentes de sinais"
                    );
                    break;
                }
            }

            if (tipo_ultimo_numero == "undefined") {
                numero.innerText = numero.innerText.concat(numero_enviado);
                break;
            }

            // Caso o valo seja raiz
            if (ultimo_numero == "√" && numero_enviado != "√") {
                numero.innerText = numero.innerText.concat(numero_enviado);
                break;
            } else if (ultimo_numero == "√" && numero_enviado == "√") {
                alert("Nao e permitido duas raizes consecutivas");
                break;
            } else if (
                lista_simbolos.includes(numero_enviado) &&
                lista_simbolos.includes(ultimo_numero)
            ) {
                alert("Nao e permitido sinais consecutivos");
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

    indice_numero++;
}

function calculoTecla() {
    let lista_calculo = numero.innerText.split(" "); // separa a calculo que foi retirado na variável numero que armazena o elemento html <h1 type="text" id="calculo"></h1>
    let indice = -1; // essa variavel serve para podermos usar o indice do elemento que estamos trabalhando no for
    for (var i of lista_calculo) {
        // aqui vamos varrer cada elemento
        let largura_elemento = i.length;
        indice++;
        if (i.includes("√") == true) {
            let numero_raiz = i.split("");
            // percebi que shift em strings nao funciona, então precisei transformar em array
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
        // Aqui e a parte que realizo o calculo caso seja porcentagem
        if (i.includes("%") == true) {
            let numero_porcento = i.split("");
            if (!isNaN(lista_calculo[indice + 1]) == true) {
                numero_porcento.pop();
                numero_porcento = numero_porcento.toString().replace(/,/g, "");
                let calculo_porcentagem =
                    (numero_porcento * lista_calculo[indice + 1]) / 100;
                lista_calculo[indice] = calculo_porcentagem;
                lista_calculo.splice(indice + 1, 1);
                

                console.log(calculo_porcentagem);
                console.log(numero_porcento);
                console.log(lista_calculo);
            } else {
                alert(
                    `A expressão ${lista_calculo[indice]} ${
                        lista_calculo[indice + 1]} nao e valida, por isso ela nao sera calculada.
                    }`
                );
                lista_calculo.splice(indice, 2);
                console.log(lista_calculo);
                if(indice > 0){
                    lista_calculo.splice(indice-1,1);
    
                    console.log(lista_calculo);
                }
            }

            
        }
    }
    numero.innerText = eval(lista_calculo.toString().replace(/,/g, ""));
}

function limpar() {
    numero.innerText = ``;
    indice_numero = numero.innerText.length;
}
