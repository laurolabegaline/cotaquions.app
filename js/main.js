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
	console.log(veiculoSelect);
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
	console.log(location);
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
	let slideimg = document.querySelector("#galeria");
	let location = "./img/" + veiculoSelect + ".jpg";
	slideimg.src = location;
	alteravalor();
}