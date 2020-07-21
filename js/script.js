let textarea = document.querySelector(".textarea")
testString = "Lucas@magno:$ ~ npm install portfólio  \n[**************************] successful  \nLucas@magno:$ ~ Olá, eu sou o Lucas. Obrigado por me instalar :) \nAjudo alguns designs, pequenas agências e algumas empresas a darem \nvida às suas ideias. Com tecnologias como ~Node ~React ~Django ~Spring\ncom uma boa ajuda do ~Stack Overflow e muito café no final tudo sempre\ndá certo.\n\n\n \nLucas@magno:$ ~ Pressione qualquer tecla ..."

var counter = 0;                   

function WriteDefaultValuesTerminal () {           
   setTimeout(function () {    
    textarea.value += testString[counter]         
      counter++;                     
      if (counter < testString.length) {            
         WriteDefaultValuesTerminal();            
      }                       
   }, 40)
}
WriteDefaultValuesTerminal();

 
document.querySelector('body').addEventListener('keydown', function(event) {
  window.location.href = 'projects.html';
}); 





