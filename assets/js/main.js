//funcion que hace publicar el comentario
function tweet() {
	//buscando y almacenando el valor del comentario
	var comment = document.getElementById("comment").value;
	//condicion que impide ingresar comentario vacio
	if (comment == "" || comment.length > 140) {
		var btn = getElementById("btn");
		btn.disable = true;
	}
	else {
		document.getElementById("comment").value = "";
		//creando un div para que almacene los comentarios
		var newComment = document.createElement("div");
		var content = document.getElementById("content");

		var paragraph = document.createElement("p");
		var text = document.createTextNode(comment);
		var hour = document.createElement("span");
		hour.textContent = moment().format("hh:mm a");
		
		paragraph.appendChild(text);
		
		newComment.appendChild(paragraph);
		newComment.appendChild(hour);
		content.appendChild(newComment);
	}
}

//funcion que cuenta los caracteres en forma regresiva
//y condicionales que cambian el color segun los caracteres que quedan
function countCharacters () {
	var long = 140;
	var subs = "";
	var characters = document.getElementById("comment").value.length;
	subs = long - characters;
	document.getElementById("counter").value = subs;
	if (subs < 0) {
		counter.style.color = "red";
	}
	else if (subs >=0 && subs <10) {
		counter.style.color = "gray";
	}
	else if (subs >=10 && subs <20) {
		counter.style.color = "green";
	}
	else {
		counter.style.color = "#7BA5E5";
	}
}


//creando variables y funcion para ajustar el tamaño del textarea 
var textarea = document.getElementById("comment");
var heightLimit = 200; /* Maximum height: 200px */

textarea.oninput = function() {
  textarea.style.height = ""; /* Reset the height*/
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};

