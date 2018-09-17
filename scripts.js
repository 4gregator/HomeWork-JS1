// 1)
let number = parseInt(prompt("Введите число от 0 до 999")),
	obj = {};

function numberToObj(number) {
	if ( isNaN(number) ) {
		console.log("Введено не число");
		return obj;
	} else if (number > 999) {
		console.log("Введено число выше указанного диапазона");
		return obj;
	} else {
		obj.units = number % 10;
		obj.dozens = Math.floor(number / 10) % 10;
		obj.hundreds = Math.floor(number / 100) % 10;
		return obj;
	}
}

console.log(numberToObj(number));

// 2)
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

function countBasketPrice(basket) {
	let sum = 0;

	for (let i = 0; i < basket.length; i++) {
		sum += basket[i].quantity * basket[i].price;
	}

	return sum;
}

console.log(countBasketPrice(basket));