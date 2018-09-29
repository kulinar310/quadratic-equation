module.exports = function solveEquation(equation) {
	equation = equation.replace(/\s+/g, '');
	equation = equation.split('*x');
	var a = +equation[0];
	var c = +equation[2];

	equation = equation[1];
	equation = equation.split('^2');
	var b = +equation[1];

	var first = -b/ 2 /a + Math.pow(Math.pow(b,2) - 4 * a * c , 0.5) / 2 / a;
	var second = -b/ 2 / a -Math.pow(Math.pow(b,2) - 4 * a * c ,0.5) / 2 / a;

	var first = Math.round(first);
	var second = Math.round(second);

	if(first <= second){
		return([first, second]);
	}else{
		return([second, first]);
	}
}
