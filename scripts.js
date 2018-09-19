function getChekmateBoard() {
	let field = document.createElement("div"),
		black = false,
		string = "ABCDEFGH";

	field.style.width = "820px";
	field.style.margin = "auto";
	field.style.display = "grid";
	field.style.gridTemplate = "repeat(8, 100px) 20px / 20px repeat(8, 100px)";
	document.getElementsByTagName("body")[0].insertBefore(field, document.getElementsByTagName("script")[0]);

	for (let j = 0; j < 9; j++) {
		for (let i = 0; i < 9; i++) {
			if (i == 0 || j == 8) {
				let index = document.createElement("p");
				index.style.alignSelf = "center";
				index.style.justifySelf = "center";
				if (i == 0) index.innerHTML = (j != 8) ? 8 - j : "";
				else index.innerHTML = string[i - 1];
				field.appendChild(index);
			} else {
				let cell = document.createElement("div"),
					figure = document.createElement("img");
				cell.style.background = black ? "#7c7c7c" : "#f3f3f3";
				field.appendChild(cell);
				black = black ? false : true;
				figure.style.margin = "10px";
				switch(j) {
					case 7:
						switch(i) {
							case 1:;
							case 8:
								figure.src = "img/wR.png";
								break;
							case 2:;
							case 7:
								figure.src = "img/wN.png";
								break;
							case 3:;
							case 6:
								figure.src = "img/wB.png";
								break;
							case 4:
								figure.src = "img/wK.png";
								break;
							case 5:
								figure.src = "img/wQ.png";
						} break;
					case 6:
						figure.src = "img/wP.png";
						break;
					case 1:
						figure.src = "img/bP.png";
						break;
					case 0:
						switch(i) {
							case 1:;
							case 8:
								figure.src = "img/bR.png";
								break;
							case 2:;
							case 7:
								figure.src = "img/bN.png";
								break;
							case 3:;
							case 6:
								figure.src = "img/bB.png";
								break;
							case 4:
								figure.src = "img/bK.png";
								break;
							case 5:
								figure.src = "img/bQ.png";
						}
				}
				cell.appendChild(figure);
			}
		}
		black = black ? false : true;
	}

	//copyright
	let link = document.createElement("p");
	link.innerHTML = 'В работе использовались шахматные фигуры с сайта <a target="_blank" href="https://www.vexels.com/">Vexels.com</a>';
	document.getElementsByTagName("body")[0].insertBefore(link, field);
};

getChekmateBoard();