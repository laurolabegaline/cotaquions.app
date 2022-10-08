// Banco de dados
// KM Cheio
const priceLD = [14, 7.5, 6];
const priceG6 = [11, 6.5, 5];
const priceVAN = [10, 4, 3];
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

function verificaChecked() {
	let radiold = document.querySelector("#vecld");
	let ldradio = radiold.ariaChecked;
	console.log(ldradio);
}

function pegarkmcheio() {
	let select = document.querySelector("#kmcheio");
	let kmcheio = select.value; // Vem do form
	let fator = null;
	if (kmcheio > 0 && kmcheio < 300) {
		fator = 0;
	} else if (kmcheio > 301 && kmcheio < 500) {
		fator = 1;
	} else {
		fator = 2;
	}
	let priceValor = veiculoSelect[fator] * kmcheio;
	var priceValorFormatado = priceValor.toLocaleString("pt-br", {
		style: "currency",
		currency: "BRL",
	});
	console.log(priceValorFormatado);
	let vlrkmcheio = document.querySelector("#valorKmCheio");
	vlrkmcheio.innerText = priceValorFormatado;
}
