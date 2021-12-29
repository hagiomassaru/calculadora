var numero = document.getElementById("calculo");
console.log(numero.textContent);
function number(num) {
    numero.innerText += num.innerText
    
}
function calculo() {
    let teste = JSON.parse(numero.innerText);
    console.log(teste);
}
function soma(num) {
    numero.innerText = `${numero.innerText} +`;
}
