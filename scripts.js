// 1) Ответ: {
//	Постфиксная форма отличается от префиксной тем, что возвращает старое значение, бывшее до увеличения.
//};

 // 2) Ответ: x = 5;

 // 3)
let a, b;
 function random(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	return rand;
}
 a = random(-15, 15);
b = random(-15, 15);
 if (a >= 0 && b >= 0) {
	console.log(a - b);
} else if (a < 0 && b < 0) {
	console.log(a * b);
} else console.log(a + b);

 // 4)
a = random(0, 15);
switch(a) {
	case 0:
		console.log(0);
	case 1:
		console.log(1);
	case 2:
		console.log(2);
	case 3:
		console.log(3);
	case 4:
		console.log(4);
	case 5:
		console.log(5);
	case 6:
		console.log(6);
	case 7:
		console.log(7);
	case 8:
		console.log(8);
	case 9:
		console.log(9);
	case 10:
		console.log(10);
	case 11:
		console.log(11);
	case 12:
		console.log(12);
	case 13:
		console.log(13);
	case 14:
		console.log(14);
	default:
		console.log(15);
}

 // 5)
function sum(x, y) {
	return x + y;
}
 function sub(x, y) {
	return x - y;
}
 function mlt(x, y) {
	return x * y;
}
 function dvs(x, y) {
	return x / y;
}

 // 6)
function mathOperation(arg1, arg2, operation) {
	let result;
	switch(operation) {
		case "-":
			result = sub(arg1, arg2);
			break;
		case "*":
			result = mlt(arg1, arg2);
			break;
		case "/":
			result = dvs(arg1, arg2);
			break;
		default:
			result = sum(arg1, arg2);
	}
	return result;
}
 // 7) null числом не является, поэтому не может быть ни больше, ни меньше, ни равно нулю

 // 8)
function power(val, pow) {
	if (pow == 0) {
		if (val == 0) return NaN;
		else return 1;
	} else if (pow > 0) {
		if (pow == 1) return val;
		else return val * power(val, pow - 1);
	} else {
		if (pow == -1) return 1 / val;
		else return (1 / val) * power(val, pow + 1);
	}
} 