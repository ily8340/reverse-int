module.exports = function reverse (n) {
	if (n < 0) {
		n = n * -1;
	}
	let str = Array.from(`${n}`).reverse().join('');
	return Number(str);
}  
}
