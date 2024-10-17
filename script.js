let flagPrato = "";
let flagBebida = "";
let flagSobremesa = "";
let flagErroNull = 0;

function selecionadoPrato(borda){
  const bordaRemove = document.querySelector('.selecionadoPrato');
  if (bordaRemove !== null){
    bordaRemove.classList.remove('selecionadoPrato');
  }
  borda.classList.toggle('selecionadoPrato');
  flagPrato = "Escolhido";

  if (flagPrato !== '' && flagBebida !== '' && flagSobremesa !== '' && flagErroNull === 0){
    document.querySelector('.botao').classList.add("botaoHabilitado");
    document.querySelector('.botao').classList.remove("botao");
    console.log("teste");
    flagErroNull = 1;
  }
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
    console.log("teste");
    flagErroNull = 1;
  }
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
        console.log("teste");
        flagErroNull = 1;
  }
}


// if (flagPrato === 'Escolhido'){
//   if (flagBebida === 'Escolhido'){
//     if (flagSobremesa === 'Escolhido')
//     {
//       // document.querySelector('.botao').classList.add("botaoHabilitado");
//       // document.querySelector('.botao').classList.remove("botao");
//       console.log("teste");
//     }
//   }
// }