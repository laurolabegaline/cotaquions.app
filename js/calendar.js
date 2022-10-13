var eventsDate = [
	{
		title: "VAN Sprinter - Fatima do Sul x Monte Mor",
		start: "2022-10-13",
		end: "2022-10-19",
	},
	{
		title: "LD 1200- Fatima do Sul x Monte Mor",
		start: "2022-10-13",
		end: "2022-10-17",
		backgroundColor: "#008000",
	},
	{
		title: "Evento com URL",
		url: "http://google.com/",
		start: "2022-10-28",
	},
];

// data para YYYY-MM-DD
var todayDate = new Date().toISOString().slice(0, 10);
console.log(todayDate);

document.addEventListener("DOMContentLoaded", function () {
	var calendarEl = document.getElementById("calendar");
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: "dayGridMonth",
		initialDate: todayDate,
		headerToolbar: {
			left: "prev,next today",
			center: "title",
			right: "dayGridMonth",
		},
		events: eventsDate,
		locale: "pt-br",
	});
	calendar.setOption("height", 700);
	calendar.render();
});

FullCalendar.globalLocales.push(
	(function () {
		"use strict";

		var ptBr = {
			code: "pt-br",
			buttonText: {
				prev: "Anterior",
				next: "Pr\xF3ximo",
				today: "Hoje",
				month: "M\xEAs",
				week: "Semana",
				day: "Dia",
				list: "Lista",
			},
			weekText: "Sm",
			allDayText: "dia inteiro",
			moreLinkText: function (n) {
				return "mais +" + n;
			},
			noEventsText: "N\xE3o h\xE1 eventos para mostrar",
		};
		return ptBr;
	})()
);
