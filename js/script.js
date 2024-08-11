let textarea = document.querySelector(".textarea")
testString = "Lucas Magno:$ ~ npm iniciando portfólio" + 
"\n[**********************************] iniciado com sucesso!!!" +
 "\nLucas@magno:$ ~ Olá, eu sou o Lucas. Obrigado por me instalar :) " + 
 "\nAjudo pessoas, pequenas e grandes agências, bem como empresas, a darem vida às suas ideias. " + 
 "\nUtilizo tecnologias como ~Java, ~JavaScript e ~Python, além de frameworks como ~Spring Boot, ~Angular e ~Django." +  
 "\nCom a ajuda do ~Stack Overflow e muito café, no final tudo sempre dá certo.\n\n " + 
 "\nLucas@magno:$ ~ Pressione enter para continuar..."


var counter = 0;                   

function WriteDefaultValuesTerminal () {           
   setTimeout(function () {    
    textarea.value += testString[counter]         
      counter++;                     
      if (counter < testString.length) {            
         WriteDefaultValuesTerminal();            
      }                       
   }, 20)
}
WriteDefaultValuesTerminal();


document.querySelector('body').addEventListener('keydown', function(event) {
   if (event.keyCode == 13) {
      window.location.href = 'projects.html';
   }
}); 





