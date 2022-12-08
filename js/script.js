
const form = document.querySelector('.formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const pesoInput = e.target.querySelector('#peso');
    const alturaInput = e.target.querySelector('#altura');

    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);
    if (!peso) {
        resultadoNaTela('O peso está iválido!');
        return;
    } 

    if (!altura) {
        resultadoNaTela('A altura está iválido!');
        return;
    }
    const imc = getImc(peso, altura);
    const nivelDoImc = getNivelImc(imc);
    const mensagem= `Seu IMC é de ${imc} e vc está ${nivelDoImc} `;
    resultadoNaTela(mensagem, true);
});



function getNivelImc (imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3' ]

    if (imc >= 40) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso/ altura**2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function resultadoNaTela (msg, eValid) {
    const resultado = document.querySelector('#frases');
    resultado.innerHTML = '';
    const p = criaP();
    if(eValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('paragrafo-resultado-errado')
    }

    
    p.innerHTML = msg;
    resultado.appendChild(p);
}

