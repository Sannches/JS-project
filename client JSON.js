localStorage.removeItem('toClient');
console.log("I'm Client");
window.addEventListener('storage', receiveFromServer);


function receiveFromServer(event){	//получаем от сервера
	if(event.key == 'toClient'){
		objFromEden = JSON.parse(localStorage.getItem('toClient'));
		console.log(`Получен объект с сервера:  ${objFromEden}`);
		console.log(`Получен элемент:  ${objFromEden.gor}`);
		msg = `Экскурсионный тур - ${objFromEden.gor}:`;
		msg += `&#x000D   - взрослый билет: ${objFromEden.vzr} руб.;`;
		msg += `&#x000D   - детский билет: ${objFromEden.det} руб.;`;
		msg += `&#x000D   - дни: ${objFromEden.dni};`;
		msg += `&#x000D   - отправка: ${objFromEden.chas} час.`;

		window.txtsrv.innerHTML = msg;
		localStorage.removeItem('toClient');
	}

	var newItem = document.createElement('option');
	newItem.innerText = "Алушта";
	s1.appendChild(newItem);       



}

function sendToServer(obj){	//передаем на сервер
	if(arguments.length>0){
		console.log(`Объект к отправке на сервер: ${obj}`);
		jsonString = JSON.stringify(obj);
		console.log(`Объект преобразован в строку JSON: ${jsonString}`);
		localStorage.setItem('toServer', jsonString);
	}
	else{
		console.log("arguments is empty");
	}
	
}


function newItem() {
	//let gorod = JSON.parse(localStorage.getItem('Ekskurs'));
	//let GorodNew = [4,"Алушта", 1300, 620, "ср, пт, вс", "5-30, 7-00"];
	//gorod.push(GorodNew);

	//localStorage.clear();    
	//localStorage.setItem(`Ekskurs`, JSON.stringify(gorod));

	var newItem = document.createElement('option');
	newItem.innerText = "Алушта";
	s1.appendChild(newItem);       
	//alert("Привет");
}
