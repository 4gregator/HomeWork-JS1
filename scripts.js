// 1)
let n = 0,
	nP = [];

while (n <= 100) {
	if (n > 1) {
		if (nP.length) {
			let counter = 0;
			for (let i = 0; i < nP.length; i++) {
				if (n % nP[i]) counter++;
				else break;
			}
			if (counter == nP.length) nP.push(n);
		} else nP.push(n);
	}
	n++;
}
console.log(nP);

// 2)
function evenOdd(n) {
	let string;
	if (n) {
		string = (n % 2) ? n + " - нечетное число" : n + " - четное число";
	} else string = n + " - это ноль";
	return string;
}

n = 0;
do {
	console.log(evenOdd(n));
	n++;
} while (n <= 10);

// 3)
for (let i = 0; i < 10; console.log(i++)) {}

// 4)
let x = "";

for (let i = 1; i <= 20; i++) {
	x = x + "x";
	console.log(x);
}