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
// Formatação Money

function attveiculo() {
	let selecionar = document.querySelector("#veiculos");
	let optionValue = selecionar.options[selecionar.selectedIndex];
	let veiculoSelect = optionValue.value;
}
//Formatar CPDF
function formatarCampo(campoTexto) {
	if (campoTexto.value.length <= 11) {
		campoTexto.value = mascaraCpf(campoTexto.value);
	} else {
		campoTexto.value = mascaraCnpj(campoTexto.value);
	}
}
function retirarFormatacao(campoTexto) {
	campoTexto.value = campoTexto.value.replace(/(\.|\/|\-)/g, "");
}
function mascaraCpf(valor) {
	return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}
function mascaraCnpj(valor) {
	return valor.replace(
		/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
		"$1.$2.$3/$4-$5"
	);
}

// KM Cheio
const priceLD = [14, 7.5, 6, 3.6];
const priceG6 = [11, 6.5, 5, 3.6];
const priceVANF = [10, 4, 3, 2.2];
const priceVANC = [10, 3.75, 2.75, 2.2];
// Banco de dados

function alteraimg() {
	let slideimg = document.querySelector("#galeria");
	let location = "./img/" + veiculoSelect + ".jpg";
	slideimg.src = location;
}

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
					var priceValorCheio = priceLD[fator] * kmcheio;
					// var priceValorCheioFormatado = priceValorCheio.toLocaleString(
					// 	"pt-br",
					// 	{
					// 		style: "currency",
					// 		currency: "BRL",
					// 	}
					// );
					var vlrkmcheio = document.querySelector("#valorKmCheio");
					vlrkmcheio.innerText = priceValorCheio;
					var priceValorVazio = priceLD[3] * kmvazio;
					// var priceValorVazioFormatado = priceValorVazio.toLocaleString(
					// 	"pt-br",
					// 	{
					// 		style: "currency",
					// 		currency: "BRL",
					// 	}
					// );
					var vlrkmvazio = document.querySelector("#valorKmVazio");
					vlrkmvazio.innerText = priceValorVazio;

					attresumo();
				}
				break;
			case "priceG6":
				{
					var priceValorCheio = priceG6[fator] * kmcheio;
					// var priceValorCheioFormatado = priceValorCheio.toLocaleString(
					// 	"pt-br",
					// 	{
					// 		style: "currency",
					// 		currency: "BRL",
					// 	}
					// );
					let vlrkmcheio = document.querySelector("#valorKmCheio");
					vlrkmcheio.innerText = priceValorCheio;
					var priceValorVazio = priceG6[3] * kmvazio;
					// var priceValorVazioFormatado = priceValorVazio.toLocaleString(
					// 	"pt-br",
					// 	{
					// 		style: "currency",
					// 		currency: "BRL",
					// 	}
					// );
					var vlrkmvazio = document.querySelector("#valorKmVazio");
					vlrkmvazio.innerText = priceValorVazio;
					attresumo();
				}
				break;
			case "priceVANF":
				{
					var priceValorCheio = priceVANF[fator] * kmcheio;
					// var priceValorCheioFormatado = priceValorCheio.toLocaleString(
					// 	"pt-br",
					// 	{
					// 		style: "currency",
					// 		currency: "BRL",
					// 	}
					// );
					let vlrkmcheio = document.querySelector("#valorKmCheio");
					vlrkmcheio.innerText = priceValorCheio;
					var priceValorVazio = priceVANF[3] * kmvazio;
					// var priceValorVazioFormatado = priceValorVazio.toLocaleString(
					// 	"pt-br",
					// 	{
					// 		style: "currency",
					// 		currency: "BRL",
					// 	}
					// );
					var vlrkmvazio = document.querySelector("#valorKmVazio");
					vlrkmvazio.innerText = priceValorVazio;
					attresumo();
				}
				break;
			case "priceVANC":
				{
					var priceValorCheio = priceVANC[fator] * kmcheio;
					// var priceValorCheioFormatado = priceValorCheio.toLocaleString(
					// 	"pt-br",
					// 	{
					// 		style: "currency",
					// 		currency: "BRL",
					// 	}
					// );
					let vlrkmcheio = document.querySelector("#valorKmCheio");
					vlrkmcheio.innerText = priceValorCheio;
					var priceValorVazio = priceVANF[3] * kmvazio;
					// var priceValorVazioFormatado = priceValorVazio.toLocaleString(
					// 	"pt-br",
					// 	{
					// 		style: "currency",
					// 		currency: "BRL",
					// 	}
					// );
					var vlrkmvazio = document.querySelector("#valorKmVazio");
					vlrkmvazio.innerText = priceValorVazio;
					attresumo();
				}
				break;
		}
		function attresumo() {
			let resumoKmTotal = document.querySelector("#resumoKmTotal");
			let resumosomaTotal = priceValorCheio + priceValorVazio;
			resumoKmTotal.innerText = resumosomaTotal;
		}
	}

	let slideimg = document.querySelector("#galeria");
	let location = "./img/" + veiculoSelect + ".jpg";
	slideimg.src = location;
	alteravalor();
	resumomargen();
}

function resumoHosp() {
	let vlrhospe = document.querySelector("#getMoney").value;
	// let vlrhospeformated = parseInt(vlrhospe).toLocaleString("pt-br", {
	// 	style: "currency",
	// 	currency: "BRL",
	// });
	let resumoHosp = document.querySelector("#hospedagemVlr");
	resumoHosp.innerText = vlrhospe;
	resumomargen();
}

function resumocusto() {
	let custo1 = document.querySelector("#custo1").value;
	let custo2 = document.querySelector("#custo2").value;
	let custo3 = document.querySelector("#custo3").value;
	let custo4 = document.querySelector("#custo4").value;
	var somacustos =
		(parseInt(custo1) || 0) +
		(parseInt(custo2) || 0) +
		(parseInt(custo3) || 0) +
		(parseInt(custo4) || 0);
	let resumocusto = document.querySelector("#resumocustos");
	resumocusto.innerText = somacustos;
	resumomargen();
}

function resumomargen() {
	let margem = document.querySelector("#margem").value;
	let kmtotal = document.querySelector("#resumoKmTotal").textContent;
	let hospedagemvlr = document.querySelector("#hospedagemVlr").textContent;
	let tdscustos = document.querySelector("#resumocustos").textContent;
	let somacustos =
		(parseInt(kmtotal) || 0) +
		(parseInt(hospedagemvlr) || 0) +
		(parseInt(tdscustos) || 0);
	let percentualsoma = (somacustos * margem) / 100;
	let vlrMargem = document.querySelector("#vlrMargem");
	vlrMargem.innerHTML = percentualsoma;
	let somaTotalCustos = somacustos + percentualsoma;
	let sugestionVlr = document.querySelector("#sugestionVlr");
	sugestionVlr.innerHTML = somaTotalCustos;
}
