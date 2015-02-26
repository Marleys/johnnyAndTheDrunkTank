"use strict";

// uppgift 1

var box = {
	width: 12,
	height: 16,
};

// använder in för att se om det ger något. Om det gör det så skriver if-satsen ut det i console
// annars räknar den ut arean från existerande attributs värden i objektet och lagrar det.

if ("area" in box) {
	console.log(box.area);
} else {
	box.area = box.width * box.height;
}

// uppgift 2

var person = {
	firstname: "Jane",
	lastname: "Doe",
	age: 31,
	siblings: ["Peter", "Eliza"],
	anonymous: true,
	city: "Miami",
	state: "California"
};

// döpa funktionen till print krockar? Fick bara [object, object] som resultat då
// anyway, loopar igenom objektet och skriver ut dels attributen och dels deras värden
function display(stuff) {
	for (var prop in stuff) {
		console.log(prop + ": " + stuff[prop]);
	}
}

// extra stuff...
// uppgift 3
// skapar en tom array och sen går loopen igenom alla attribut i objektet och för varje itteration
// blir det push(attributets namn) som sparas i arrayen.
function attributes(stuff) {
	var arr = [];
	for (var prop in stuff) {
		arr.push(prop);
	} return arr;
}

// uppgift 4
// tar in argument och lägger in som värden till attributen
// sen nyttjar dessa för att räkna ut arean med en funktion
function triangle(h, w) {
	return {
		height: h,
		width: w,
		area: function () {
				return this.height * this.width / 2;
		}
	};
}

// uppgift 5

var calender = {
	events: [
		{ day: "Monday", time: "19:30", city: "Stockholm" },
		{ day: "Thursday", time: "21:45", city: "Miami" },
		{ day: "Friday", time: "22:00", city: "New York" }
	],
	// returnerar events
	getAllEvents: function() {
		return this.events;
	},
	// gör en pushar det man skriver in till this.events
	addEvent: function(e) {
		return this.events.push(e);
	},
	// ersätter events med en tom array
	clearEvents: function() {
		return this.events = []; 
	},
	// skapar en ny array
	// for-loop som går igenom events-arrayen och letar efter matchs till parameter d i days
	// när den hittar matches så lägger den till det i den nya arrayen och returnerar
	getEventsByDay: function(d) {
		var arr = [];
			for(var i = 0; i < this.events.length; i++) {
				if (this.events[i].day === d) {
					arr.push(this.events[i]);
				}
			} return arr;
	}
};





















