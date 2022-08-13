localStorage.removeItem('toServer');
console.log("I'm Server");
window.addEventListener('storage', receiveFromClient);

historyArr = [];
function receiveFromClient(event){	//получаем запрос от клиента
	if(event.key == 'toServer'){
		objFromHell = JSON.parse(localStorage.getItem('toServer'));
		//console.log(`From client\ndata:  ${objFromHell}\ntype: ${typeof(objFromHell)}`);
		
		rezult = 0;
		rezult = Calculate(objFromHell);	//производим вычисления
		historyArr.push(rezult);
		localStorage.setItem('toClient', JSON.stringify(rezult));	//отправляем ответ клиенту
		localStorage.removeItem('toServer');
		//console.log(historyArr);
	}
}


function Calculate(nom){

//	let gorod = [
// 		[1,"Севастополь", 830, 400, "ежедневно", "6-00, 9-00"],
//		[2,"Ялта", 380, 150, "пн, ср, пт", "8-00, 10-00, 12-00, 14-00, 16-00"],
//		[3,"Бахчисарай", 1300, 620, "ср, пт, вс", "5-30, 7-00"]
//		];

	let gorod = JSON.parse(localStorage.getItem('Ekskurs'))
	//console.log(gorod.length);
	//console.log(gorod[1][1]);


	let rez = { //объект
		gor : "",
		vzr : 0,
		det : 0,
		dni : "",
		chas : ""
		};

	for (var i = 1; i < 4; i++) {
		switch(i){
			case nom:
				rez.gor = gorod[nom-1][1];
				rez.vzr = gorod[nom-1][2];
				rez.det = gorod[nom-1][3];
				rez.dni = gorod[nom-1][4];
				rez.chas = gorod[nom-1][5];
				//console.log(nom);
				//console.log(rez.gor);
				//console.log(rez.vzr);
				//console.log(rez.det);
				//console.log(rez.dni);
				//console.log(rez.chas);
			break;
		}
	}
	return rez;
}
