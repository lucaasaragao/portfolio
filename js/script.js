const textarea = document.querySelector(".textarea");

const testString = `Lucas Magno:$ ~ npm iniciando portfólio
[**********************************] iniciado com sucesso!!!

Lucas@magno:$ ~ Olá, eu sou o Lucas. Obrigado por me instalar :) 
Ajudo pessoas, pequenas e grandes agências, bem como empresas, a darem vida às suas ideias. 
Utilizo tecnologias como ~Java, ~JavaScript e ~Python, além de frameworks como ~Spring Boot, ~Angular e ~Django.  
Com a ajuda do ~Stack Overflow e muito café, no final tudo sempre dá certo.

Lucas@magno:$ ~ Pressione enter para continuar...`;

let counter = 0;

function WriteDefaultValuesTerminal () {
setTimeout(() => {
   textarea.value += testString[counter];
    counter++;
   if (counter < testString.length) {
      WriteDefaultValuesTerminal();
      }
   }, 20);
}

WriteDefaultValuesTerminal();

document.addEventListener('keydown', (e) => {
   if (e.key === 'Enter') {
      window.location.href = 'projects.html';
   }
});





