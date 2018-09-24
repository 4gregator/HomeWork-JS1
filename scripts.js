let basket = [
	{
		id: 5468,
		productName: "Кирпич, м3",
		quantity: 15,
		price: 45
	}, {
		id: 7124,
		productName: "Брус 40х40, м3",
		quantity: 4,
		price: 128
	}, {
		id: 6781,
		productName: "Книга 'строительство для чайников', шт",
		quantity: 1,
		price: 14.2
	}
];

// предположим, что кнопке "купить" присвоен класс "buy"
let addToBasket = document.getElementByClassName("buy");

addToBasket.onclick = function() {
	// проверяем, есть ли уже такой товар в корзине
	let checkID = this.id,
		product = this.name,
		c = 0;
	for (let i = 0; i < basket.length; i++) {
		if (basket[i].id == checkID) {
			basket[i].quantity++;
		} else c++;
	}
	if (c == basket.length) {
		basket.push({
			id: 0,
			productName: 0,
			quantity: 0,
			price: 0
		});
		basket[basket.length - 1].id = checkID;
		basket[basket.length - 1].productName = product;
		basket[basket.length - 1].quantity = 1;
		basket[basket.length - 1].price = 100; //цена видимо должна браться из базы
	}
	countBasketPrice(basket);
};

function countBasketPrice(basket) {
	let sum = 0;

	for (let i = 0; i < basket.length; i++) {
		sum += basket[i].quantity * basket[i].price;
	}

	return sum;
};