const lista = document.querySelectorAll('.botaonum')

lista.forEach((botao) =>{
    botao.addEventListener("click",(evento)=>{
       const valor = evento.target.innerText;
       document.querySelector('.resultado').innerHTML += valor;
    })
})

const botaoC = document.querySelector('.botaoC');
        botaoC.addEventListener("click", (e) =>{
            Deletar();
        });   
        function Deletar(){
        document.querySelector('.resultado').innerHTML = "";              
        }  
const botaoBackspace = document.querySelector('.botaoBackspace');
botaoBackspace.addEventListener("click", (e) =>{
    Apagar();
} )
function Apagar(){
    var conta = document.querySelector('.resultado').innerHTML
    document.querySelector('.resultado').innerHTML = conta.substring(0, conta.length-1)
}
const botaoIgual = document.querySelector('.botaoIgual');
        botaoIgual.addEventListener("click", (e)=>{
            Resultado()
        } )
function Resultado(){
    var conta = document.querySelector('.resultado').innerHTML;
    conta = conta.replace('x','*');
    conta = conta.replace('÷','/');
    document.querySelector('.resultado').innerHTML = eval(conta);
}