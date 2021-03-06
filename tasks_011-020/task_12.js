/*
Последовательность треугольных чисел образуется путем сложения натуральных чисел.
К примеру, 7-ое треугольное число равно 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. Первые десять треугольных чисел:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Перечислим делители первых семи треугольных чисел:

 1: 1
 3: 1, 3
 6: 1, 2, 3, 6
10: 1, 2, 5, 10
15: 1, 3, 5, 15
21: 1, 3, 7, 21
28: 1, 2, 4, 7, 14, 28
Как мы видим, 28 - первое треугольное число, у которого более пяти делителей.

Каково первое треугольное число, у которого более пятисот делителей?
*/

/*
https://subscribe.ru/archive/comp.soft.prog.metodpascal/201001/04005037.html
*/

const until = 500
let num = 0
let triangle = 0
let divisor = 0

while (true) {
	divisor = 2 // 1 и само число
	triangle += num
	for (let i = 2; i <= Math.sqrt(triangle); i++) {
		if (triangle % i === 0) {
			divisor += 2
			if (Number.isInteger(Math.sqrt(triangle))) divisor--
		}
	}
	if (divisor > until) break
	num++
}

console.log('Result:', triangle) // OUTPUT: 76576500

