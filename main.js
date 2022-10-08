// Banco de dados

// Variables do HTML
function prepercurso() {
   let lcembarque1 = document.querySelector("#lcembarque");
   let valor1 = lcembarque1.value;
   let lcdesembarque2 = document.querySelector("#lcdesembarque");
   let valor2 = lcdesembarque2.value;
   let roteiro = valor1 + " x " + valor2;
   document.querySelector("#percursoIda").value = roteiro;
}

// Formatação Telefone
const handlePhone = (event) => {
   let input = event.target;
   input.value = phoneMask(input.value);
};
const phoneMask = (value) => {
   if (!value) return "";
   value = value.replace(/\D/g, "");
   value = value.replace(/(\d{2})(\d)/, "($1) $2");
   value = value.replace(/(\d)(\d{4})$/, "$1-$2");
   return value;
};

// function selecionaLD() {
// 	const selectld1 = priceLD;
// 	console.log(selectld1);
// 	pegarkmcheio();
// }
// function selecionaG6() {
// 	const veiculoSelect = priceG6;
// 	console.log(veiculoSelect);
// 	pegarkmcheio();
// }
// function selecionaVAN() {
// 	const veiculoSelect = priceVAN;
// 	console.log(veiculoSelect);
// 	pegarkmcheio();
// }

//function verificaChecked() {
//	let radiold = document.querySelector("#vecld");
//	let ldradio = radiold.ariaChecked;
//	console.log(ldradio);
//}

function attveiculo() {
   let selecionar = document.querySelector("#veiculos");
   let optionValue = selecionar.options[selecionar.selectedIndex];
   let veiculoSelect = optionValue.value;
   console.log(veiculoSelect);
}

// KM Cheio
const priceLD = [14, 7.5, 6, 3.6];
const priceG6 = [11, 6.5, 5, 3.6];
const priceVANF = [10, 4, 3, 2.2];
const priceVANC = [10, 3.75, 2.75, 2.2];
// Banco de dados

function AlterarValorKm() {
   let selecionar = document.querySelector("#veiculos");
   let optionValue = selecionar.options[selecionar.selectedIndex];
   let veiculoSelect = optionValue.value;
   let select = document.querySelector("#kmcheio");
   let kmcheio = select.value;
   let select2 = document.querySelector("#kmvazio");
   let kmvazio = select2.value;
   let fator = null;
   if (kmcheio > 0 && kmcheio < 300) {
      fator = 0;
   } else if (kmcheio > 301 && kmcheio < 500) {
      fator = 1;
   } else {
      fator = 2;
   }

   function alteravalor() {
      switch (veiculoSelect) {
         case "priceLD":
            {
               let priceValorCheio = priceLD[fator] * kmcheio;
               var priceValorCheioFormatado = priceValorCheio.toLocaleString(
                  "pt-br",
                  {
                     style: "currency",
                     currency: "BRL",
                  }
               );
               let vlrkmcheio = document.querySelector("#valorKmCheio");
               vlrkmcheio.innerText = priceValorCheioFormatado;
               let priceValorVazio = priceLD[3] * kmvazio;
               var priceValorVazioFormatado = priceValorVazio.toLocaleString(
                  "pt-br",
                  {
                     style: "currency",
                     currency: "BRL",
                  }
               );
               let vlrkmvazio = document.querySelector("#valorKmVazio");
               vlrkmvazio.innerText = priceValorVazioFormatado;
            }
            break;
         case "priceG6":
            {
               let priceValor = priceG6[fator] * kmcheio;
               var priceValorFormatado = priceValor.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
               });
               let vlrkmcheio = document.querySelector("#valorKmCheio");
               vlrkmcheio.innerText = priceValorFormatado;
               let priceValorVazio = priceG6[3] * kmvazio;
               var priceValorVazioFormatado = priceValorVazio.toLocaleString(
                  "pt-br",
                  {
                     style: "currency",
                     currency: "BRL",
                  }
               );
               let vlrkmvazio = document.querySelector("#valorKmVazio");
               vlrkmvazio.innerText = priceValorVazioFormatado;
            }
            break;
         case "priceVANF":
            {
               let priceValor = priceVANF[fator] * kmcheio;
               var priceValorFormatado = priceValor.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
               });
               let vlrkmcheio = document.querySelector("#valorKmCheio");
               vlrkmcheio.innerText = priceValorFormatado;
               let priceValorVazio = priceVANF[3] * kmvazio;
               var priceValorVazioFormatado = priceValorVazio.toLocaleString(
                  "pt-br",
                  {
                     style: "currency",
                     currency: "BRL",
                  }
               );
               let vlrkmvazio = document.querySelector("#valorKmVazio");
               vlrkmvazio.innerText = priceValorVazioFormatado;
            }
            break;
         case "priceVANC":
            {
               let priceValor = priceVANC[fator] * kmcheio;
               var priceValorFormatado = priceValor.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
               });
               let vlrkmcheio = document.querySelector("#valorKmCheio");
               vlrkmcheio.innerText = priceValorFormatado;
               let priceValorVazio = priceVANF[3] * kmvazio;
               var priceValorVazioFormatado = priceValorVazio.toLocaleString(
                  "pt-br",
                  {
                     style: "currency",
                     currency: "BRL",
                  }
               );
               let vlrkmvazio = document.querySelector("#valorKmVazio");
               vlrkmvazio.innerText = priceValorVazioFormatado;
            }
            break;
      }
   }
   alteravalor();
}
