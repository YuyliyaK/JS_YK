function searchPlanets(Planets) {
	let newArray = {
		name: [],
		parametrs: []
	};
	if (Planets.parametrs.length == Planets.name.length) {
		for (let i = 0; i < Planets.parametrs.length; i++) {
			if (Planets.parametrs[i] > 10000) {
				newArray.name.push(Planets.name[i]);
				newArray.parametrs.push(Planets.parametrs[i]);
				delete Planets.name[i];
				delete Planets.parametrs[i];

			}

		}
		console.log('Diameter more than 1000: ');
		console.log(newArray);
		console.log('Diameter smaller than 1000:  ');
		console.log(Planets);
	}
	else {
		console.log('You use wrong object. The planets number must be equal the diameters number')
	}
}
//example of "planets" object
//let Ps = {
//	name: ['A', 'B', 'D', 'F'],
//	parametrs: [100, 50000, 6000, 40555]
//}
//searchPlanets(Ps);