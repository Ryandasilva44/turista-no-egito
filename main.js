/*nessas linhas de codigos,eu pego o icone que esta no "ID" e seleciono toda a lista do "UL" e coloco ela dentro do icone "fa fa-bras" e so ira aparecee quando o icone for clicado */

var icon = document.getElementById('icon');
 var list = document.querySelector('.list');
 icon.addEventListener("click", function(){
      list.classList.toggle('show-list');
  });

/* essa linha de codigo faz a animacao da biblioteca "animate.css, eu peguei e adicionei dentro do .js, a animacao so ocorrera quando acontecer um "scroll",quando eu rola para cima o efeito acontecera em 1s */

var elemento = 
document.querySelector('.elemento');
var animacaoAtivada = false;
window.addEventListener('scroll', function(){
  var posicaoScroll = window.scrollY;
  if(posicaoScroll  >= 0 && !animacaoAtivada) {
    elemento.classList.add('animate__animated','animate__fadeInUpBig','animate__delay-1s');
  } else if(posicaoScroll > 0
  && animacaoAtivada) {
    elemento.classList.remove('animate__animated','animate__fadeInUpBig','animate__delay-1s');
    animacaoAtivada = false;
  }

});



      // 5 secao //
      
      
 var meuElemento = 
 document.getElementById('meuElemento');
 
 meuElemento.classList.add('flipInX');
 
 setTimeout(() => {
     meuElemento.classList.remove('flipInX');
     
 }, 2000);
          
     
     
 
 
 
 




    
