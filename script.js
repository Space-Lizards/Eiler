const eilerHeader = () => {
	const btn = document.querySelector('#btn_click');
	const output = document.querySelector('#output_value');

	function eiler(fi) {
		const isNumber = (number) => {
			return typeof number === 'number' && isFinite(number);
		};

		if (isNumber(fi) && fi > 1) {
			let result = fi;

			for (i = 2; i * i <= fi; i++) {
				//если число не делится ни на какое число до его корня, то оно и не делится ни на какое и после корня (для оптимизации)
				if (fi % i === 0) {
					while (fi % i === 0) {
						//разложение на множители
						fi /= i;
					}
					result -= result / i; //(p^k-1)*(p - 1)
				}
			}

			if (fi > 1) {
				result -= result / fi; // если fi осталось больше 1 (то есть fi простое), применяем формулу p - 1
			}
			return result;
		}
	}

	btn.addEventListener('click', function () {
		const input = parseInt(document.querySelector('#input_value').value);
		const result = eiler(input);

		if (result) {
			output.textContent = `число эйлера: ${result}`;
		} else {
			output.textContent = 'Введите значение!';
		}
	});
};
eilerHeader();
