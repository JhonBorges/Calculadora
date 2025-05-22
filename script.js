document.addEventListener('DOMContentLoaded', function () {
    const visor = document.getElementById('display');
    const botoes = document.querySelectorAll('button');
  
    let expressao = '';
  
    botoes.forEach(botao => {
      botao.addEventListener('click', () => {
        const valor = botao.innerText;
  
        if (valor === 'C') {
          expressao = '';
          visor.innerText = '0';
        } else if (valor === '=') {
          try {
            const resultado = eval(expressao);
            visor.innerText = resultado;
            expressao = resultado.toString();
          } catch (erro) {
            visor.innerText = 'Erro';
            expressao = '';
          }
        } else {
          expressao += valor;
          visor.innerText = expressao;
        }
      });
    });
  });
  