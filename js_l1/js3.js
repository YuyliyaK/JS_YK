function newNames(names1, names2) {
	for (let i = 0; i < names1.length; i++) {
		for (let j = 0; j < names2.length; j++) {
			if (names1[i] == names2[j]) {
				delete names1[i]

			}

		}
	}
	console.log(names1)
}
