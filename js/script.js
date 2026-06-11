const res = document.querySelector("#resultado")
const botaoTema = document.querySelector("#botao-tema")
const body = document.body
const temaSalvo = localStorage.getItem('tema');
const sortear = document.querySelector("#sortear")
const alterarSorteio = document.querySelector("#alterarSorteio")
const novoSorteio = document.querySelector("#novoSorteio")


// Tema claro e escuro

temaEscuro(temaSalvo === 'escuro');
function temaEscuro(tipo){
    if (tipo == true) {
        body.classList.add('escuro');
        botaoTema.innerHTML = '<i  class="fa-solid fa-sun"></i>';
    }else{
        body.classList.remove('escuro');
        botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
};

botaoTema.addEventListener('click', () => {
    const isEscuro = body.classList.toggle('escuro');
        temaEscuro(isEscuro);
        localStorage.setItem('tema', isEscuro ? 'escuro' : 'claro')

});


// Sortear
function coletaValores() {
    const caixaOpcoes = document.getElementById('caixaOpcoes')
    const valores = caixaOpcoes.value.trim()
    const valoresArray = valores.split("\n")
    return valoresArray
}  

sortear.addEventListener('click', () => {
    const opcoes = coletaValores()
    if (opcoes == "" || opcoes.length < 2) {
        alert("Insira pelo menos 2 opções para realizar o sorteio.")
    } else {
        const resultModal = document.querySelector('#modal')
        const resultado = opcoes[Math.floor(Math.random() * opcoes.length)];
        resultModal.showModal()
        res.innerHTML = resultado
    }
})


// Alterar Sorteio
alterarSorteio.addEventListener('click', () => {
    modal.close()
    caixaOpcoes.focus()
})
// Novo Soteio
novoSorteio.addEventListener('click', () => {
    caixaOpcoes.value = ""
    modal.close()
    caixaOpcoes.focus()
})


