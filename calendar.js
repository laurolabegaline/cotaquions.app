var eventsDate = [
	{
		title: "Exemplo 3",
		start: "2022-08-12T10:30:00",
		end: "2022-08-12T12:30:00",
	},
	{
		title: "Exemplo 2",
		start: "2022-08-12T12:00:00",
	},
	{
		title: "Exemplo",
		start: "2022-08-12T14:30:00",
	},
	{
		title: "VAN Sprinter - Fatima do Sul x Monte Mor",
		start: "2022-08-13",
		end: "2022-08-17",
	},
	{
		title: "LD 1200- Fatima do Sul x Monte Mor",
		start: "2022-08-13",
		end: "2022-08-17",
	},
	{
		title: "Evento com URL",
		url: "http://google.com/",
		start: "2022-08-28",
	},
];

document.addEventListener("DOMContentLoaded", function () {
	var calendarEl = document.getElementById("calendar");
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: "dayGridMonth",
		initialDate: "2022-08-07",
		headerToolbar: {
			left: "prev,next today",
			center: "title",
			right: "dayGridMonth",
		},
		events: eventsDate,
		locale: "pt-br",
	});

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
