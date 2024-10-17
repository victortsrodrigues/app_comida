let flagPrato = "";
let flagBebida = "";
let flagSobremesa = "";
let flagErroNull = 0;
let nomePrato = "";
let precoPrato = 0;
let nomeBebida = "";
let precoBebida = 0;
let nomeSobremesa = "";
let precoSobremesa = 0;

function selecionadoPrato(borda){
  // Colocar borda quando clica
  const bordaRemove = document.querySelector('.selecionadoPrato');
  if (bordaRemove !== null){
    bordaRemove.classList.remove('selecionadoPrato');
  }
  borda.classList.toggle('selecionadoPrato');
  flagPrato = "Escolhido";

  // Habilitar botao
  if (flagPrato !== '' && flagBebida !== '' && flagSobremesa !== '' && flagErroNull === 0){
    document.querySelector('.botao').classList.add("botaoHabilitado");
    document.querySelector('.botao').classList.remove("botao");
    document.querySelector('.botaoHabilitado').innerHTML = "Fechar pedido"
    flagErroNull = 1;
  }
  nomePrato = document.querySelector('.selecionadoPrato .nome_prato').innerHTML;
  precoPrato = Number(document.querySelector('.selecionadoPrato .preco_prato').innerHTML);
}

function selecionadoBebida(borda){
  const bordaRemove = document.querySelector('.selecionadoBebida');
  if (bordaRemove !== null){
    bordaRemove.classList.remove('selecionadoBebida');
  }
  borda.classList.toggle('selecionadoBebida');
  flagBebida = "Escolhido";

  if (flagPrato !== '' && flagBebida !== '' && flagSobremesa !== '' && flagErroNull === 0){
    document.querySelector('.botao').classList.add("botaoHabilitado");
    document.querySelector('.botao').classList.remove("botao");
    document.querySelector('.botaoHabilitado').innerHTML = "Fechar pedido"
    flagErroNull = 1;
  }
  nomeBebida = document.querySelector('.selecionadoBebida .nome_bebida').innerHTML;
  precoBebida = Number(document.querySelector('.selecionadoBebida .preco_bebida').innerHTML);
}

function selecionadoSobremesa(borda){
  const bordaRemove = document.querySelector('.selecionadoSobremesa');
  if (bordaRemove !== null){
    bordaRemove.classList.remove('selecionadoSobremesa');
  }
  borda.classList.toggle('selecionadoSobremesa');
  flagSobremesa = "Escolhido";

  if (flagPrato !== '' && flagBebida !== '' && flagSobremesa !== '' && flagErroNull === 0){
        document.querySelector('.botao').classList.add("botaoHabilitado");
        document.querySelector('.botao').classList.remove("botao");
        document.querySelector('.botaoHabilitado').innerHTML = "Fechar pedido";
        flagErroNull = 1;
  }
  nomeSobremesa = document.querySelector('.selecionadoSobremesa .nome_sobremesa').innerHTML;
  precoSobremesa = Number(document.querySelector('.selecionadoSobremesa .preco_sobremesa').innerHTML);
}

function confirmacao(){
  // Aplica a interface de confirmação
  if (flagErroNull !== 0){
    document.querySelector('.escondido').classList.add("transparencia");
    document.querySelector('.escondido').classList.remove("escondido");
  }
  // Calcula o preço total
  let total = precoPrato + precoBebida + precoSobremesa;
  let totalArredondado = total.toFixed(2);
  let precoPratoArredondado = precoPrato.toFixed(2);
  let precoBebidaArredondado = precoBebida.toFixed(2);
  let precoSobremesaArredondado = precoSobremesa.toFixed(2);
  console.log(totalArredondado);
  // Print nomes e preços
  document.querySelector('.prato_confirmado').innerHTML = `${nomePrato}: R$ ${precoPratoArredondado}`;
  document.querySelector('.bebida_confirmada').innerHTML = `${nomeBebida}: R$ ${precoBebidaArredondado}`;
  document.querySelector('.sobremesa_confirmada').innerHTML = `${nomeSobremesa}: R$ ${precoSobremesaArredondado}`;
  document.querySelector('.total_calculado').innerHTML = `TOTAL: R$ ${totalArredondado}`;
  // Cria o url codificado
  let minhaString = `Olá, gostaria de fazer o pedido:\n - Prato: ${nomePrato}\n - Bebida: ${nomeBebida}\n - Sobremesa: ${nomeSobremesa}\nTotal: R$ ${totalArredondado}`;
  let textoCodificado = encodeURIComponent(minhaString)
  document.querySelector('.pedido_wpp').href = `https://wa.me/5517991072727/?text=${textoCodificado}`;
  return textoCodificado
}

function cancelarFunc(){
  document.querySelector('.transparencia').classList.add("escondido");
  document.querySelector('.transparencia').classList.remove("transparencia");  
}

