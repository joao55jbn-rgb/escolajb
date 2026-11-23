cab3.style.display = 'none';
bt1.style.background = '#693DAE';
bt1.style.color = 'white';

function displayNone() {
  const body = document.body;
  
  //const mDiv1 = document.getElementById("div1");
  //const mDiv2 = document.getElementById("a42");
  
  const mensagem = "Acabou o prazo!"
  const cod = 2375;
  const dataAtual = new Date();
  const dia = dataAtual.getDate();
  const mes = dataAtual.getMonth('pt-BR', { month: 'long' });
  const ano = dataAtual.getFullYear();
  const diaDaSemana = dataAtual.toLocaleString('pt-BR', { weekday: 'long' });
  const dataFormatada = `${((dia+(30*(mes+1))+ano)-cod)}`;
  
  //document.getElementById('cab3a').innerHTML = dataFormatada;
  
         
  if(dataFormatada > 7){
    body.style.display = 'none';
  }  
}
displayNone();

function imprime(){
  // paragrafos
  const paragrafos = document.querySelectorAll('p');
  paragrafos.forEach((paragrafo) => {
    paragrafo.style.fontSize = '15px'; // Defina aqui o tamanho desejado (ex: 20px, 1.2rem, etc.)
    paragrafo.style.color = 'black';
  });
  
  // textareas
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach((textarea1) => {
    textarea1.style.fontSize = '15px'; // Defina aqui o tamanho desejado (ex: 20px, 1.2rem, etc.)
    textarea1.style.height = '100px';
    textarea1.style.marginBottom = '20px';
    textarea1.style.borderRadius = '0px';
  });
  //tela.style.margin = '0px';
  imrr.style.display = 'none';
  cab3.style.display = 'none';
  q1.style.display = 'none';
  q2.style.display = 'none';
  q3.style.display = 'none';
  
  cab3a.style.display = 'none';
  bt1.style.display = 'none';
  cabeImpres.style.display = 'block';
  cabeImpres2.style.display = 'block';
  cabeImpres.style.display = 'flex';
  texaNome.style.height = '80px';
  
//documents.button.style.display: "none";
window.print();
}

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) { //celular
  
}// fim de celular

else { //computador
    document.body.style.display = 'none';
} // fim de computador


