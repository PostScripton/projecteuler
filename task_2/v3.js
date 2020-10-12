/*
Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.
*/

/*
Каждое третье число Фибоначчи - чётное, поэтому можно избавиться от лишних проверок "чётости"
1 1 (2) 3 5 (8) 13 21 (34) 55 89 (144) ...
*/

let limit = 4000000
let f1	= 1,
	f2	= 1
	f3 = f1 + f2
let sum = 0

while (f3 < limit) {
	sum += f3
	f1 = f2 + f3
	f2 = f3 + f1
	f3 = f1 + f2
}

console.log(`Result: ${sum}`) // OUTPUT: 4613732