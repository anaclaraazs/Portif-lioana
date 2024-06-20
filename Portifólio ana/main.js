function imc() {

    let altura = document.querySelector('#altura')
    let peso = document.querySelector('#peso')
    let resultadoIMC = Number(peso.value) / (Number(altura.value) * Number(altura.value));

    document.querySelector('#resultadoimc').value = resultadoIMC.toFixed(2);

    // Definir as configurações baseadas no IMC calculado
    let consideracoes = document.querySelector('#consideracoes')
    if (resultadoIMC < 18.5) {
        consideracoes.textContent = 'Abaixo do Peso';
    } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
        consideracoes.textContent = 'Peso Normal';
    } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
        consideracoes.textContent = 'Sobrepeso';
    } else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
        consideracoes.textContent = 'Obesidade grau 1';
    } else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
        consideracoes.textContext = 'Obesidade grau 2';
    }
}

function somar() {
    let final = Number(numero1.value) + Number(numero2.value);
    resultado.value = final;
}
function subtrair() {
    let final = Number(numero1.value) - Number(numero2.value);
    resultado.value = final
}

function dividir() {
    let final = Number(numero1.value) / Number(numero2.value);
    resultado.value = final

}

function multiplicar() {
    let final = Number(numero1.value) * Number(numero2.value);
    resultado.value = final
}