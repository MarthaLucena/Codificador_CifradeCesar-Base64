var cc = document.getElementById('cifraDeCesar')
var form = document.getElementById('incrementoCifra')
var select = document.getElementById('selecionarCriptografia')
var textoFinal = document.getElementById('textoFinal')
var submit = document.getElementById('submit')
var codificar = document.getElementById('codificar')
var decodificar = document.getElementById('decodificar')
var arr = [];
var arrComIncremento = [];
var arrParaCharCode = [];
var valorIncrementado = [];


select.addEventListener('change', function () {
    if (select.selectedIndex == 1) {
        document.getElementById('inputIncremento').style.visibility = 'visible'
    } else {
        document.getElementById('inputIncremento').style.visibility = 'hidden'
    }
})

// Funções

function textoParaArray() {
    var textoInput = document.getElementById('textoInicial').value
    arr = textoInput.split('');
}

function transformaArrParaCharCode() {
    textoParaArray();

    arr = arr.join("");

    for (var i = 0; i < arr.length; i++) {
        arrParaCharCode.push(arr.charCodeAt(i));
    }

}


// Codificação


function addIncrementoCodifica() {
    transformaArrParaCharCode()
    var inputIncremento = document.getElementById('inputIncremento')
    var incremento = parseInt(inputIncremento.value)

    for (var j = 0; j < arrParaCharCode.length; j++) {

        if (arrParaCharCode[j] >= 97 && arrParaCharCode[j] <= 122) {
            arrComIncremento.push((arrParaCharCode[j] - 97 + incremento) % 26 + 97)
        } else if (arrParaCharCode[j] >= 65 && arrParaCharCode[j] <= 90) {
            arrComIncremento.push((arrParaCharCode[j] - 65 + incremento) % 26 + 65)
        } else {
            arrComIncremento.push(arrParaCharCode[j])
        }
        console.log("char sem incremento: " + arrParaCharCode[j])
        console.log("char com incremento: " + arrComIncremento[j])
        console.log((arrParaCharCode[j] - 97 + incremento) % 26 + 97)
    }

}

function novoValorParaLetraCodifica() {
    addIncrementoCodifica()

    for (var k = 0; k < arrComIncremento.length; k++) {
        valorIncrementado.push(String.fromCharCode(arrComIncremento[k]));
    }
}

function resultadoCodifica() {
    novoValorParaLetraCodifica()

    var resultado = valorIncrementado.join('')
    textoFinal.innerText = resultado

    arr = [];
    arrComIncremento = [];
    arrParaCharCode = [];
    valorIncrementado = [];
}

// Decodificação

function addIncrementoDecodifica() {
    transformaArrParaCharCode()
    var inputIncremento = document.getElementById('inputIncremento')
    var incremento = parseInt(inputIncremento.value)

    for (var j = 0; j < arrParaCharCode.length; j++) {
        if (arrParaCharCode[j] >= 97 && arrParaCharCode[j] <= 122) {
            arrComIncremento.push((arrParaCharCode[j] - 122 - incremento) % 26 + 122)
        } else if (arrParaCharCode[j] >= 65 && arrParaCharCode[j] <= 90) {
            arrComIncremento.push((arrParaCharCode[j] - 90 - incremento) % 26 + 90)
        } else {
            arrComIncremento.push(arrParaCharCode[j])
        }
    }
}

function novoValorParaLetraDecodifica() {
    console.log("decodifica")
    addIncrementoDecodifica()

    for (var k = 0; k < arrComIncremento.length; k++) {
        valorIncrementado.push(String.fromCharCode(arrComIncremento[k]));
    }
}

function resultadoDecodifica() {
    novoValorParaLetraDecodifica()

    var resultado = valorIncrementado.join('')
    textoFinal.innerText = resultado

    arr = [];
    arrComIncremento = [];
    arrParaCharCode = [];
    valorIncrementado = [];
}

// Submit

submit.addEventListener('click', function () {
    if (codificar.checked && select.selectedIndex == 1) {
        resultadoCodifica()
    } else if (decodificar.checked && select.selectedIndex == 1) {
        resultadoDecodifica()
    }
})
