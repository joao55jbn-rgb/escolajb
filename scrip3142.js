function displayNone() {
  const body = document.body;
  const mensagem = "Acabou o prazo!"
  const cod = 2369;
  const dataAtual = new Date();
  const dia = dataAtual.getDate();
  const mes = dataAtual.getMonth('pt-BR', { month: 'long' });
  const ano = dataAtual.getFullYear();
  const diaDaSemana = dataAtual.toLocaleString('pt-BR', { weekday: 'long' });
  const dataFormatada = `${((dia+(30*(mes+1))+ano)-cod)}`;
  
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  const horarioFormatado = `${horas}:${minutos}:${segundos}`;
  
  //document.getElementById('tela').innerHTML = segundos;
  
  if(dataFormatada < 5){
    body.style.display = 'none';
    location.reload();
    if(segundos < 60) location.reload();

  }  
}
setInterval(displayNone, 1000);
displayNone();

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) { //celular
  
  // FUNÇÃO DE CRIPTOGRAFIA COM SENHA
  function nCrip(entr){
    const senha = "3khR@sRi";
    let tamT = entr.length;
    let text5 = [];
    
    for (let a = 0; a < tamT; a++) {
      const caractereTexto = entr.charCodeAt(a);
      // Pega o caractere correspondente da senha em loop ciclico
      const caractereSenha = senha.charCodeAt(a % senha.length); 
      
      // Soma os dois códigos decimais para criptografar com segurança
      const codigoCriptografado = caractereTexto + caractereSenha;
      
      text5.push(codigoCriptografado);
    }      
    return text5.join(',');
  }
  
  function encrip() {
    const qq1 = document.getElementById('questao1').value;
    const qq2 = document.getElementById('questao2').value;
    const qq3 = document.getElementById('questao3').value;
    const qq4 = document.getElementById('questao4').value;
    const qq5 = document.getElementById('questao5').value;
    
    const textoPuro = `@${qq1}@${qq2}@${qq3}@${qq4}@${qq5}`;
    const corp3 = nCrip(textoPuro); 
    return corp3;
  }
  
  function enviarWhatsapp() {
    const nome = document.getElementById('nome').value;
    const telefone = "5598992015877"; 
    const encrip2 = encrip();
    const mensagem = `${encrip2}\n\n${nome}\n`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${telefone}/?text=${mensagemCodificada}`;

    window.open(url, '_blank');
  }
  
  function enviarEmail() {
    const emailPredefinido = "batistajb12@outlook.com";
    const assunto = encodeURIComponent(document.getElementById('nome').value);
    const emailSaida = encrip();
    window.location.href = `mailto:${emailPredefinido}?subject=${assunto}&body=${emailSaida}`;
  }

} // fim de celular
else { 
    document.body.style.display = 'none';
} 
